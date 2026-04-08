import { motion } from "framer-motion";
import { MapPin, Video, User, Users, Package, DollarSign } from "lucide-react";

const options = [
  {
    icon: MapPin,
    tag: "In-Person",
    title: "Train at your location",
    description: "A verified trainer comes to you — your home, condo gym, park, or any spot you choose.",
    highlight: false,
  },
  {
    icon: Video,
    tag: "Virtual",
    title: "Book virtual sessions",
    description: "Book live virtual sessions with trainers worldwide. Same real-time availability — if a trainer is busy, you won't see that slot.",
    highlight: true,
  },
  {
    icon: User,
    tag: "1-on-1",
    title: "Private sessions",
    description: "Solo training with a coach focused entirely on your goals and progress.",
    highlight: false,
  },
  {
    icon: Users,
    tag: "Group",
    title: "Train with friends",
    description: "Invite your people to the same session and split the cost — private groups only, no strangers.",
    highlight: false,
  },
  {
    icon: Package,
    tag: "Session Packs",
    title: "Buy multi-session packs",
    description: "Purchase multiple sessions at once. Commit to consistency and save — packs are available directly through the app.",
    highlight: true,
  },
  {
    icon: DollarSign,
    tag: "Pricing",
    title: "Transparent pricing",
    description: "Every trainer sets their own rate. You see exactly what you'll pay before you book — no hidden fees.",
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3"
          >
            Your options
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-black text-foreground leading-[1.1] tracking-tight"
          >
            Train your way —<br />
            <span className="text-primary">every way.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            In-person or virtual, solo or with friends, single sessions or packs — all in one app.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {options.map((option) => (
            <motion.div
              key={option.title}
              variants={cardVariants}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                option.highlight
                  ? "bg-primary/5 border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(355_78%_56%/0.15)]"
                  : "bg-card border-border hover:border-primary/30 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)]"
              }`}
            >
              {/* Tag */}
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
                option.highlight
                  ? "bg-primary text-white"
                  : "bg-primary/10 text-primary"
              }`}>
                {option.tag}
              </div>

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                option.highlight
                  ? "bg-primary/20 group-hover:bg-primary/30"
                  : "bg-primary/10 group-hover:bg-primary/20"
              }`}>
                <option.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{option.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{option.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
