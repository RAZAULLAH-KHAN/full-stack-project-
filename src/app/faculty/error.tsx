"use client";

import { useEffect } from "react";

/**
 * Faculty Page Error Boundary
 * ───────────────────────────
 * Catches errors specific to the faculty route (e.g. MongoDB query failure).
 * Allows the user to retry without refreshing the entire page.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Faculty page error:", error);
  }, [error]);

  return (
    <main className="pt-32 pb-24 px-12 max-w-[1920px] mx-auto">
      <div className="max-w-2xl mx-auto text-center py-20">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-error-container rounded-2xl flex items-center justify-center">
          <span className="material-symbols-outlined text-on-error-container text-4xl">
            person_off
          </span>
        </div>

        <h2 className="font-headline font-extrabold text-3xl text-primary mb-4">
          Unable to Load Faculty
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
          We couldn&apos;t retrieve the faculty directory right now. This is likely a
          temporary database issue — please try again in a moment.
        </p>

        {error.digest && (
          <p className="text-outline text-xs font-mono mb-6">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="hero-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">refresh</span>
            Retry
          </button>
          <a
            href="/"
            className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-headline font-bold hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">home</span>
            Home
          </a>
        </div>
      </div>
    </main>
  );
}
