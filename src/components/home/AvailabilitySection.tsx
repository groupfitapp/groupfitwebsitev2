import { lazy, Suspense } from "react";

const SearchSection = lazy(() => import("@/components/SearchSection"));

/**
 * Fallback reserves the same min-height as SearchSection to prevent CLS.
 * Without this, the section goes from 0px to ~100vh when JS loads,
 * causing a massive layout shift (footer CLS ~0.315).
 */
function SearchFallback() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="h-12 w-3/4 mx-auto bg-muted/50 rounded-lg animate-pulse mb-4" />
          <div className="h-6 w-1/2 mx-auto bg-muted/30 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function AvailabilitySection() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchSection />
    </Suspense>
  );
}
