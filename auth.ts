import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "@/lib/mongodb";
import Student from "@/models/Student";
import bcrypt from "bcryptjs";

/**
 * Main NextAuth Instance
 * ──────────────────────
 * Initializes Auth.js with the credentials provider. This runs in Node.js,
 * so we can safely connect to MongoDB and use bcryptjs here.
 */
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  trustHost: true,
  providers: [
    Credentials({
      name: "Student ID",
      credentials: {
        studentId: { label: "Student ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.studentId || !credentials?.password) {
          return null;
        }

        const studentId = credentials.studentId as string;
        const password = credentials.password as string;

        try {
          await dbConnect();
          // Find student and explicitly select the hidden hashedPassword field
          const student = await Student.findOne({ studentId }).select("+hashedPassword");
          
          if (!student) {
            console.log("No student found with this ID.");
            return null;
          }
          
          // Verify password
          const passwordsMatch = await bcrypt.compare(password, student.hashedPassword);
          if (!passwordsMatch) {
            console.log("Invalid password.");
            return null;
          }

          // Return user object, mapping MongoDB _id to Auth.js id
          return {
            id: student._id.toString(),
            name: student.name,
            email: student.email,
            studentId: student.studentId, // Custom field
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    // Add custom fields to the JWT token
    async jwt({ token, user }) {
      if (user) {
        // @ts-ignore
        token.studentId = user.studentId;
      }
      return token;
    },
    // Add custom fields to the Session object for client/server components
    async session({ session, token }) {
      if (token && session.user) {
        // @ts-ignore
        session.user.studentId = token.studentId;
        // @ts-ignore
        session.user.id = token.sub;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt",
  },
});
