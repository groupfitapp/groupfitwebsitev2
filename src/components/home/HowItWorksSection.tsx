import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Navigation, CalendarClock, UserCheck, Wallet } from "lucide-react";
import { PillLink } from "@/components/ui/PillLink";

const steps = [
  {
    number: "1",
    icon: Zap,
    title: "Choose an activity",
    description: "Pick from strength, yoga, boxing, HIIT, and 35+ more training styles.",
  },
  {
    number: "2",
    icon: Navigation,
    title: "Enter your session address",
    description: "Use the exact address where you want to train.",
  },
  {
    number: "3",
    icon: CalendarClock,
    title: "Pick a date and time",
    description: "Choose when you want to train. Availability updates based on location.",
  },
  {
    number: "4",
    icon: UserCheck,
    title: "Select from available coaches",
    description: "Pick from coaches shown as available for that exact session.",
  },
  {
    number: "5",
    icon: Wallet,
    title: "Pay in-app and train",
    description: "Complete the booking and meet your coach at the selected location.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            How it works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Book a session in 5 simple steps
          </motion.p>
        </div>

        {/* Desktop Horizontal Stepper */}
        <div className="hidden lg:block">
          <div className="flex items-start justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />
            
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center w-1/5 px-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold z-10 shadow-lg shadow-primary/30">
                  {step.number}
                </div>
                <div className="mt-4 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Stepper */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/30">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-2" />
                )}
              </div>
              <div className="pb-8">
                <div className="flex items-center gap-2">
                  <step.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <PillLink to="/how-it-works">
            Learn more
          </PillLink>
        </motion.div>
      </div>
    </section>
  );
}
