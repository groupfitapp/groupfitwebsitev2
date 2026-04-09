import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import activitiesHeroImg from "@/assets/heroes/activities-hero.jpg";

import strengthImg from "@/assets/activities/strength.jpg";
import yogaImg from "@/assets/activities/yoga.jpg";
import boxingImg from "@/assets/activities/boxing.jpg";
import hiitImg from "@/assets/activities/hiit-v2.jpg";
import kickboxingImg from "@/assets/activities/kickboxing-v2.jpg";
import muayThaiImg from "@/assets/activities/muay-thai-v2.jpg";
import jiuJitsuImg from "@/assets/activities/jiu-jitsu-v2.jpg";
import wrestlingImg from "@/assets/activities/wrestling-v2.jpg";
import selfDefenseImg from "@/assets/activities/self-defense.jpg";
import soccerImg from "@/assets/activities/soccer-v2.jpg";
import basketballImg from "@/assets/activities/basketball.jpg";
import bootcampImg from "@/assets/activities/bootcamp.jpg";
import calisthenicsImg from "@/assets/activities/calisthenics-v2.jpg";

const activityCategories = [
  {
    name: "Strength & Performance",
    activities: [
      { name: "Strength & Conditioning", slug: "strength-and-conditioning", image: strengthImg },
      { name: "Calisthenics", slug: "calisthenics", image: calisthenicsImg }
    ]
  },
  {
    name: "Mind & Mobility",
    activities: [{ name: "Yoga", slug: "yoga", image: yogaImg }]
  },
  {
    name: "Combat Sports & Self-Defense",
    activities: [
      { name: "Boxing", slug: "boxing", image: boxingImg },
      { name: "Kickboxing", slug: "kickboxing", image: kickboxingImg },
      { name: "Muay Thai", slug: "muay-thai", image: muayThaiImg },
      { name: "Jiu Jitsu", slug: "jiu-jitsu", image: jiuJitsuImg },
      { name: "Wrestling", slug: "wrestling", image: wrestlingImg },
      { name: "Self Defense", slug: "self-defense", image: selfDefenseImg }
    ]
  },
  {
    name: "Sport Training",
    activities: [
      { name: "Soccer", slug: "soccer", image: soccerImg },
      { name: "Basketball", slug: "basketball", image: basketballImg }
    ]
  },
  {
    name: "Conditioning",
    activities: [
      { name: "HIIT", slug: "hiit", image: hiitImg },
      { name: "Bootcamp", slug: "bootcamp", image: bootcampImg }
    ]
  }
];

export default function Activities() {
  const title = "Activities | Personal Trainer at Your Address | Group Fit";
  const description =
    "Explore training activities across Canada—strength, yoga, boxing, HIIT and more. Group Fit helps you book an in-person coach at your address.";
  const canonical = "https://groupfitapp.com/activities";
  const ogImage = "https://groupfitapp.com/groupfit-logo.png";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="791" />
        <meta property="og:image:height" content="791" />
        <meta property="og:image:alt" content="Group Fit" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@groupfitapp" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Group Fit" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={activitiesHeroImg}
            alt="Fitness training activities"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs className="mb-6" />
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 28, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
            >
              Choose your activity
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="mt-6 text-lg text-white/60"
            >
              These are popular activities. Group Fit supports 35+ activities — download the app to see options available based on your address and time.
            </motion.p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{category.name}</h2>

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
                      aria-label={`View ${activity.name} training`}
                    >
                      <img
                        src={activity.image}
                        alt={`${activity.name} - Book an in-person coach at your address`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-sm md:text-base">{activity.name}</h3>
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
              These pages cover popular options. Download Group Fit to see all 35+ activities and check coach
              availability based on your session address and time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        {/* Decorative elements with enhanced glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start training?</h2>
            <p className="text-white/70 mb-8">Download Group Fit on your device to find available coaches near you.</p>

            <div className="flex justify-center mb-6">
              <AppStoreBadges iosLink={APP_LINKS.customer.ios} androidLink={APP_LINKS.customer.android} />
            </div>

            <Link
              to="/cities"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              aria-label="View cities Group Fit serves"
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
