import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/components/layout";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
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
import WebsiteTerms from "./pages/WebsiteTerms";
import WebsitePrivacy from "./pages/WebsitePrivacy";
import AppUserTerms from "./pages/AppUserTerms";
import AppTrainerTerms from "./pages/AppTrainerTerms";
import AppPrivacy from "./pages/AppPrivacy";
import Contact from "./pages/Contact";
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
              <Route path="/website-terms-and-condition" element={<WebsiteTerms />} />
              <Route path="/privacy-policy" element={<WebsitePrivacy />} />
              <Route path="/app-user-terms-and-condition" element={<AppUserTerms />} />
              <Route path="/app-trainer-terms-and-condition" element={<AppTrainerTerms />} />
              <Route path="/app-privacy-policy" element={<AppPrivacy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
