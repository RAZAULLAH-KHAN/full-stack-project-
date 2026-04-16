import NextAuth, { DefaultSession } from "next-auth";

// Extending the built-in session and user types with our custom fields
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The student's ID (e.g., CS-12345) */
      studentId: string;
    } & DefaultSession["user"];
  }

  interface User {
    /** The student's ID (e.g., CS-12345) */
    studentId: string;
  }
}
