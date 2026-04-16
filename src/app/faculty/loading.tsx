/**
 * Faculty Page Loading Skeleton
 * ─────────────────────────────
 * Displayed while the faculty Server Component queries MongoDB.
 * Mirrors the editorial header + card grid layout.
 */
export default function Loading() {
  return (
    <main className="pt-32 pb-24 px-12 max-w-[1920px] mx-auto animate-pulse">
      {/* Header Skeleton */}
      <header className="mb-24 grid grid-cols-12 gap-8">
        <div className="col-span-8 lg:col-span-7 space-y-6">
          <div className="h-4 w-40 bg-surface-container-high rounded-full" />
          <div className="h-16 w-[500px] max-w-full bg-surface-container-high rounded-2xl" />
          <div className="h-6 w-[400px] max-w-full bg-surface-container rounded-xl" />
          <div className="h-4 w-[350px] max-w-full bg-surface-container rounded-lg" />
        </div>
        <div className="col-span-4 lg:col-span-5">
          <div className="bg-surface-container-low rounded-xl aspect-[4/3]" />
        </div>
      </header>

      {/* Filter Bar Skeleton */}
      <section className="mb-16 bg-surface-container-low rounded-xl p-4 flex flex-wrap items-center justify-between gap-6">
        <div className="flex-1 min-w-[300px]">
          <div className="h-12 bg-surface-container-lowest rounded-lg" />
        </div>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-24 bg-surface-container-highest rounded-full" />
          ))}
        </div>
      </section>

      {/* Results count skeleton */}
      <div className="h-4 w-48 bg-surface-container rounded-lg mb-8" />

      {/* Faculty Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col">
            <div className="aspect-[3/4] bg-surface-container-high" />
            <div className="p-8 space-y-4">
              <div className="h-6 w-3/4 bg-surface-container-high rounded-lg" />
              <div className="h-4 w-1/2 bg-surface-container rounded-lg" />
              <div className="pt-4 space-y-2">
                <div className="h-3 w-32 bg-surface-container rounded" />
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-surface-container rounded-lg" />
                  <div className="h-6 w-20 bg-surface-container rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
