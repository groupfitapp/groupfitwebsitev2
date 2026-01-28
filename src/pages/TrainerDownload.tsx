import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Download,
  CheckCircle,
  Smartphone
} from "lucide-react";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PillLink } from "@/components/ui/PillLink";
import trainerBanner from "@/assets/trainer-banner.jpg";

export default function TrainerDownload() {
  const { t } = useTranslation();

  const setupChecklist = [
    t("trainerDownload.checklist.item1"),
    t("trainerDownload.checklist.item2"),
    t("trainerDownload.checklist.item3"),
    t("trainerDownload.checklist.item4"),
    t("trainerDownload.checklist.item5"),
    t("trainerDownload.checklist.item6"),
  ];
  return (
    <>
      <Helmet>
        <title>Download Group Fit Trainer | iOS & Android</title>
        <meta
          name="description"
          content="Download the Group Fit Trainer app for iOS and Android. Set your rules, reduce admin, and keep your schedule clean."
        />
        <meta name="keywords" content="download trainer app, Group Fit trainer iOS, Group Fit trainer Android, personal trainer app download" />
        <link rel="canonical" href="https://groupfitapp.com/trainer/download" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Download Group Fit Trainer" />
        <meta property="og:description" content="Set your rules, reduce admin, and keep your schedule clean." />
        <meta property="og:url" content="https://groupfitapp.com/trainer/download" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Download Group Fit Trainer" />
        <meta name="twitter:description" content="Get the trainer app for iOS and Android." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img
            src={trainerBanner}
            alt="Group Fit Trainer app"
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
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t("trainerDownload.hero.title")}
            </h1>
            <p className="mt-6 text-lg text-white/80">
              {t("trainerDownload.hero.subtitle")}
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreBadges
                iosLink={APP_LINKS.trainer.ios}
                androidLink={APP_LINKS.trainer.android}
                size="lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Setup Checklist */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("trainerDownload.checklist.title")}
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              {t("trainerDownload.checklist.subtitle")}
            </p>
          </motion.div>

          <div className="max-w-xl mx-auto space-y-3">
            {setupChecklist.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-card border border-border rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink to="/trainer/how-it-works" variant="default">
              How it works
            </PillLink>
            <PillLink to="/trainer/requirements" variant="default">
              Requirements
            </PillLink>
            <PillLink to="/trainer/faq" variant="default">
              FAQ
            </PillLink>
          </div>
        </div>
      </section>

      {/* How to Invite Clients Link */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link to="/trainer#share" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("trainerDownload.alreadyHaveApp")} <span className="text-primary font-medium">{t("trainerDownload.inviteClients")}</span>
            </Link>
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
              {t("trainerDownload.cta.title")}
            </h2>
            <p className="text-white/70 mb-8">
              {t("trainerDownload.cta.subtitle")}
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
