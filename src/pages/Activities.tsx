import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

import strengthImg from "@/assets/activities/strength.jpg";
import yogaImg from "@/assets/activities/yoga.jpg";
import boxingImg from "@/assets/activities/boxing.jpg";
import hiitImg from "@/assets/activities/hiit.jpg";
import kickboxingImg from "@/assets/activities/kickboxing.jpg";
import muayThaiImg from "@/assets/activities/muay-thai.jpg";
import jiuJitsuImg from "@/assets/activities/jiu-jitsu.jpg";
import wrestlingImg from "@/assets/activities/wrestling.jpg";
import selfDefenseImg from "@/assets/activities/self-defense.jpg";
import soccerImg from "@/assets/activities/soccer.jpg";
import basketballImg from "@/assets/activities/basketball.jpg";
import bootcampImg from "@/assets/activities/bootcamp.jpg";
import calisthenicsImg from "@/assets/activities/calisthenics.jpg";

const activityCategories = [
  {
    name: "Strength & Performance",
    activities: [
      { name: "Strength & Conditioning", slug: "strength-and-conditioning", image: strengthImg },
      { name: "Calisthenics", slug: "calisthenics", image: calisthenicsImg },
    ],
  },
  {
    name: "Mind & Mobility",
    activities: [
      { name: "Yoga", slug: "yoga", image: yogaImg },
    ],
  },
  {
    name: "Combat Sports & Self-Defense",
    activities: [
      { name: "Boxing", slug: "boxing", image: boxingImg },
      { name: "Kickboxing", slug: "kickboxing", image: kickboxingImg },
      { name: "Muay Thai", slug: "muay-thai", image: muayThaiImg },
      { name: "Jiu Jitsu", slug: "jiu-jitsu", image: jiuJitsuImg },
      { name: "Wrestling", slug: "wrestling", image: wrestlingImg },
      { name: "Self Defense", slug: "self-defense", image: selfDefenseImg },
    ],
  },
  {
    name: "Sport Training",
    activities: [
      { name: "Soccer", slug: "soccer", image: soccerImg },
      { name: "Basketball", slug: "basketball", image: basketballImg },
    ],
  },
  {
    name: "Conditioning",
    activities: [
      { name: "HIIT", slug: "hiit", image: hiitImg },
      { name: "Bootcamp", slug: "bootcamp", image: bootcampImg },
    ],
  },
];

export default function Activities() {
  return (
    <>
      <Helmet>
        <title>Activities | In-Person Personal Training | Group Fit</title>
        <meta
          name="description"
          content="Choose from 13+ activities including strength training, yoga, boxing, HIIT, soccer, and more. Book in-person sessions with certified coaches."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Choose your activity
            </h1>
            <p className="mt-6 text-lg text-white/70">
              These are popular activities. Group Fit supports trainers across many more activities depending on availability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities by Category */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {activityCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {category.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {category.activities.map((activity, index) => (
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
                        alt={activity.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Activities Note */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground">
              These pages cover popular options. In Group Fit, you may see additional activities depending on your session address, time, and coach availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start training?
            </h2>
            <p className="text-white/70 mb-8">
              Download Group Fit on your device to find available coaches near you.
            </p>
            <div className="flex justify-center mb-6">
              <AppStoreBadges
                iosLink={APP_LINKS.customer.ios}
                androidLink={APP_LINKS.customer.android}
              />
            </div>
            <Link
              to="/cities"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              View Cities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
