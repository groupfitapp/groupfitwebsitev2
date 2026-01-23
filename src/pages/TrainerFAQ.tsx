import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  CircleDollarSign, 
  Calendar, 
  MapPinned, 
  Users, 
  RefreshCw, 
  HelpCircle,
  Shield
} from "lucide-react";
import { PillLink } from "@/components/ui/PillLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import trainerFaqHeroImg from "@/assets/heroes/trainer-faq-hero.jpg";

const faqCategories = [
  {
    title: "Getting Started",
    icon: Sparkles,
    faqs: [
      {
        question: "What is Group Fit?",
        answer: "Group Fit is a platform for in-person sessions where customers can book trainers based on specialization, time, and location. Customers can also create private groups with friends or family and split the cost.",
      },
      {
        question: "What is Group Fit Trainer?",
        answer: "Group Fit Trainer is the trainer app that lets you set your availability, service areas, and booking buffers—then manage bookings, rescheduling, and earnings in one place.",
      },
    ],
  },
  {
    title: "Availability, Service Radius & Visibility",
    icon: Calendar,
    faqs: [
      {
        question: "How does availability work?",
        answer: "You set time slots for each day (multiple windows per day are allowed). Customers can only book within the times you set.",
      },
      {
        question: "How do service locations and radius work?",
        answer: "You set a service location and radius in kilometers, and you can assign different locations and radiuses to different days.",
      },
      {
        question: "How do these settings affect who sees me?",
        answer: "Customers see you only when their request matches all of the following: your specialization, your available day/time, and their address is inside your radius for that day.",
      },
      {
        question: "How does the time gap between sessions work?",
        answer: "You choose a buffer (up to 1 hour). Group Fit automatically blocks times that would violate your buffer, helping prevent scheduling conflicts.",
      },
    ],
  },
  {
    title: "Bookings & Group Sessions",
    icon: Users,
    faqs: [
      {
        question: "Will I receive group bookings?",
        answer: "Yes. Customers can form private groups and book together, and you'll see the group details and the selected address.",
      },
      {
        question: "Do group sessions cost more than individual sessions?",
        answer: "No. Group sessions are priced the same as individual sessions, and the platform can split the cost among group members.",
      },
      {
        question: "Where can sessions take place?",
        answer: "Sessions can take place at a suitable location chosen by the customer (home, park, gym, etc.). Customers cover any facility fees.",
      },
      {
        question: "Do I have to travel to the customer's location?",
        answer: "Yes. Sessions are in-person and trainers travel to the customer's chosen location.",
      },
    ],
  },
  {
    title: "Rescheduling & Cancellations",
    icon: RefreshCw,
    faqs: [
      {
        question: "How do rescheduling requests work?",
        answer: "You can request a reschedule in the app. Group Fit manages the client confirmation flow and finalizes the updated time.",
      },
      {
        question: "How do cancellations work?",
        answer: "Cancellations can be initiated in the app. Any applicable fees or rules are listed in the Terms & Conditions.",
      },
    ],
  },
  {
    title: "Earnings & Payouts",
    icon: CircleDollarSign,
    faqs: [
      {
        question: "How is commission calculated and paid out?",
        answer: "Earnings and payouts are handled through Stripe Connect. For current payout timing and rules, refer to the [Terms & Conditions](/app-trainer-terms-and-condition) and in-app details.",
        hasLink: true,
      },
      {
        question: "Do customer discounts reduce what I earn?",
        answer: "Earnings and promotions are handled transparently—details are available in the [Terms & Conditions](/app-trainer-terms-and-condition).",
        hasLink: true,
      },
    ],
  },
  {
    title: "Verification, Safety & Profile Tips",
    icon: Shield,
    faqs: [
      {
        question: "What is the ID verification process?",
        answer: "Trainers complete ID verification during onboarding (via Plaid). This helps keep the platform safe for both trainers and customers.",
      },
      {
        question: "Do I need to provide equipment?",
        answer: "It's optional. You can bring equipment if you choose, at no extra charge unless otherwise stated.",
      },
      {
        question: "How can I make a strong first impression?",
        answer: "Use a clear profile photo, write a simple bio, select accurate specializations, and list languages you speak.",
      },
      {
        question: "Can I update my service area, availability, and specializations?",
        answer: "Yes. You can update service area, radius, availability, and specializations in the app. Some specializations may require support approval.",
      },
    ],
  },
];

// Generate structured FAQ schema from categories
const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does availability work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You set time slots for each day (multiple windows per day are allowed). Customers can only book within the times you set."
      }
    },
    {
      "@type": "Question",
      "name": "How do service locations and radius work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You set a service location and radius in kilometers, and you can assign different locations and radiuses to different days."
      }
    },
    {
      "@type": "Question",
      "name": "How does the time gap between sessions work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You choose a buffer (up to 1 hour). Group Fit automatically blocks times that would violate your buffer, helping prevent scheduling conflicts."
      }
    },
    {
      "@type": "Question",
      "name": "Will I receive group bookings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Customers can form private groups and book together, and you'll see the group details and the selected address."
      }
    },
    {
      "@type": "Question",
      "name": "Do group sessions cost more than individual sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Group sessions are priced the same as individual sessions, and the platform can split the cost among group members."
      }
    },
    {
      "@type": "Question",
      "name": "Where can sessions take place?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sessions can take place at a suitable location chosen by the customer (home, park, gym, etc.). Customers cover any facility fees."
      }
    },
    {
      "@type": "Question",
      "name": "How do rescheduling requests work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can request a reschedule in the app. Group Fit manages the client confirmation flow and finalizes the updated time."
      }
    },
    {
      "@type": "Question",
      "name": "How is commission calculated and paid out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Earnings and payouts are handled through Stripe Connect. For current payout timing and rules, refer to the Terms & Conditions and in-app details."
      }
    }
  ]
};

export default function TrainerFAQ() {
  return (
    <>
      <Helmet>
        <title>Trainer FAQ | Group Fit Trainer</title>
        <meta
          name="description"
          content="Answers for trainers on availability, service radiuses, booking buffers, group bookings, locations, rescheduling, verification, and payouts."
        />
        <meta name="keywords" content="trainer FAQ, personal trainer questions, Group Fit trainer help, fitness coach FAQ, trainer support" />
        <link rel="canonical" href="https://groupfitapp.com/trainer/faq" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Trainer FAQ | Group Fit Trainer" />
        <meta property="og:description" content="Quick answers for trainers. No fluff." />
        <meta property="og:url" content="https://groupfitapp.com/trainer/faq" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trainer FAQ | Group Fit" />
        <meta name="twitter:description" content="Quick answers for trainers on availability, bookings, and payouts." />
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
              Trainer FAQ
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Quick answers. No fluff.
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
              Still have questions?{" "}
              <Link to="/contact" className="text-primary hover:underline font-medium">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink to="/trainer/how-it-works" variant="default">
              How it works
            </PillLink>
            <PillLink to="/trainer/requirements" variant="default">
              Requirements
            </PillLink>
            <PillLink to="/download" variant="default">
              Download
            </PillLink>
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
              Ready to start training?
            </h2>
            <p className="text-white/70 mb-8">
              Download the trainer app and start growing your business today.
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
