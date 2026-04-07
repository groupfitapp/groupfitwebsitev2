import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroParticles } from "./HeroParticles";
// Hero image imported via vite-imagetools for WebP conversion + responsive sizes
// @ts-ignore - vite-imagetools query params
import heroBg from "@/assets/hero-banner.jpg?w=1440&format=webp&quality=75";
// @ts-ignore - vite-imagetools query params
import heroBg768 from "@/assets/hero-banner.jpg?w=768&format=webp&quality=75";
// @ts-ignore - vite-imagetools query params
import heroBg1920 from "@/assets/hero-banner.jpg?w=1920&format=webp&quality=75";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-secondary">
        <img
          src={heroBg}
          srcSet={`${heroBg768} 768w, ${heroBg} 1440w, ${heroBg1920} 1920w`}
          sizes="100vw"
          alt="Personal training session"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width={1920}
          height={1080}
          style={{
            contentVisibility: "auto",
            containIntrinsicSize: "1920px 1080px",
          }}
        />
        <div className="absolute inset-0 bg-secondary/65" />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* 3D Particle Field */}
      <HeroParticles />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available across Canada
            </span>
          </motion.div>

          {/* ✅ SEO-friendly H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Personal Trainer at{" "}
            <span className="text-primary relative">
              Your Address
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            in Canada
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            Choose an activity, enter your session address, and pick a time—Group Fit shows
            available trainers for that exact session. Book for yourself, your private group,
            or your organization.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-red-dark text-white text-lg px-8 py-6 shadow-[0_0_30px_hsl(355_78%_56%/0.4)] hover:shadow-[0_0_40px_hsl(355_78%_56%/0.6)] transition-shadow"
              >
                <Link to="/download" aria-label="Download the Group Fit app">
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 hover:text-white text-lg px-8 py-6"
              >
                <Link to="/how-it-works" aria-label="How Group Fit works">
                  How it Works
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-2 text-white/60"
          >
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-sm">
              Trainer onboarding includes credential review and identity verification
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient blobs */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/25 to-transparent blur-[80px] pointer-events-none"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
