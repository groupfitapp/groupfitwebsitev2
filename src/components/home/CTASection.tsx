import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

/** Small CSS-3D animated orb */
function Orb({
  size,
  color,
  style,
  duration,
  delay = 0,
}: {
  size: number;
  color: string;
  style: React.CSSProperties;
  duration: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 35% 35%, ${color}cc, ${color}33)`,
        boxShadow: `0 0 ${size * 0.6}px ${color}55, 0 0 ${size * 1.2}px ${color}22`,
        ...style,
      }}
      animate={{
        y: [0, -24, 0],
        x: [0, 12, 0],
        scale: [1, 1.08, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

      {/* Animated 3D orbs */}
      <Orb
        size={480}
        color="#e63946"
        style={{ top: -60, right: -60, opacity: 0.18 }}
        duration={7}
        delay={0}
      />
      <Orb
        size={360}
        color="#e63946"
        style={{ bottom: -80, left: -80, opacity: 0.14 }}
        duration={9}
        delay={1.5}
      />
      <Orb
        size={220}
        color="#ffffff"
        style={{ top: "40%", left: "15%", opacity: 0.04 }}
        duration={6}
        delay={0.8}
      />
      <Orb
        size={140}
        color="#e63946"
        style={{ top: "20%", right: "25%", opacity: 0.25 }}
        duration={5}
        delay={2}
      />
      <Orb
        size={90}
        color="#ffffff"
        style={{ bottom: "25%", right: "10%", opacity: 0.1 }}
        duration={4.5}
        delay={1}
      />

      {/* Large blur orb in centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
          >
            Start training today.
          </motion.h2>

          <motion.p variants={itemVariants} className="mt-4 text-lg text-white/70">
            Find verified trainers near you across 35+ activities — instant booking, transparent pricing.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <AppStoreBadges
              iosLink={APP_LINKS.customer.ios}
              androidLink={APP_LINKS.customer.android}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <Link to="/trainer">
                  Are you a trainer?
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
