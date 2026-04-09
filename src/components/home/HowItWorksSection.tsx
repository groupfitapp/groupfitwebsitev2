import { motion } from "framer-motion";
import { MapPin, LayoutGrid, UserCheck, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Choose where you want to train",
    description: "Enter your session address — home, park, condo gym, or any location you prefer.",
    color: "from-red-500/20 to-red-600/5",
  },
  {
    number: "02",
    icon: LayoutGrid,
    title: "Browse available activities",
    description: "See which of the 35+ activities have trainers available at your location.",
    color: "from-red-500/20 to-red-600/5",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Pick a trainer",
    description: "Browse verified trainers, see their real available days and time slots, and choose who fits best.",
    color: "from-red-500/20 to-red-600/5",
  },
  {
    number: "04",
    icon: CalendarDays,
    title: "Book instantly",
    description: "Select a time slot and send your request. The trainer confirms within 3 hours — you're only charged on confirmation.",
    color: "from-red-500/20 to-red-600/5",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(220 20% 97%) 0%, hsl(0 0% 100%) 100%)" }} />
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">How It Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] tracking-tight"
          >
            From location to booked
            <br />
            <span className="text-primary">in 4 steps.</span>
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
            >
              {/* Big number watermark */}
              <div className="absolute top-4 right-5 text-6xl font-black text-foreground/[0.04] select-none leading-none pointer-events-none">
                {step.number}
              </div>

              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white text-sm font-black mb-5 shadow-[0_0_16px_hsl(355_78%_56%/0.3)] group-hover:shadow-[0_0_24px_hsl(355_78%_56%/0.5)] transition-shadow duration-300">
                {step.number}
              </div>

              {/* Icon */}
              <step.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />

              <h3 className="text-base font-bold text-foreground mb-2 leading-snug">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {/* Connector line on desktop (not last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-9 z-10">
                  <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 fill-primary">
                      <path d="M8.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L10.586 9H3a1 1 0 1 1 0-2h7.586L8.293 4.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-4"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-red-dark text-white shadow-[0_0_20px_hsl(355_78%_56%/0.3)]">
            <Link to="/download">Find a Trainer Now</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted">
            <Link to="/how-it-works">See full details →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
