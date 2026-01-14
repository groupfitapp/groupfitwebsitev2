import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import strengthImg from "@/assets/activities/strength.jpg";
import yogaImg from "@/assets/activities/yoga.jpg";
import boxingImg from "@/assets/activities/boxing.jpg";
import hiitImg from "@/assets/activities/hiit-v2.jpg";
import kickboxingImg from "@/assets/activities/kickboxing-v2.jpg";
import soccerImg from "@/assets/activities/soccer-v2.jpg";
import basketballImg from "@/assets/activities/basketball.jpg";
import calisthenicsImg from "@/assets/activities/calisthenics-v2.jpg";

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Popular activities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-muted-foreground"
            >
              Explore our most booked training styles
            </motion.p>
          </div>
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all activities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/activities/${activity.slug}`}
                className="group block relative aspect-[4/3] rounded-2xl overflow-hidden card-hover"
              >
                <img
                  src={activity.image}
                  alt={`${activity.name} personal training session with a certified coach`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {activity.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
