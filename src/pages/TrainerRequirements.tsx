import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  CircleCheckBig, 
  Camera, 
  FileText, 
  Fingerprint,
  Users, 
  Dumbbell,
  Wallet,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PillLink } from "@/components/ui/PillLink";
import trainerRequirementsHeroImg from "@/assets/heroes/trainer-requirements-hero.jpg";

export default function TrainerRequirements() {
  const { t } = useTranslation();

  const requirements = [
    {
      icon: Camera,
      title: t("trainerRequirements.requirements.photo"),
      description: t("trainerRequirements.requirements.photoDesc"),
    },
    {
      icon: FileText,
      title: t("trainerRequirements.requirements.resume"),
      description: t("trainerRequirements.requirements.resumeDesc"),
    },
    {
      icon: Fingerprint,
      title: t("trainerRequirements.requirements.id"),
      description: t("trainerRequirements.requirements.idDesc"),
    },
  ];

  const inPersonInfo = {
    icon: Users,
    title: t("trainerRequirements.inPerson.title"),
    description: t("trainerRequirements.inPerson.description"),
  };

  const equipmentInfo = {
    icon: Dumbbell,
    title: t("trainerRequirements.equipment.title"),
    description: t("trainerRequirements.equipment.description"),
  };

  const payoutsInfo = {
    icon: Wallet,
    title: t("trainerRequirements.payouts.title"),
    items: [
      t("trainerRequirements.payouts.item1"),
      t("trainerRequirements.payouts.item2"),
      t("trainerRequirements.payouts.item3"),
      t("trainerRequirements.payouts.item4"),
    ],
  };
  return (
    <>
      <Helmet>
        <title>Trainer Requirements & Verification | Group Fit</title>
        <meta
          name="description"
          content="Professional standards, safer sessions, and smoother bookings. Currently available in Canada."
        />
        <meta name="keywords" content="trainer requirements, personal trainer certification, fitness coach qualifications, Group Fit requirements, trainer verification" />
        <link rel="canonical" href="https://groupfitapp.com/trainer/requirements" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trainer Requirements & Verification | Group Fit" />
        <meta property="og:description" content="Professional standards, safer sessions, and smoother bookings." />
        <meta property="og:url" content="https://groupfitapp.com/trainer/requirements" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trainer Requirements & Verification" />
        <meta name="twitter:description" content="Professional standards, safer sessions, and smoother bookings." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img
            src={trainerRequirementsHeroImg}
            alt="Fitness trainer credentials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs className="mb-6" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <CircleCheckBig className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t("trainerRequirements.hero.title")}
            </h1>
            <p className="mt-6 text-lg text-white/80">
              {t("trainerRequirements.hero.subtitle")}
            </p>
            <p className="mt-2 text-white/60">
              {t("trainerRequirements.hero.note")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You'll Need */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("trainerRequirements.whatYouNeed")}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {requirements.map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <req.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{req.title}</h3>
                  <p className="text-muted-foreground text-sm">{req.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Person Sessions & Equipment */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <inPersonInfo.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{inPersonInfo.title}</h3>
              <p className="text-muted-foreground text-sm">{inPersonInfo.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <equipmentInfo.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{equipmentInfo.title}</h3>
              <p className="text-muted-foreground text-sm">{equipmentInfo.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payouts Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <payoutsInfo.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{payoutsInfo.title}</h2>
            </div>

            <div className="space-y-3">
              {payoutsInfo.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
                >
                  <CircleCheckBig className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              {t("trainerRequirements.payouts.termsNote")}{" "}
              <Link to="/app-trainer-terms-and-condition" className="text-primary hover:underline">
                {t("footer.trainerTerms")}
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {t("trainerRequirements.bonus.title")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("trainerRequirements.bonus.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink to="/download" variant="default">
              Download
            </PillLink>
            <PillLink to="/trainer/how-it-works" variant="default">
              How it works
            </PillLink>
            <PillLink to="/trainer/faq" variant="default">
              FAQ
            </PillLink>
          </div>
        </div>
      </section>

      {/* How to Invite Clients Link */}
      <section className="py-6 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <PillLink to="/trainer#share" variant="default">
              {t("trainerHowItWorks.links.alreadyHaveApp")}
            </PillLink>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("trainerRequirements.cta.title")}
            </h2>
            <p className="text-white/70 mb-8">
              {t("trainerRequirements.cta.subtitle")}
            </p>
            <div className="flex justify-center">
              <AppStoreBadges
                iosLink={APP_LINKS.trainer.ios}
                androidLink={APP_LINKS.trainer.android}
                size="lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
