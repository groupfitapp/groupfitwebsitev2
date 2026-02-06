import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // Disable browser's automatic scroll restoration so our manual scrollTo works
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      const timeoutId = setTimeout(scrollToHash, 300);
      const fallbackId = setTimeout(scrollToHash, 600);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(fallbackId);
      };
    } else {
      // Blur any focused element to prevent Radix popover/dropdown focus
      // restoration from scrolling the page back to the trigger button
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }

      // Use 'instant' to override any remaining CSS scroll-behavior
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

      // Fallback: scroll again after Radix focus restoration and lazy-load settle
      const raf = requestAnimationFrame(() => {
        if (document.activeElement instanceof HTMLElement && document.activeElement !== document.body) {
          document.activeElement.blur();
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      });

      const fallback = setTimeout(() => {
        if (document.activeElement instanceof HTMLElement && document.activeElement !== document.body) {
          document.activeElement.blur();
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }, 150);

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(fallback);
      };
    }
  }, [pathname, hash]);

  return null;
}
