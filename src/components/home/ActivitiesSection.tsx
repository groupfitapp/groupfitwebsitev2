import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { PillLink } from "@/components/ui/PillLink";

import strengthImg from "@/assets/activities/strength.jpg";
import yogaImg from "@/assets/activities/yoga.jpg";
import boxingImg from "@/assets/activities/boxing.jpg";
import hiitImg from "@/assets/activities/hiit-v2.jpg";
import kickboxingImg from "@/assets/activities/kickboxing-v2.jpg";
import soccerImg from "@/assets/activities/soccer-v2.jpg";
import basketballImg from "@/assets/activities/basketball.jpg";
import calisthenicsImg from "@/assets/activities/calisthenics-v2.jpg";

const activities = [
  { nameKey: "activities.activityNames.strengthConditioning", slug: "strength-and-conditioning", image: strengthImg },
  { nameKey: "activities.activityNames.yoga", slug: "yoga", image: yogaImg },
  { nameKey: "activities.activityNames.boxing", slug: "boxing", image: boxingImg },
  { nameKey: "activities.activityNames.hiit", slug: "hiit", image: hiitImg },
  { nameKey: "activities.activityNames.kickboxing", slug: "kickboxing", image: kickboxingImg },
  { nameKey: "activities.activityNames.soccer", slug: "soccer", image: soccerImg },
  { nameKey: "activities.activityNames.basketball", slug: "basketball", image: basketballImg },
  { nameKey: "activities.activityNames.calisthenics", slug: "calisthenics", image: calisthenicsImg },
];

export function ActivitiesSection() {
  const { t } = useTranslation();

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
              {t("home.activities.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-muted-foreground"
            >
              {t("home.activities.subtitle")}
            </motion.p>
          </div>
          <PillLink to="/activities">
            {t("home.activities.viewAll")}
          </PillLink>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] rounded-2xl transition-shadow duration-300"
            >
              <Link
                to={`/activities/${activity.slug}`}
                className="group block relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img
                  src={activity.image}
                  alt={`${t(activity.nameKey)} personal training session with a certified coach`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm md:text-base group-hover:text-primary transition-colors duration-300">
                    {t(activity.nameKey)}
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
