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
      // Wait for lazy-loaded page to render, then scroll to the element
      const scrollToHash = () => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      
      // Use longer delay for lazy-loaded pages to ensure content is rendered
      const timeoutId = setTimeout(scrollToHash, 300);
      
      // Also try again after a longer delay as a fallback
      const fallbackId = setTimeout(scrollToHash, 600);
      
      return () => {
        clearTimeout(timeoutId);
        clearTimeout(fallbackId);
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
