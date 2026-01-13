import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CircleCheckBig, Award, Fingerprint, Briefcase } from "lucide-react";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const requirements = [
  {
    category: "Credentials",
    icon: Award,
    items: [
      "Valid personal training certification (or equivalent for your activity)",
      "Current CPR/First Aid certification",
      "Liability insurance (recommended)",
    ],
  },
  {
    category: "Identity Verification",
    icon: Fingerprint,
    items: [
      "Government-issued photo ID",
      "Background check (may be required)",
      "Profile photo",
    ],
  },
  {
    category: "Equipment & Availability",
    icon: Briefcase,
    items: [
      "Smartphone with the Group Fit Trainer app",
      "Reliable transportation to client locations",
      "Consistent availability for sessions",
    ],
  },
];

export default function TrainerRequirements() {
  return (
    <>
      <Helmet>
        <title>Trainer Requirements | Become a Group Fit Coach</title>
        <meta
          name="description"
          content="Learn what you need to become a Group Fit trainer. Requirements include certifications, identity verification, CPR/First Aid, and reliable transportation."
        />
        <meta name="keywords" content="trainer requirements, personal trainer certification, fitness coach qualifications, Group Fit requirements" />
        <link rel="canonical" href="https://groupfit.ca/trainer/requirements" />
        <meta property="og:title" content="Trainer Requirements | Group Fit" />
        <meta property="og:description" content="What you need to join Group Fit as a trainer: certifications, identity verification, and equipment." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4">
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
              Trainer requirements
            </h1>
            <p className="mt-6 text-lg text-white/80">
              What you need to join Group Fit as a trainer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {requirements.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
                    >
                      <CircleCheckBig className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet the requirements?
            </h2>
            <p className="text-white/70 mb-8">
              Download the trainer app and start your onboarding today.
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