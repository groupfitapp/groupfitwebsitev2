import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t("home.cta.title")}
          </h2>
          <p className="mt-4 text-lg text-white/70">
            {t("home.cta.subtitle")}
          </p>

          <div className="mt-8 flex justify-center">
            <AppStoreBadges
              iosLink={APP_LINKS.customer.ios}
              androidLink={APP_LINKS.customer.android}
            />
          </div>

          <div className="mt-6">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              <Link to="/trainer">
                {t("home.cta.trainerLink")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
