import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Activities from "./pages/Activities";
import ActivityDetail from "./pages/ActivityDetail";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import FAQ from "./pages/FAQ";
import Download from "./pages/Download";
import Trainer from "./pages/Trainer";
import TrainerHowItWorks from "./pages/TrainerHowItWorks";
import TrainerRequirements from "./pages/TrainerRequirements";
import TrainerFAQ from "./pages/TrainerFAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refunds from "./pages/Refunds";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
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
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/refunds-cancellations" element={<Refunds />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
