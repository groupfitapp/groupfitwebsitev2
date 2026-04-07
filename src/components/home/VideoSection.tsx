import { motion } from "framer-motion";
import { LazyYouTubeEmbed } from "@/components/ui/LazyYouTubeEmbed";

export function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-4xl mx-auto"
        >
          {/* 3D perspective frame around the video */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ scale: 1.01 }}
            style={{
              perspective: "1200px",
              transformStyle: "preserve-3d",
            }}
            className="rounded-2xl overflow-hidden shadow-[0_0_60px_hsl(355_78%_56%/0.2),0_24px_48px_rgba(0,0,0,0.4)] border border-white/10"
          >
            <LazyYouTubeEmbed
              videoId="uag832_Ud0Y"
              title="Group Fit - Book In-Person Personal Training"
              autoplay
            />
          </motion.div>

          {/* Glow beneath video */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/20 blur-2xl rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
