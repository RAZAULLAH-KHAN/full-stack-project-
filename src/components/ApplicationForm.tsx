"use client";

import { useActionState } from "react";
import { submitApplication, ApplicationResult } from "@/app/actions/admissions";

const programs = [
  "Computer Science",
  "Electrical Engineering",
  "Business Administration",
  "Mathematics",
  "Physics",
  "Environmental Science",
  "Civil Engineering",
];

export default function ApplicationForm() {
  const [state, formAction, isPending] = useActionState<
    ApplicationResult | null,
    FormData
  >(submitApplication, null);

  return (
    <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-10 md:p-14">
      <h3 className="font-headline font-extrabold text-3xl text-primary mb-2">
        Apply Now
      </h3>
      <p className="text-on-surface-variant mb-8">
        Fill out the form below to start your application.
      </p>

      {/* Success Message */}
      {state?.success && (
        <div className="mb-8 p-6 rounded-xl bg-green-50 border border-green-200">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-600 text-2xl mt-0.5">
              check_circle
            </span>
            <div>
              <h4 className="font-headline font-bold text-green-800 mb-1">
                Application Submitted!
              </h4>
              <p className="text-green-700 text-sm">{state.message}</p>
              {state.applicationId && (
                <p className="text-green-600 text-xs mt-2 font-mono">
                  Application ID: {state.applicationId}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {state && !state.success && (
        <div className="mb-8 p-6 rounded-xl bg-red-50 border border-red-200">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-red-600 text-2xl mt-0.5">
              error
            </span>
            <div>
              <h4 className="font-headline font-bold text-red-800 mb-1">
                Submission Error
              </h4>
              <p className="text-red-700 text-sm">{state.message}</p>
            </div>
          </div>
        </div>
      )}

      <form action={formAction} className="space-y-6">
        {/* Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-bold text-on-surface mb-2"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary-container focus:border-transparent transition-all placeholder:text-outline-variant font-label text-sm text-on-surface"
              placeholder="Enter your first name"
            />
            {state?.errors?.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-bold text-on-surface mb-2"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary-container focus:border-transparent transition-all placeholder:text-outline-variant font-label text-sm text-on-surface"
              placeholder="Enter your last name"
            />
            {state?.errors?.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-on-surface mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary-container focus:border-transparent transition-all placeholder:text-outline-variant font-label text-sm text-on-surface"
              placeholder="you@example.com"
            />
            {state?.errors?.email && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.email}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-bold text-on-surface mb-2"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary-container focus:border-transparent transition-all placeholder:text-outline-variant font-label text-sm text-on-surface"
              placeholder="+92-300-1234567"
            />
            {state?.errors?.phone && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Program of Interest */}
        <div>
          <label
            htmlFor="programOfInterest"
            className="block text-sm font-bold text-on-surface mb-2"
          >
            Program of Interest <span className="text-red-500">*</span>
          </label>
          <select
            id="programOfInterest"
            name="programOfInterest"
            required
            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary-container focus:border-transparent transition-all font-label text-sm text-on-surface"
          >
            <option value="">Select a program...</option>
            {programs.map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
          {state?.errors?.programOfInterest && (
            <p className="text-red-500 text-xs mt-1">
              {state.errors.programOfInterest}
            </p>
          )}
        </div>

        {/* Previous Education */}
        <div>
          <label
            htmlFor="previousEducation"
            className="block text-sm font-bold text-on-surface mb-2"
          >
            Previous Education <span className="text-red-500">*</span>
          </label>
          <textarea
            id="previousEducation"
            name="previousEducation"
            rows={4}
            required
            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl focus:ring-2 focus:ring-secondary-container focus:border-transparent transition-all placeholder:text-outline-variant font-label text-sm text-on-surface resize-none"
            placeholder="Describe your previous education (e.g., FSc Pre-Engineering from Punjab College, GPA 3.8)"
          />
          {state?.errors?.previousEducation && (
            <p className="text-red-500 text-xs mt-1">
              {state.errors.previousEducation}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full hero-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-xl hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
        >
          {isPending ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-on-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Submitting Application...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">send</span>
              Submit Application
            </>
          )}
        </button>
      </form>
    </div>
  );
}
