import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  CircleDollarSign, 
  Calendar, 
  Users, 
  RefreshCw, 
  HelpCircle,
  MapPinned
} from "lucide-react";
import { PillLink } from "@/components/ui/PillLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import trainerFaqHeroImg from "@/assets/heroes/trainer-faq-hero.jpg";

const faqCategories = [
  {
    title: "Getting started",
    icon: Sparkles,
    faqs: [
      {
        question: "How do I share my profile link with clients?",
        answer: "Open Group Fit Trainer → Account → My Profile → tap the 3 dots → View Public Profile → Share. [See it in action](/trainer#share).",
        hasLink: true,
      },
      {
        question: "What is Group Fit Trainer?",
        answer: "Group Fit Trainer is the trainer app that lets you set your availability, service areas, and booking buffers—then manage bookings, rescheduling, and earnings in one place.",
      },
    ],
  },
  {
    title: "Booking rules (visibility)",
    icon: Calendar,
    faqs: [
      {
        question: "When do customers see my profile?",
        answer: "Only when the customer's specialization, day/time, and address match your settings, and buffer time allows it.",
      },
      {
        question: "How do time slots work?",
        answer: "You set your available time slots per day. Customers can only book within those hours.",
      },
      {
        question: "What are service locations and radius?",
        answer: "You set a service location and a travel radius (km). If the customer's address is outside your radius, they can't book you.",
      },
      {
        question: "What is buffer time?",
        answer: "Buffer time (up to 1 hour) blocks back-to-back bookings and helps prevent scheduling conflicts.",
      },
    ],
  },
  {
    title: "Managing sessions",
    icon: RefreshCw,
    faqs: [
      {
        question: "How does rescheduling work?",
        answer: "Request a change in the app. Group Fit manages the client confirmation flow.",
      },
      {
        question: "How do cancellations work?",
        answer: "Cancellations can be initiated in the app. Any applicable fees or rules are listed in the Terms & Conditions.",
      },
    ],
  },
  {
    title: "Payments & payouts",
    icon: CircleDollarSign,
    faqs: [
      {
        question: "How do payouts work?",
        answer: "Group Fit handles payments and provides secure payouts to your bank account. Details are in the Terms & Conditions.",
        hasLink: true,
      },
      {
        question: "Where do I see payout details?",
        answer: "Transparent payouts with clear earnings visibility in the app. Earnings and promotions are handled transparently—details are available in the [Terms & Conditions](/app-trainer-terms-and-condition).",
        hasLink: true,
      },
    ],
  },
  {
    title: "Group bookings",
    icon: Users,
    faqs: [
      {
        question: "Will I receive group bookings?",
        answer: "Yes. Customers can create private groups and book together.",
      },
      {
        question: "Do group sessions cost more?",
        answer: "No. Group sessions are priced the same as individual sessions, and the platform can split the cost among group members.",
      },
    ],
  },
  {
    title: "Locations & travel",
    icon: MapPinned,
    faqs: [
      {
        question: "Where can sessions take place?",
        answer: "Sessions can take place at a suitable location chosen by the customer (home, park, gym, etc.). Customers cover any facility fees.",
      },
      {
        question: "Do I travel to the customer?",
        answer: "Yes. Sessions are in-person and trainers travel to the customer's chosen location.",
      },
    ],
  },
];

// SEO FAQ Schema from provided file
const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I share my profile link with clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open Group Fit Trainer → Account → My Profile → tap the 3 dots → View Public Profile → Share."
      }
    },
    {
      "@type": "Question",
      "name": "When do customers see my profile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only when the customer's specialization, day/time, and address match your settings, and buffer time allows it."
      }
    },
    {
      "@type": "Question",
      "name": "How do time slots work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You set your available time slots per day. Customers can only book within those hours."
      }
    },
    {
      "@type": "Question",
      "name": "What are service locations and radius?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You set a service location and a travel radius (km). If the customer's address is outside your radius, they can't book you."
      }
    },
    {
      "@type": "Question",
      "name": "What is buffer time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buffer time (up to 1 hour) blocks back-to-back bookings and helps prevent scheduling conflicts."
      }
    },
    {
      "@type": "Question",
      "name": "How does rescheduling work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Request a change in the app. Group Fit manages the client confirmation flow."
      }
    },
    {
      "@type": "Question",
      "name": "How do payouts work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Group Fit handles payments and provides secure payouts to your bank account. Details are in the Terms & Conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Will I receive group bookings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Customers can create private groups and book together."
      }
    }
  ]
};

export default function TrainerFAQ() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Trainer FAQ | Scheduling, Service Radius & Payouts</title>
        <meta
          name="description"
          content="Trainer FAQs on time slots, service locations + radius, buffer time, visibility rules, rescheduling, group bookings, travel, and secure payouts."
        />
        <meta name="keywords" content="trainer FAQ, personal trainer questions, Group Fit trainer help, fitness coach FAQ, trainer support" />
        <link rel="canonical" href="https://groupfitapp.com/trainer/faq" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trainer FAQ | Scheduling, Service Radius & Payouts" />
        <meta property="og:description" content="Quick answers. No fluff. If it doesn't match your settings, the client can't book you." />
        <meta property="og:url" content="https://groupfitapp.com/trainer/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trainer FAQ | Group Fit" />
        <meta name="twitter:description" content="Quick answers for trainers on time slots, service radius, and payouts." />
        <script type="application/ld+json">
          {JSON.stringify(faqSchemaData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img
            src={trainerFaqHeroImg}
            alt="Trainer helping client with exercise"
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
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t("trainerFaq.hero.title")}
            </h1>
            <p className="mt-6 text-lg text-white/80">
              {t("trainerFaq.hero.subtitle")}
            </p>
            <p className="mt-2 text-white/60">
              {t("trainerFaq.hero.note")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${catIndex}-faq-${index}`}
                      className="bg-card border border-border rounded-xl px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-medium text-foreground pr-4">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.hasLink ? (
                          <span dangerouslySetInnerHTML={{
                            __html: faq.answer.replace(
                              /\[([^\]]+)\]\(([^)]+)\)/g,
                              '<a href="$2" class="text-primary hover:underline">$1</a>'
                            )
                          }} />
                        ) : (
                          faq.answer
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Link */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              {t("trainerFaq.stillHaveQuestions")}{" "}
              <Link to="/contact" className="text-primary hover:underline font-medium">
                {t("trainerFaq.contactSupport")}
              </Link>
            </p>
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
            <PillLink to="/trainer/how-it-works" variant="default">
              How it works
            </PillLink>
            <PillLink to="/trainer/requirements" variant="default">
              Requirements
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
              {t("trainerFaq.cta.title")}
            </h2>
            <p className="text-white/70 mb-8">
              {t("trainerFaq.cta.subtitle")}
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
