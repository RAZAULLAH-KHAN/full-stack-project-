/**
 * Homepage Loading Skeleton
 * ─────────────────────────
 * Displayed by Next.js while the homepage Server Component
 * awaits the MongoDB announcements query.
 */
export default function Loading() {
  return (
    <main className="pt-20 animate-pulse">
      {/* Hero Skeleton */}
      <section className="relative h-[870px] flex items-center overflow-hidden bg-surface-container-low">
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-2xl space-y-6">
            <div className="h-6 w-48 bg-surface-container-high rounded-full" />
            <div className="h-16 w-[600px] max-w-full bg-surface-container-high rounded-2xl" />
            <div className="h-16 w-[450px] max-w-full bg-surface-container-high rounded-2xl" />
            <div className="h-6 w-[500px] max-w-full bg-surface-container rounded-xl" />
            <div className="flex gap-4 pt-4">
              <div className="h-14 w-44 bg-surface-container-high rounded-xl" />
              <div className="h-14 w-40 bg-surface-container rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Skeleton */}
      <section className="relative z-20 -mt-24 max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface-container-lowest p-10 rounded-xl shadow-2xl flex flex-col items-center text-center">
              <div className="h-12 w-24 bg-surface-container-high rounded-xl mb-2" />
              <div className="h-4 w-48 bg-surface-container rounded-lg" />
            </div>
          ))}
        </div>
      </section>

      {/* Path Cards Skeleton */}
      <section className="py-24 max-w-screen-2xl mx-auto px-8">
        <div className="mb-16">
          <div className="h-10 w-72 bg-surface-container-high rounded-xl mb-4" />
          <div className="w-24 h-1 bg-surface-container-high rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <div className="h-[450px] bg-surface-container-low rounded-xl mb-6" />
              <div className="h-4 w-full bg-surface-container rounded-lg mb-3" />
              <div className="h-4 w-2/3 bg-surface-container rounded-lg" />
            </div>
          ))}
        </div>
      </section>

      {/* News Section Skeleton */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="mb-12">
            <div className="h-10 w-64 bg-surface-container-high rounded-xl mb-4" />
            <div className="h-4 w-96 max-w-full bg-surface-container rounded-lg" />
          </div>
          <div className="flex gap-8 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[400px] bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <div className="h-56 bg-surface-container-high" />
                <div className="p-8 space-y-3">
                  <div className="h-3 w-24 bg-surface-container rounded" />
                  <div className="h-5 w-full bg-surface-container-high rounded-lg" />
                  <div className="h-4 w-3/4 bg-surface-container rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
