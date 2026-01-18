import { lazy, Suspense } from "react";

const SearchSection = lazy(() => import("@/components/SearchSection"));

export function AvailabilitySection() {
  return (
    <Suspense fallback={null}>
      <SearchSection />
    </Suspense>
  );
}
