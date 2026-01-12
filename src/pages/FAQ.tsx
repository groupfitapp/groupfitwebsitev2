import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { APP_LINKS } from "@/lib/appLinks";

const faqCategories = [
  {
    title: "Booking & Availability",
    faqs: [
      {
        question: "Why don't I see any coaches for my session?",
        answer: "Availability depends on the session address, the activity selected, and coach schedules. If any of these change, the list of available coaches can change.",
      },
      {
        question: "What should I try if I don't see options?",
        answer: "Try a different date or time, or choose a different activity. Also confirm the session address is correct; matching is based on the address you enter.",
      },
      {
        question: "Why does the list of coaches change when I change the address?",
        answer: "Availability is based on the session address selected in Group Fit. Changing the address can change which coaches cover that area and who is available at your selected time.",
      },
      {
        question: "How long is each session?",
        answer: "Each session is 60 minutes.",
      },
    ],
  },
  {
    title: "Group Bookings",
    faqs: [
      {
        question: "Are group sessions public?",
        answer: "No. Group bookings are private groups you create (friends/family).",
      },
      {
        question: "How many people can join a private group?",
        answer: "Up to 10 members.",
      },
      {
        question: "Do all group members meet at the same place?",
        answer: "Yes. Everyone trains at the session address selected for the booking.",
      },
      {
        question: "Can I book with friends or family and split the cost?",
        answer: "Yes. Group bookings are private (your own people). You can split the session cost inside Group Fit so there's no manual collecting.",
      },
    ],
  },
  {
    title: "Locations",
    faqs: [
      {
        question: "Where can sessions take place?",
        answer: "Home, condo gym, park, or a facility you arrange (where permitted). Facility fees (if any) are your responsibility.",
      },
      {
        question: "Can sessions happen in a condo gym?",
        answer: "Yes. Use the condo gym address as the session location (where permitted).",
      },
      {
        question: "Can sessions happen outdoors?",
        answer: "Yes. Choose a park or outdoor location you're allowed to use, and book based on that address.",
      },
    ],
  },
  {
    title: "Equipment",
    faqs: [
      {
        question: "Do I need equipment?",
        answer: "Not necessarily. Many sessions can be adapted to bodyweight training and whatever equipment you have access to.",
      },
    ],
  },
  {
    title: "Language",
    faqs: [
      {
        question: "Can I find a coach who speaks French?",
        answer: "Yes. Trainer languages are shown on the trainer profile card.",
      },
    ],
  },
  {
    title: "Cancellations",
    faqs: [
      {
        question: "Where can I find cancellation rules?",
        answer: "See our Terms and Conditions page for the cancellation policy details.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Group Fit</title>
        <meta
          name="description"
          content="Find answers to common questions about booking personal training sessions, group bookings, locations, equipment, and cancellation policies with Group Fit."
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
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Everything you need to know about booking and training with Group Fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="mb-12 last:mb-0"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.title}-${index}`}
                      className="bg-card border border-border rounded-xl px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-medium text-foreground">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
              Still have questions?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-red-dark text-white"
              >
                <a href={APP_LINKS.customer.ios} target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <Link to="/app-user-terms-and-condition">
                  Terms & Conditions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
