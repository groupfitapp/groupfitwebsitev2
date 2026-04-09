import { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import { pageVariants } from "@/lib/animations";

// ✅ Lazy-load pages to reduce initial JS (helps PageSpeed "Reduce unused JavaScript")
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Activities = lazy(() => import("./pages/Activities"));
const ActivityDetail = lazy(() => import("./pages/ActivityDetail"));
const Cities = lazy(() => import("./pages/Cities"));
const CityDetail = lazy(() => import("./pages/CityDetail"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Download = lazy(() => import("./pages/Download"));
const Trainer = lazy(() => import("./pages/Trainer"));
const TrainerHowItWorks = lazy(() => import("./pages/TrainerHowItWorks"));
const TrainerRequirements = lazy(() => import("./pages/TrainerRequirements"));
const TrainerFAQ = lazy(() => import("./pages/TrainerFAQ"));
const TrainerDownload = lazy(() => import("./pages/TrainerDownload"));
const WebsiteTerms = lazy(() => import("./pages/WebsiteTerms"));
const WebsitePrivacy = lazy(() => import("./pages/WebsitePrivacy"));
const AppUserTerms = lazy(() => import("./pages/AppUserTerms"));
const AppTrainerTerms = lazy(() => import("./pages/AppTrainerTerms"));
const AppPrivacy = lazy(() => import("./pages/AppPrivacy"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    ttq?: {
      page: (...args: any[]) => void;
      track: (...args: any[]) => void;
    };
  }
}

/**
 * Tracks SPA route changes for GA4 + Meta Pixel + TikTok Pixel.
 * Keep the base scripts in index.html (loaded once), then fire events on navigation.
 */
const AnalyticsRouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const page_path = location.pathname + location.search;

    // GA4 page_view on SPA route changes
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-X7P71JVPNM", { page_path });
    }

    // Meta Pixel PageView on SPA route changes
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }

    // TikTok Pixel page view on SPA route changes
    if (typeof window.ttq?.page === "function") {
      window.ttq.page();
    }

    // TikTok ViewContent on key pages
    const viewContentMap: Record<string, string> = {
      "/download": "Download",
      "/trainer": "Trainer",
      "/about": "About",
      "/how-it-works": "How It Works",
      "/activities": "Activities",
      "/cities": "Cities",
      "/faq": "FAQ",
      "/availability": "Availability"
    };

    const contentName = viewContentMap[location.pathname];

    if (contentName && typeof window.ttq?.track === "function") {
      window.ttq.track("ViewContent", {
        content_id: location.pathname,
        content_name: contentName,
        content_type: "product_group"
      });
    }
  }, [location.pathname, location.search]);

  return null;
};

const RouteLoadingFallback = () => (
  <div style={{ minHeight: "60vh" }} aria-busy="true" />
);

/** Animated page wrapper — keyed by pathname for AnimatePresence */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        style={{ willChange: "opacity, transform" }}
      >
        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Index />} />

            {/* ✅ Fix Search Console "/availability" issues by making it a real SPA route */}
            <Route path="/availability" element={<Index />} />
            <Route path="/availability/*" element={<Index />} />

            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:slug" element={<ActivityDetail />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:slug" element={<CityDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/download" element={<Download />} />
            <Route path="/trainer" element={<Trainer />} />
            <Route path="/trainer/how-it-works" element={<TrainerHowItWorks />} />
            <Route path="/trainer/requirements" element={<TrainerRequirements />} />
            <Route path="/trainer/faq" element={<TrainerFAQ />} />
            <Route path="/trainer/download" element={<TrainerDownload />} />
            <Route path="/website-terms-and-condition" element={<WebsiteTerms />} />
            <Route path="/privacy-policy" element={<WebsitePrivacy />} />
            <Route path="/app-user-terms-and-condition" element={<AppUserTerms />} />
            <Route path="/app-trainer-terms-and-condition" element={<AppTrainerTerms />} />
            <Route path="/app-privacy-policy" element={<AppPrivacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <AnalyticsRouteTracker />
          <ScrollToTop />
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
