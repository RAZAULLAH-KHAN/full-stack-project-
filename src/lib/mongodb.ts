import mongoose from "mongoose";

/**
 * Global MongoDB connection singleton for Next.js serverless environment.
 *
 * Why a singleton?
 * ────────────────
 * Next.js API routes / Server Actions run as serverless functions.
 * Each cold-start would create a NEW connection to MongoDB, exhausting
 * the connection pool (Atlas free tier: max 500 connections).
 *
 * By caching the connection promise on `globalThis`, we reuse the same
 * connection across hot-reloads in development and across concurrent
 * requests in production.
 */

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "⛔ MONGODB_URI is not defined.\n" +
      "   → Add it to .env.local:\n" +
      "     MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<db>"
  );
}

/**
 * Extend the global type to hold our cached connection.
 * This prevents TypeScript from complaining about the custom property.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = globalThis._mongooseCache ?? {
  conn: null,
  promise: null,
};

if (!globalThis._mongooseCache) {
  globalThis._mongooseCache = cached;
}

/**
 * Returns a cached Mongoose connection. Safe to call from any server
 * context (API route, Server Action, middleware, etc.).
 *
 * @example
 * ```ts
 * import dbConnect from "@/lib/mongodb";
 *
 * export async function GET() {
 *   await dbConnect();
 *   const docs = await MyModel.find();
 *   return Response.json(docs);
 * }
 * ```
 */
async function dbConnect(): Promise<typeof mongoose> {
  // Already connected — return immediately
  if (cached.conn) {
    return cached.conn;
  }

  // No existing connection promise — start one
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false, // Fail fast instead of queueing when disconnected
      maxPoolSize: 10, // Reasonable pool for serverless
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((m) => {
      console.log("✅ MongoDB connected successfully");
      return m;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    // Reset on failure so next call retries
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}

export default dbConnect;
