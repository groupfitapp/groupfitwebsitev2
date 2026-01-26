import { lazy, Suspense, ReactNode } from "react";

// Lazy load framer-motion to reduce initial bundle size
const MotionDiv = lazy(() => 
  import("framer-motion").then((mod) => ({ default: mod.motion.div }))
);

const MotionH1 = lazy(() => 
  import("framer-motion").then((mod) => ({ default: mod.motion.h1 }))
);

const MotionH2 = lazy(() => 
  import("framer-motion").then((mod) => ({ default: mod.motion.h2 }))
);

const MotionP = lazy(() => 
  import("framer-motion").then((mod) => ({ default: mod.motion.p }))
);

interface LazyMotionProps {
  children?: ReactNode;
  className?: string;
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  whileInView?: Record<string, unknown>;
  whileHover?: Record<string, unknown>;
  viewport?: { once?: boolean; margin?: string };
  transition?: Record<string, unknown>;
  style?: React.CSSProperties;
}

// Fallback renders the same element without animation
function FallbackDiv({ children, className }: LazyMotionProps) {
  return <div className={className}>{children}</div>;
}

function FallbackH1({ children, className }: LazyMotionProps) {
  return <h1 className={className}>{children}</h1>;
}

function FallbackH2({ children, className }: LazyMotionProps) {
  return <h2 className={className}>{children}</h2>;
}

function FallbackP({ children, className }: LazyMotionProps) {
  return <p className={className}>{children}</p>;
}

// Export lazy-wrapped motion components
export function LazyMotionDiv(props: LazyMotionProps) {
  return (
    <Suspense fallback={<FallbackDiv {...props} />}>
      <MotionDiv {...(props as any)} />
    </Suspense>
  );
}

export function LazyMotionH1(props: LazyMotionProps) {
  return (
    <Suspense fallback={<FallbackH1 {...props} />}>
      <MotionH1 {...(props as any)} />
    </Suspense>
  );
}

export function LazyMotionH2(props: LazyMotionProps) {
  return (
    <Suspense fallback={<FallbackH2 {...props} />}>
      <MotionH2 {...(props as any)} />
    </Suspense>
  );
}

export function LazyMotionP(props: LazyMotionProps) {
  return (
    <Suspense fallback={<FallbackP {...props} />}>
      <MotionP {...(props as any)} />
    </Suspense>
  );
}
