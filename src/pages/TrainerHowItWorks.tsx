import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Dumbbell,
  CalendarDays,
  MapPinned,
  Timer,
  RefreshCw,
  Rocket,
  PlayCircle,
  Share2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PillLink } from "@/components/ui/PillLink";
import shareProfileVideo from "@/assets/videos/share-profile-demo.mp4";

import trainerHowItWorksHeroImg from "@/assets/heroes/trainer-how-it-works-hero.jpg";

export default function TrainerHowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Dumbbell,
      title: t("trainerHowItWorks.steps.step1Title"),
      description: t("trainerHowItWorks.steps.step1Desc"),
    },
    {
      icon: CalendarDays,
      title: t("trainerHowItWorks.steps.step2Title"),
      description: t("trainerHowItWorks.steps.step2Desc"),
      note: t("trainerHowItWorks.steps.step2Note"),
    },
    {
      icon: MapPinned,
      title: t("trainerHowItWorks.steps.step3Title"),
      description: t("trainerHowItWorks.steps.step3Desc"),
      note: t("trainerHowItWorks.steps.step3Note"),
      example: t("trainerHowItWorks.steps.step3Example"),
    },
    {
      icon: Timer,
      title: t("trainerHowItWorks.steps.step4Title"),
      description: t("trainerHowItWorks.steps.step4Desc"),
      example: t("trainerHowItWorks.steps.step4Example"),
    },
    {
      icon: RefreshCw,
      title: t("trainerHowItWorks.steps.step5Title"),
      description: t("trainerHowItWorks.steps.step5Desc"),
    },
  ];
  return (
    <>
      <Helmet>
        <title>How It Works for Trainers | Group Fit Trainer</title>
        <meta
          name="description"
          content="Set your availability and service locations. Group Fit does the rest. Move existing clients into a clean booking flow."
        />
        <meta name="keywords" content="trainer onboarding, fitness trainer setup, personal trainer app guide, how to use Group Fit" />
        <link rel="canonical" href="https://groupfitapp.com/trainer/how-it-works" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="How It Works for Trainers | Group Fit Trainer" />
        <meta property="og:description" content="Set your availability and service locations. Group Fit does the rest." />
        <meta property="og:url" content="https://groupfitapp.com/trainer/how-it-works" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How It Works for Trainers" />
        <meta name="twitter:description" content="Set your availability and service locations. Group Fit does the rest." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img
            src={trainerHowItWorksHeroImg}
            alt="Personal trainer coaching client"
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
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t("trainerHowItWorks.hero.title")}
            </h1>
            <p className="mt-6 text-lg text-white/80">
              {t("trainerHowItWorks.hero.subtitle")}
            </p>
            <p className="mt-4 text-white/60">
              {t("trainerHowItWorks.hero.note")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Pills */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[t("trainerHowItWorks.pills.inPerson"), t("trainerHowItWorks.pills.verified"), t("trainerHowItWorks.pills.rulesBased"), t("trainerHowItWorks.pills.payments")].map((item) => (
              <span key={item} className="px-4 py-2 bg-muted rounded-full text-sm text-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center relative">
                  <step.icon className="w-7 h-7 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  {step.note && (
                    <p className="text-primary text-sm mt-2 font-medium">
                      {step.note}
                    </p>
                  )}
                  {step.example && (
                    <p className="text-muted-foreground text-sm mt-2 italic">
                      Example: {step.example}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Callout */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("trainerHowItWorks.shareProfile.title")}
              </h2>
              <p className="text-muted-foreground">
                {t("trainerHowItWorks.shareProfile.subtitle")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl bg-secondary"
            >
              <video
                src={shareProfileVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                title="How to share your profile link"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-12 bg-background">
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
              {t("trainerHowItWorks.bonus.title")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("trainerHowItWorks.bonus.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <PlayCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("trainerHowItWorks.videoTutorials.title")}
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              {t("trainerHowItWorks.videoTutorials.subtitle")}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              playlistId="PLsM4U67lWn_-E8CUN175jAfm459b6wGlh"
              title="Group Fit How-To Videos for Trainers"
            />
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink to="/download" variant="default">
              Download
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
              {t("trainerHowItWorks.cta.title")}
            </h2>
            <p className="text-white/70 mb-8">
              {t("trainerHowItWorks.cta.subtitle")}
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
