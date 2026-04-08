import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, MapPin, DollarSign } from "lucide-react";
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

const trustItems = [
  { icon: ShieldCheck, label: "Verified Trainers" },
  { icon: Zap, label: "35+ Activities" },
  { icon: MapPin, label: "Canada-Wide" },
  { icon: DollarSign, label: "Transparent Pricing" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-secondary overflow-hidden">
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
        {/* Energetic angular overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/65 to-secondary/50" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,15,28,0.85) 0%, rgba(10,15,28,0.5) 50%, rgba(230,57,70,0.15) 100%)" }} />
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* 3D Particle Field */}
      <HeroParticles />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 flex-1 flex items-center">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              Canada-Wide — 35+ Activities
            </span>
          </motion.div>

          {/* H1 — big & bold */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tighter"
          >
            Book a
            <br />
            <span className="text-primary">Trainer</span>
            <br />
            in 30 Seconds.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl"
          >
            Enter your location, choose an activity, pick a trainer and time slot — done.
            Verified coaches, transparent pricing, instant booking.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-red-dark text-white text-base font-bold px-8 py-6 shadow-[0_0_30px_hsl(355_78%_56%/0.4)] hover:shadow-[0_0_40px_hsl(355_78%_56%/0.6)] transition-shadow rounded-xl"
              >
                <Link to="/download">
                  Find a Trainer
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white text-base font-semibold px-8 py-6 rounded-xl"
              >
                <Link to="/activities">
                  Browse Activities
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-secondary/60 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white/70">
                <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
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
