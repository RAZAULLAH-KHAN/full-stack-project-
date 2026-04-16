"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/actions/auth";

export default function LoginForm() {
  // useActionState handles the progressive enhancement of the form state
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className="space-y-6 max-w-sm w-full mx-auto">
      <div className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-xl border border-outline-variant/20">
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">login</span>
          </div>
          <h1 className="font-headline font-extrabold text-2xl text-primary mb-2">Student Portal</h1>
          <p className="text-on-surface-variant text-sm">Enter your Namal credentials to access the dashboard</p>
        </div>

        <div className="space-y-4">
          {/* Student ID Field */}
          <div>
            <label
              htmlFor="studentId"
              className="block text-xs font-bold text-on-surface mb-2 uppercase tracking-wide"
            >
              Student ID
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">badge</span>
              <input
                id="studentId"
                type="text"
                name="studentId"
                placeholder="CS-12345"
                required
                className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-outline-variant font-mono text-sm text-on-surface"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-xs font-bold text-on-surface mb-2 uppercase tracking-wide"
            >
              Password
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">lock</span>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
                className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-outline-variant font-label text-sm text-on-surface"
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mt-4 h-6" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <div className="flex items-center gap-2 text-error text-sm">
              <span className="material-symbols-outlined text-base">error</span>
              <p>{errorMessage}</p>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full mt-6 bg-primary text-on-primary py-3 rounded-xl font-headline font-bold shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          {isPending ? (
             <>
               <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
               Authenticating...
             </>
          ) : (
            <>
              Sign In <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </>
          )}
        </button>
      </div>

      <div className="text-center mt-6">
        <a href="#" className="text-primary text-sm font-bold hover:underline">
          Forgot your password?
        </a>
      </div>
    </form>
  );
}
