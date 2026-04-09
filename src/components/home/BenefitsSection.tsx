import { motion } from "framer-motion";
import { MapPin, Video, User, Users, Package, DollarSign } from "lucide-react";

const options = [
  {
    icon: MapPin,
    tag: "In-Person",
    title: "Train at your location",
    description: "A verified trainer comes to you — your home, condo gym, park, or any spot you choose.",
    accent: false,
  },
  {
    icon: Video,
    tag: "Virtual",
    title: "Book virtual sessions",
    description: "Book live virtual sessions with trainers worldwide. Same real-time schedule — if they're booked in-person, virtual clients can't take that slot either.",
    accent: true,
  },
  {
    icon: User,
    tag: "1-on-1",
    title: "Private sessions",
    description: "Solo training with a coach focused entirely on your goals and progress.",
    accent: false,
  },
  {
    icon: Users,
    tag: "Group",
    title: "Train with friends",
    description: "Invite your people to the same session and split the cost — private groups only, no strangers.",
    accent: false,
  },
  {
    icon: Package,
    tag: "Session Packs",
    title: "Buy multi-session packs",
    description: "Purchase multiple sessions at once. Commit to consistency and save — packs are available directly through the app.",
    accent: true,
  },
  {
    icon: DollarSign,
    tag: "Pricing",
    title: "Transparent pricing",
    description: "Every trainer sets their own rate. You see exactly what you'll pay before you book — no hidden fees.",
    accent: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Red glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      {/* Red glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

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
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
              Your options
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight"
          >
            Train your way —
            <br />
            <span className="text-primary">every way.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/50"
          >
            In-person or virtual, solo or with friends, single sessions or packs — all in one app.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {options.map((option, i) => (
            <motion.div
              key={option.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative rounded-xl p-6 border transition-all duration-300 cursor-default ${
                option.accent
                  ? "bg-primary/10 border-primary/25 hover:border-primary/50 hover:bg-primary/15"
                  : "bg-white/[0.04] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.07]"
              }`}
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-5 text-5xl font-black text-white/[0.04] select-none leading-none pointer-events-none">
                0{i + 1}
              </div>

              {/* Tag */}
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5 ${
                option.accent
                  ? "bg-primary text-white"
                  : "bg-white/10 text-white/70"
              }`}>
                {option.tag}
              </div>

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                option.accent
                  ? "bg-primary/30 group-hover:bg-primary/40"
                  : "bg-white/8 group-hover:bg-white/15"
              }`}>
                <option.icon className={`w-5 h-5 ${option.accent ? "text-white" : "text-primary"}`} />
              </div>

              <h3 className="text-base font-bold text-white mb-2 leading-snug">{option.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{option.description}</p>

              {/* Bottom accent line for highlighted cards */}
              {option.accent && (
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
