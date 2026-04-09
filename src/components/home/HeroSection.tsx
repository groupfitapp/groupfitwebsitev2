import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroParticles } from "./HeroParticles";
// Hero image imported via vite-imagetools for WebP conversion + responsive sizes
// @ts-ignore - vite-imagetools query params
import heroBg from "@/assets/hero-banner.jpg?w=1440&format=webp&quality=75";
// @ts-ignore - vite-imagetools query params
import heroBg768 from "@/assets/hero-banner.jpg?w=768&format=webp&quality=75";
// @ts-ignore - vite-imagetools query params
import heroBg1920 from "@/assets/hero-banner.jpg?w=1920&format=webp&quality=75";

const trustItems = [
  { icon: ShieldCheck, label: "Verified Trainers" },
  { icon: Zap, label: "35+ Activities" },
  { icon: Globe, label: "Virtual Worldwide" },
  { icon: DollarSign, label: "Transparent Pricing" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          srcSet={`${heroBg768} 768w, ${heroBg} 1440w, ${heroBg1920} 1920w`}
          sizes="100vw"
          alt="Personal training session"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
        {/* Red diagonal accent — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 40%, hsl(355 78% 56% / 0.08) 100%)",
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* 3D Particle Field */}
      <HeroParticles />

      {/* Red left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ originY: 0 }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center py-24 pt-36">
        <motion.div
          className="max-w-5xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-8 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
              Canada-Wide · Virtual Worldwide
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3.5rem,10vw,8.5rem)] font-black text-white leading-[0.9] tracking-tighter"
          >
            Train
            <br />
            <span className="text-primary">Your</span>
            <br />
            Way.
          </motion.h1>

          {/* Subtitle row */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8">
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-sm">
              In-person or virtual. Solo or with friends.
              Single sessions or multi-packs.
              Trainers confirm within 3 hours.
            </p>
            {/* Vertical divider on sm+ */}
            <div className="hidden sm:block w-px h-16 bg-white/10 flex-shrink-0" />
            <div className="flex flex-col gap-1 text-white/40 text-sm">
              <span className="flex items-center gap-2"><span className="text-primary font-bold text-base">35+</span> Activities</span>
              <span className="flex items-center gap-2"><span className="text-primary font-bold text-base">60</span> Min sessions</span>
              <span className="flex items-center gap-2"><span className="text-primary font-bold text-base">0</span> Hidden fees</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-red-dark text-white text-base font-bold px-8 h-14 shadow-[0_0_40px_hsl(355_78%_56%/0.35)] hover:shadow-[0_0_60px_hsl(355_78%_56%/0.5)] transition-shadow rounded-xl"
              >
                <Link to="/download">Find a Trainer</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white hover:border-white/30 text-base font-semibold px-8 h-14 rounded-xl"
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
      <div className="relative z-10 w-full border-t border-white/[0.07]">
        <div className="container mx-auto px-4 py-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 md:gap-12"
          >
            {trustItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.08 }}
                className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors cursor-default"
              >
                <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium tracking-wide">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated glow */}
      <motion.div
        className="absolute bottom-0 right-0 w-[40vw] h-[50vh] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
