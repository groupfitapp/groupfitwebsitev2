import { motion } from "framer-motion";
import { Home, Sparkles, UserPlus, BadgeCheck } from "lucide-react";

const benefits = [
  {
    icon: Home,
    title: "Train anywhere",
    description: "Home, condo gym, park, or a facility you arrange (where permitted).",
  },
  {
    icon: Sparkles,
    title: "More ways to train",
    description: "Choose from 35+ activities, including strength, boxing, yoga, sport training and more.",
  },
  {
    icon: UserPlus,
    title: "Solo or group—your call",
    description: "Book a 1-on-1 session with a trainer, or invite friends and family to train together and split the cost.",
  },
  {
    icon: BadgeCheck,
    title: "Verified coaches",
    description: "Trainer credentials are reviewed and identity verification is completed during onboarding.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Personal training—without the usual hassle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Group Fit keeps booking simple. You choose an activity, session address, and time.
            You only see coaches who can accept that session, with secure in-app payments and
            optional private group cost-splitting.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(355_78%_56%/0.3)] transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
