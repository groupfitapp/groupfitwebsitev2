import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_LINKS } from "@/lib/appLinks";

const requirements = [
  {
    category: "Credentials",
    items: [
      "Valid personal training certification (or equivalent for your activity)",
      "Current CPR/First Aid certification",
      "Liability insurance (recommended)",
    ],
  },
  {
    category: "Identity Verification",
    items: [
      "Government-issued photo ID",
      "Background check (may be required)",
      "Profile photo",
    ],
  },
  {
    category: "Equipment & Availability",
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
        <title>Trainer Requirements | Group Fit</title>
        <meta
          name="description"
          content="Learn what you need to become a Group Fit trainer. Requirements include certifications, identity verification, and equipment."
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
              Trainer requirements
            </h1>
            <p className="mt-6 text-lg text-white/70">
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
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet the requirements?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-red-dark text-white"
              >
                <a href={APP_LINKS.trainer.ios} target="_blank" rel="noopener noreferrer">
                  <Apple className="w-5 h-5 mr-2" />
                  Download for iOS
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <a href={APP_LINKS.trainer.android} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Download for Android
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
