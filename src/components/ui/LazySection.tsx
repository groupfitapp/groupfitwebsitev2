import { useRef, useState, useEffect, type ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  /** How many pixels before the viewport to start rendering */
  rootMargin?: string;
  /** Minimum height placeholder to reserve space and prevent CLS */
  minHeight?: string;
  /** Optional className for the wrapper */
  className?: string;
}

/**
 * Defers rendering of children until the section is near the viewport.
 * This prevents forced reflows from heavy components (accordions, carousels)
 * that measure DOM dimensions on mount.
 */
export function LazySection({
  children,
  rootMargin = "200px",
  minHeight = "200px",
  className,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className} style={isVisible ? undefined : { minHeight }}>
      {isVisible ? children : null}
    </div>
  );
}
