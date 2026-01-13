import { motion } from "framer-motion";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            See Group Fit in action
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Watch how easy it is to book in-person personal training sessions at your location.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <YouTubeEmbed
            videoId="uag832_Ud0Y"
            title="Group Fit - Book In-Person Personal Training"
          />
        </div>
      </div>
    </section>
  );
}
