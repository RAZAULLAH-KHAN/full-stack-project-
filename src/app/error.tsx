"use client";

import { useEffect } from "react";

/**
 * Global Error Boundary
 * ─────────────────────
 * Catches runtime errors (e.g. MongoDB timeouts, network failures)
 * in the root layout's children and displays a graceful fallback UI.
 *
 * Must be a Client Component per Next.js requirements.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <main className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center px-8">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto mb-8 bg-error-container rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-on-error-container text-5xl">
            cloud_off
          </span>
        </div>

        {/* Title */}
        <h1 className="font-headline font-extrabold text-4xl text-primary mb-4 tracking-tight">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
          We encountered an issue while loading this page. This may be due to a
          temporary database connection problem.
        </p>

        {/* Error digest (non-sensitive) */}
        {error.digest && (
          <p className="text-outline text-xs font-mono mb-8">
            Error ID: {error.digest}
          </p>
        )}

        {/* Retry Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="hero-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">refresh</span>
            Try Again
          </button>
          <a
            href="/"
            className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">home</span>
            Go Home
          </a>
        </div>

        {/* Help text */}
        <p className="text-outline-variant text-sm mt-10">
          If the problem persists, please contact{" "}
          <a
            href="mailto:support@namal.edu.pk"
            className="text-primary font-bold hover:underline"
          >
            support@namal.edu.pk
          </a>
        </p>
      </div>
    </main>
  );
}
