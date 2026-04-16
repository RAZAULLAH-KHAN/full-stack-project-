import type { NextAuthConfig } from "next-auth";

/**
 * NextAuth Configuration (Edge-compatible)
 * ────────────────────────────────────────
 * We separate the auth config here so Next.js Middleware can use it
 * without importing Node.js-only libraries like Mongoose or bcryptjs.
 */
export const authConfig = {
  pages: {
    signIn: "/portal/login",
  },
  callbacks: {
    // This callback controls access to routes protected by middleware
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnPortal = nextUrl.pathname.startsWith("/portal");
      const isLoginRoute = nextUrl.pathname.startsWith("/portal/login");
      
      if (isOnPortal && !isLoginRoute) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && isLoginRoute) {
        // If logged in, redirect away from the login page to the dashboard
        return Response.redirect(new URL("/portal", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Empty for now, populated in auth.ts
} satisfies NextAuthConfig;
