import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Home, Sparkles, UsersRound, BadgeCheck } from "lucide-react";

export function BenefitsSection() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Home,
      title: t("home.benefits.trainAnywhere"),
      description: t("home.benefits.trainAnywhereDesc"),
    },
    {
      icon: Sparkles,
      title: t("home.benefits.moreWays"),
      description: t("home.benefits.moreWaysDesc"),
    },
    {
      icon: UsersRound,
      title: t("home.benefits.privateGroup"),
      description: t("home.benefits.privateGroupDesc"),
    },
    {
      icon: BadgeCheck,
      title: t("home.benefits.verifiedCoaches"),
      description: t("home.benefits.verifiedCoachesDesc"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            {t("home.benefits.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            {t("home.benefits.subtitle")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(355_78%_56%/0.3)] transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
