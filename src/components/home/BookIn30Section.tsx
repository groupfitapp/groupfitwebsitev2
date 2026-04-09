import { motion } from "framer-motion";
import { MessageSquareOff, Handshake, Clock, ShieldCheck } from "lucide-react";

const points = [
  {
    icon: MessageSquareOff,
    title: "No back-and-forth",
    description: "Enter your location, pick an activity, choose a trainer and time slot — request sent instantly.",
  },
  {
    icon: Handshake,
    title: "No negotiation",
    description: "Trainer pricing is set upfront and visible before you book. No surprises.",
  },
  {
    icon: Clock,
    title: "Real availability only",
    description: "You see actual time slots from trainers who cover your area — no phantom availability.",
  },
  {
    icon: ShieldCheck,
    title: "Pay only when confirmed",
    description: "You're only charged once the trainer confirms — within 3 hours of your request.",
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
    <section className="py-16 md:py-24 bg-secondary overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
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
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">How Booking Works</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-6">
                Book in{" "}
                <span className="text-primary">30 Seconds.</span>
                <br />Pay when confirmed.
              </h2>
              <p className="text-white/55 text-lg leading-relaxed">
                Most booking platforms make you message back and forth. Group Fit removes all of that —
                real availability, set pricing, and a simple request flow. Trainers confirm within 3 hours.
                You're not charged until they do.
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
                    <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{point.title}</h3>
                      <p className="text-white/50 text-sm mt-0.5">{point.description}</p>
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
              <div className="absolute inset-0 bg-primary/8 rounded-3xl blur-3xl scale-110 pointer-events-none" />

              <div className="relative bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 shadow-[0_8px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                {/* Mock header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-white">Find a Trainer</span>
                  <span className="text-xs text-primary font-medium px-2 py-0.5 bg-primary/20 border border-primary/30 rounded-full">Live</span>
                </div>

                {/* Step 1: Location */}
                <div className="mb-3">
                  <label className="text-xs text-white/40 mb-1 block uppercase tracking-wider">① Location</label>
                  <div className="bg-white/[0.07] border border-primary/40 rounded-lg px-4 py-2.5 text-sm text-white font-medium flex items-center justify-between">
                    <span>123 Main St, Toronto</span>
                    <span className="text-primary text-xs">✓</span>
                  </div>
                </div>

                {/* Step 2: Activity */}
                <div className="mb-3">
                  <label className="text-xs text-white/40 mb-1 block uppercase tracking-wider">② Activity</label>
                  <div className="bg-white/[0.04] border border-white/[0.1] rounded-lg px-4 py-2.5 text-sm text-white font-medium flex items-center justify-between">
                    <span>Strength & Conditioning</span>
                    <span className="text-primary text-xs">✓</span>
                  </div>
                </div>

                {/* Step 3: Trainer + time slots */}
                <div className="space-y-2 mb-5">
                  <label className="text-xs text-white/40 block uppercase tracking-wider">③ Trainer & Slots</label>
                  {[
                    { name: "Alex R.", rating: "4.9", price: "$65/hr", slots: ["9 AM", "11 AM"] },
                    { name: "Jordan M.", rating: "4.8", price: "$70/hr", slots: ["10 AM", "2 PM"] },
                  ].map((trainer) => (
                    <div key={trainer.name} className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary/30 flex items-center justify-center text-primary text-xs font-bold">
                            {trainer.name[0]}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white">{trainer.name}</p>
                            <p className="text-xs text-white/40">★ {trainer.rating}</p>
                          </div>
                        </div>
                        <span className="text-primary text-xs font-bold">{trainer.price}</span>
                      </div>
                      <div className="flex gap-1.5">
                        {trainer.slots.map((slot, i) => (
                          <span key={slot} className={`text-xs px-2 py-1 rounded-md border ${i === 0 ? "bg-primary text-white border-primary font-semibold" : "bg-white/[0.05] border-white/[0.1] text-white/50"}`}>{slot}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Book button mock */}
                <div className="w-full bg-primary text-white text-sm font-semibold py-3 rounded-xl text-center shadow-[0_0_24px_hsl(355_78%_56%/0.4)]">
                  Send Booking Request
                </div>

                {/* Confirmation note */}
                <div className="mt-3 flex items-start gap-2 bg-white/[0.04] border border-white/[0.07] rounded-lg px-3 py-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-white/50">
                    Trainer confirms within <span className="text-white/80 font-medium">3 hours</span>. Only charged on confirmation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
