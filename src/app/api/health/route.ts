import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

/**
 * GET /api/health
 * Quick health-check endpoint to verify MongoDB connectivity.
 */
export async function GET() {
  try {
    const mongoose = await dbConnect();
    const state = mongoose.connection.readyState;

    // readyState enum: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    const stateMap: Record<number, string> = {
      0: "disconnected",
      1: "connected",
      2: "connecting",
      3: "disconnecting",
    };

    return NextResponse.json({
      status: "ok",
      database: stateMap[state] ?? "unknown",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
