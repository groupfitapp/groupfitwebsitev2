import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PillLink } from "@/components/ui/PillLink";
import { TiltCard } from "@/components/ui/TiltCard";

// Optimized images: WebP format, 400px width for card display
// @ts-ignore - vite-imagetools query params
import strengthImg from "@/assets/activities/strength.jpg?w=400&format=webp&quality=80";
// @ts-ignore - vite-imagetools query params
import yogaImg from "@/assets/activities/yoga.jpg?w=400&format=webp&quality=80";
// @ts-ignore - vite-imagetools query params
import boxingImg from "@/assets/activities/boxing.jpg?w=400&format=webp&quality=80";
// @ts-ignore - vite-imagetools query params
import hiitImg from "@/assets/activities/hiit-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore - vite-imagetools query params
import kickboxingImg from "@/assets/activities/kickboxing-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore - vite-imagetools query params
import soccerImg from "@/assets/activities/soccer-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore - vite-imagetools query params
import basketballImg from "@/assets/activities/basketball.jpg?w=400&format=webp&quality=80";
// @ts-ignore - vite-imagetools query params
import calisthenicsImg from "@/assets/activities/calisthenics-v2.jpg?w=400&format=webp&quality=80";

const activities = [
  { name: "Strength & Conditioning", slug: "strength-and-conditioning", image: strengthImg },
  { name: "Yoga", slug: "yoga", image: yogaImg },
  { name: "Boxing", slug: "boxing", image: boxingImg },
  { name: "HIIT", slug: "hiit", image: hiitImg },
  { name: "Kickboxing", slug: "kickboxing", image: kickboxingImg },
  { name: "Soccer", slug: "soccer", image: soccerImg },
  { name: "Basketball", slug: "basketball", image: basketballImg },
  { name: "Calisthenics", slug: "calisthenics", image: calisthenicsImg },
];

export function ActivitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Popular activities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-2 text-muted-foreground"
            >
              Explore our most booked training styles
            </motion.p>
          </div>
          <PillLink to="/activities">
            View all activities
          </PillLink>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.slug}
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <TiltCard
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.04}
                glare
                className="rounded-2xl"
              >
                <Link
                  to={`/activities/${activity.slug}`}
                  className="group block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-shadow duration-300"
                >
                  <img
                    src={activity.image}
                    alt={`${activity.name} personal training session with a certified coach`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={300}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                      {activity.name}
                    </h3>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
