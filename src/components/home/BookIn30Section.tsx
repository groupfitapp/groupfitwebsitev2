import { motion } from "framer-motion";
import { MessageSquareOff, Handshake, Clock } from "lucide-react";

const points = [
  {
    icon: MessageSquareOff,
    title: "No messaging required",
    description: "Skip the DMs. Open the app, pick your activity and time — it's done.",
  },
  {
    icon: Handshake,
    title: "No negotiation",
    description: "Pricing is set upfront. What you see is what you pay.",
  },
  {
    icon: Clock,
    title: "Real availability only",
    description: "Only trainers who are actually free at your chosen time show up.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function BookIn30Section() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                Instant Booking
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Book in{" "}
                <span className="text-primary">30 Seconds</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Most booking platforms make you message back and forth before you can confirm anything.
                Group Fit removes all of that. Real-time availability means you see exactly who's free —
                and booking takes a single tap.
              </p>

              <motion.div
                className="mt-8 space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {points.map((point) => (
                  <motion.div
                    key={point.title}
                    variants={cardVariants}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{point.title}</h3>
                      <p className="text-muted-foreground text-sm mt-0.5">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Visual booking UI mock */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.15 }}
              className="relative"
            >
              {/* Glow blob */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl scale-110 pointer-events-none" />

              <div className="relative bg-card border border-border rounded-2xl p-6 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                {/* Mock header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-foreground">Book a Session</span>
                  <span className="text-xs text-primary font-medium px-2 py-0.5 bg-primary/10 rounded-full">Live</span>
                </div>

                {/* Activity selector mock */}
                <div className="mb-3">
                  <label className="text-xs text-muted-foreground mb-1 block">Activity</label>
                  <div className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground font-medium flex items-center justify-between">
                    <span>Strength & Conditioning</span>
                    <span className="text-primary text-xs">✓</span>
                  </div>
                </div>

                {/* Time selector mock */}
                <div className="mb-5">
                  <label className="text-xs text-muted-foreground mb-1 block">Time</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["9:00 AM", "10:00 AM", "11:00 AM"].map((t, i) => (
                      <div
                        key={t}
                        className={`text-center text-xs py-2 rounded-lg border transition-all ${
                          i === 1
                            ? "bg-primary text-white border-primary font-semibold"
                            : "bg-background border-border text-muted-foreground"
                        }`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trainer cards mock */}
                <div className="space-y-2 mb-5">
                  <label className="text-xs text-muted-foreground block">Available Trainers</label>
                  {[
                    { name: "Alex R.", rating: "4.9", price: "$65/hr" },
                    { name: "Jordan M.", rating: "4.8", price: "$70/hr" },
                  ].map((trainer) => (
                    <div
                      key={trainer.name}
                      className="flex items-center justify-between bg-background border border-border rounded-lg px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                          {trainer.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{trainer.name}</p>
                          <p className="text-xs text-muted-foreground">★ {trainer.rating}</p>
                        </div>
                      </div>
                      <span className="text-primary text-sm font-semibold">{trainer.price}</span>
                    </div>
                  ))}
                </div>

                {/* Book button mock */}
                <div className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-xl text-center shadow-[0_0_20px_hsl(355_78%_56%/0.3)]">
                  Book Now — Instant Confirmation
                </div>

                {/* Time indicator */}
                <p className="text-center text-xs text-muted-foreground mt-3 flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" /> Average booking time: 28 seconds
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
