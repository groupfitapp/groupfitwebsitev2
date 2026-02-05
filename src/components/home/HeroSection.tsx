import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
// Hero image imported via vite-imagetools for WebP conversion + content hash caching
import heroBg from "@/assets/hero-banner.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-secondary">
        <img
          src={heroBg}
          alt="Personal training session"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width={1920}
          height={1080}
          sizes="100vw"
          style={{ 
            contentVisibility: 'auto',
            containIntrinsicSize: '1920px 1080px'
          }}
        />
        <div className="absolute inset-0 bg-secondary/65" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          {/* ✅ Keep a clear, SEO-friendly H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Personal Trainer at{" "}
            <span className="text-primary">Your Address</span> in Canada
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            Choose an activity, enter your session address, and pick a time—Group Fit shows
            available trainers for that exact session. Book for yourself, your private group,
            or your organization.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-red-dark text-white text-lg px-8 py-6"
            >
              <Link to="/download" aria-label="Download the Group Fit app">
                <Download className="w-5 h-5 mr-2" />
                Download
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6"
            >
              <Link to="/how-it-works" aria-label="How Group Fit works">
                How it Works
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-2 text-white/60"
          >
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-sm">
              Trainer onboarding includes credential review and identity verification
            </span>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/25 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
    </section>
  );
}
