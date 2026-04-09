import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// @ts-ignore
import strengthImg from "@/assets/activities/strength.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import yogaImg from "@/assets/activities/yoga.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import boxingImg from "@/assets/activities/boxing.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import hiitImg from "@/assets/activities/hiit-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import kickboxingImg from "@/assets/activities/kickboxing-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import soccerImg from "@/assets/activities/soccer-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import basketballImg from "@/assets/activities/basketball.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import calisthenicsImg from "@/assets/activities/calisthenics-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import bootcampImg from "@/assets/activities/bootcamp.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import muayThaiImg from "@/assets/activities/muay-thai-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import jiuJitsuImg from "@/assets/activities/jiu-jitsu-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import wrestlingImg from "@/assets/activities/wrestling-v2.jpg?w=400&format=webp&quality=80";
// @ts-ignore
import selfDefenseImg from "@/assets/activities/self-defense.jpg?w=400&format=webp&quality=80";

const activities = [
  { name: "Strength & Conditioning", slug: "strength-and-conditioning", image: strengthImg },
  { name: "Boxing", slug: "boxing", image: boxingImg },
  { name: "HIIT", slug: "hiit", image: hiitImg },
  { name: "Kickboxing", slug: "kickboxing", image: kickboxingImg },
  { name: "Yoga", slug: "yoga", image: yogaImg },
  { name: "Muay Thai", slug: "muay-thai", image: muayThaiImg },
  { name: "Jiu-Jitsu", slug: "jiu-jitsu", image: jiuJitsuImg },
  { name: "Calisthenics", slug: "calisthenics", image: calisthenicsImg },
  { name: "Soccer", slug: "soccer", image: soccerImg },
  { name: "Basketball", slug: "basketball", image: basketballImg },
  { name: "Bootcamp", slug: "bootcamp", image: bootcampImg },
  { name: "Wrestling", slug: "wrestling", image: wrestlingImg },
  { name: "Self Defense", slug: "self-defense", image: selfDefenseImg },
];

export function ActivitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">35+ Activities</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-black text-foreground leading-[1.1] tracking-tight"
            >
              Train what you love.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/activities"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              View all activities <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* All 13 activities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.slug}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
                duration: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <Link
                to={`/activities/${activity.slug}`}
                className="group block relative aspect-[3/4] rounded-xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={activity.image}
                  alt={`${activity.name} personal training`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={533}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 transition-all duration-300" />

                {/* Red angular accent strip */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-black text-sm md:text-base leading-tight group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
                    {activity.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-white/70 text-xs">Book now</span>
                    <ArrowRight className="w-3 h-3 text-primary" />
                  </div>
                </div>

                {/* Number badge */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-md bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-white/60 text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
