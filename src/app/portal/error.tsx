"use client";

import { useEffect } from "react";

/**
 * Portal Page Error Boundary
 * ──────────────────────────
 * Catches errors specific to the portal route (e.g. MongoDB query failure
 * when fetching announcements). Allows retry without full page reload.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Portal page error:", error);
  }, [error]);

  return (
    <main className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-lg mx-auto text-center px-8">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-error-container rounded-2xl flex items-center justify-center">
          <span className="material-symbols-outlined text-on-error-container text-4xl">
            wifi_off
          </span>
        </div>

        <h2 className="font-headline font-extrabold text-3xl text-primary mb-4">
          Portal Temporarily Unavailable
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
          We couldn&apos;t connect to the portal services. This could be a temporary
          network issue — please try again.
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

        <p className="text-outline-variant text-sm mt-10">
          Need help?{" "}
          <a
            href="mailto:it@namal.edu.pk"
            className="text-primary font-bold hover:underline"
          >
            Contact IT Support
          </a>
        </p>
      </div>
    </main>
  );
}
