/**
 * Admissions Page Loading Skeleton
 * ────────────────────────────────
 * Displayed during initial page load. Even though the admissions page
 * is mostly static, the ApplicationForm component may trigger a
 * server action, so a skeleton provides visual continuity.
 */
export default function Loading() {
  return (
    <main className="pt-20 animate-pulse">
      {/* Hero Skeleton */}
      <section className="relative h-[819px] flex items-center overflow-hidden bg-primary/80">
        <div className="relative max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="h-6 w-48 bg-white/10 rounded-full" />
            <div className="h-16 w-[500px] max-w-full bg-white/10 rounded-2xl" />
            <div className="h-16 w-[350px] max-w-full bg-white/10 rounded-2xl" />
            <div className="h-6 w-[400px] max-w-full bg-white/5 rounded-xl" />
            <div className="flex gap-4 pt-4">
              <div className="h-14 w-44 bg-white/10 rounded-xl" />
              <div className="h-14 w-40 bg-white/5 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Skeleton */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-6">
            <div className="h-10 w-64 bg-surface-container-high rounded-xl" />
            <div className="h-4 w-full bg-surface-container rounded-lg" />
            <div className="h-4 w-3/4 bg-surface-container rounded-lg" />
            <div className="p-8 rounded-xl bg-surface-container-low h-40" />
          </div>
          <div className="md:col-span-8 space-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-xl h-32" />
            ))}
          </div>
        </div>
      </section>

      {/* Form Skeleton */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div className="h-6 w-40 bg-surface-container-high rounded-full" />
            <div className="h-10 w-72 bg-surface-container-high rounded-xl" />
            <div className="h-4 w-full bg-surface-container rounded-lg" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-surface-container-low h-20" />
              ))}
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-2xl p-10 h-[600px]" />
        </div>
      </section>
    </main>
  );
}
