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
    description: "Select a time slot and confirm. No back-and-forth — your booking is confirmed on the spot.",
    color: "from-red-500/20 to-red-600/5",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Angular background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(230,57,70,0.06) 0%, transparent 50%, rgba(230,57,70,0.03) 100%)",
        }}
      />
      {/* Top diagonal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight"
          >
            From location to booked<br />
            <span className="text-primary">in 4 steps.</span>
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative bg-secondary p-8 hover:bg-white/5 transition-colors duration-300 border-r border-b border-white/5 last:border-r-0"
            >
              {/* Big number behind */}
              <div className="absolute top-4 right-6 text-7xl font-black text-white/[0.04] select-none leading-none pointer-events-none">
                {step.number}
              </div>

              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white text-sm font-black mb-6 shadow-[0_0_20px_hsl(355_78%_56%/0.4)] group-hover:shadow-[0_0_30px_hsl(355_78%_56%/0.6)] transition-shadow duration-300">
                {step.number}
              </div>

              {/* Icon */}
              <step.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />

              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{step.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>

              {/* Connector arrow on desktop (not last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_hsl(355_78%_56%/0.5)]">
                    <svg viewBox="0 0 16 16" className="w-3 h-3 fill-white">
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
          <Button asChild size="lg" variant="ghost" className="text-white/60 hover:text-white hover:bg-white/10">
            <Link to="/how-it-works">See full details →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
