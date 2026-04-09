import React from "react";
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
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import faqHeroImg from "@/assets/heroes/faq-hero.jpg";

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I book a solo session?",
        answer: (
          <ol className="list-decimal list-inside space-y-1">
            <li>Select the activity you're interested in.</li>
            <li>Tap the "Create Booking" button.</li>
            <li>Add a location for the session.</li>
            <li>Choose the day and time that work best for you.</li>
            <li>Pick from our list of qualified trainers.</li>
            <li>Decide whether to create a group or go solo.</li>
            <li>Complete the payment, and you're all set!</li>
          </ol>
        ),
        schemaAnswer:
          'Select the activity you’re interested in. Tap “Create Booking”. Add a location. Choose the day and time. Pick an available trainer. Choose solo or group. Complete payment.',
      },
      {
        question: "How long is each session?",
        answer: "Each session is 60 minutes.",
      },
      {
        question: "Are there any age restrictions for using Group Fit?",
        answer:
          "Users must be at least 18 years old to book and participate in sessions on Group Fit. Parental consent may be required for minors participating in certain activities.",
      },
    ],
  },
  {
    title: "Trainers & Quality",
    faqs: [
      {
        question: "How does Group Fit ensure the quality and safety of its trainers?",
        answer: (
          <>
            <p className="mb-3">
              Group Fit is committed to providing you with qualified and trustworthy trainers. We implement a rigorous two-step screening process:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Resume and Certification Review:</strong> We evaluate each trainer&apos;s resume and relevant certifications to verify experience and expertise.
              </li>
              <li>
                <strong>Identity Verification by Plaid:</strong> All trainers complete an identity check conducted by Plaid.
              </li>
            </ul>
            <p className="mt-3">
              This process helps ensure the trainers you book are experienced and verified, supporting a safer, more dependable training experience.
            </p>
          </>
        ),
        schemaAnswer:
          "Trainers complete credential review (resume and certifications) and identity verification through Plaid before they can accept bookings.",
      },
      {
        question: "How can I book sessions with a specific trainer?",
        answer:
          'Favorite your preferred trainers by pressing the heart icon on their profile. To book sessions with your favorite trainers, go to "My Trainers" in the app and schedule based on availability.',
      },
      {
        question: "Can I find a coach who speaks French?",
        answer: "Yes. Trainer languages are shown on the trainer profile card.",
      },
      {
        question: "What should I do if I feel unsafe during a session?",
        answer:
          "Your safety is our priority. All trainers complete identity verification and credential review before being approved on Group Fit. If you ever feel uncomfortable, you may end the session immediately and ask the trainer to leave. Contact us at support@groupfitapp.com and we will review the case and assist.",
      },
    ],
  },
  {
    title: "Booking & Availability",
    faqs: [
      {
        question: "How far in advance can I book a session?",
        answer:
          "You can book a session as little as 2 hours in advance, subject to coach availability at your selected time and location.",
      },
      {
        question: "Why can't I find any trainers on Group Fit?",
        answer: (
          <>
            <p className="mb-3">
              There could be several reasons why you&apos;re unable to find trainers for your session:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Scheduling conflicts:</strong> Trainers may already be booked at your chosen time.
              </li>
              <li>
                <strong>Activity availability:</strong> There may be limited availability for your selected activity.
              </li>
              <li>
                <strong>Location-based matching:</strong> Trainers are shown based on your session address, and coverage can vary by area.
              </li>
            </ul>
            <p className="mt-3">
              Availability depends on which qualified trainers are available for your activity, time, and location.
            </p>
          </>
        ),
        schemaAnswer:
          "You may not see trainers due to scheduling conflicts, limited activity availability, or limited coverage for your session address. Availability depends on trainers who are available for your activity, time, and location.",
      },
      {
        question: "How can I favorite an activity?",
        answer:
          'Go to the "Activities" screen, select an activity, and tap the heart icon. Favorited activities appear under "Favorites."',
      },
    ],
  },
  {
    title: "Locations & Equipment",
    faqs: [
      {
        question: "What should I consider when choosing a location for my session?",
        answer:
          "You can choose any location for your session if it is publicly accessible or you have permission to use it. If the location requires a facility fee, you are responsible for that cost.",
      },
      {
        question: "What happens if it rains during an outdoor session?",
        answer:
          "Customers are responsible for ensuring weather conditions are suitable for outdoor sessions. We recommend having a backup indoor location or rescheduling if conditions are unfavorable.",
      },
      {
        question: "Is it necessary for me to have equipment for my training session?",
        answer:
          "It’s not mandatory. Some activities benefit from equipment, but trainers are not required to provide it. Many sessions can still run effectively without equipment.",
      },
    ],
  },
  {
    title: "Group Bookings",
    faqs: [
      {
        question: "How do I book a group session?",
        answer: (
          <>
            <ol className="list-decimal list-inside space-y-1 mb-4">
              <li>Select the activity you&apos;d like.</li>
              <li>Tap "Create Booking."</li>
              <li>Choose your location or add a new one.</li>
              <li>Pick the date and time.</li>
              <li>Select your preferred trainer and tap "Book Session."</li>
              <li>
                Choose an existing group or tap "Create New Group." If invitees aren&apos;t on the list, you can invite them to install Group Fit.
              </li>
              <li>Tap "Proceed to Pay."</li>
              <li>Choose to pay the total or split the cost equally among group members.</li>
            </ol>
            <p className="text-sm bg-muted p-3 rounded-lg">
              <strong>Note:</strong> Group members have 30 minutes to complete payment after the booking is initiated. If anyone doesn&apos;t pay in time, the booking is canceled and paid members are refunded.
            </p>
          </>
        ),
        schemaAnswer:
          "Select an activity, create booking, choose location, pick date/time, select trainer, choose or create a group, proceed to pay, and either pay total or split the cost. Members have 30 minutes to pay or the booking is canceled and refunds are issued.",
      },
      {
        question: "How many members can be in a group?",
        answer: "A group can have a maximum of 10 members.",
      },
      {
        question: "Do all group members need to come to the same location?",
        answer:
          "Yes. For a group booking, all members meet at the location selected by the member who created the booking.",
      },
      {
        question: "Can I create multiple groups?",
        answer:
          'Yes. Go to "Accounts" then "My Groups" to create and manage groups, and book sessions for different groups as needed.',
      },
    ],
  },
  {
    title: "Cancellations & Rescheduling",
    faqs: [
      {
        question: "What is the cancellation policy?",
        answer:
          "You can cancel a session free of charge up to 2 hours before the scheduled start time. For the most current policy details, please refer to our Terms and Conditions.",
      },
      {
        question: "Can I cancel a booked session?",
        answer:
          "Yes. You can cancel without charges if you do so at least 2 hours before the scheduled start time. Please consult our Terms and Conditions for the most current policy.",
      },
      {
        question: "How do I reschedule a session?",
        answer:
          'Go to "My Sessions" in the app and select "Contact Support" for the booking you want to change.',
      },
      {
        question: "What happens if my trainer doesn't show up?",
        answer:
          'If a trainer fails to show up, you can request help through "Contact Support" on the session card. Our support team will review and assist.',
      },
    ],
  },
  {
    title: "Payments & Promotions",
    faqs: [
      {
        question: "What payment methods are accepted?",
        answer:
          "Group Fit accepts major credit and debit cards. Payment is processed securely through the app at the time of booking.",
      },
      {
        question: "Are tips included or can I tip my trainer?",
        answer:
          "Tips are not required or expected. The session price covers the full cost of your training.",
      },
      {
        question: "How do I view my payment history?",
        answer:
          'Go to "Accounts" and tap "Payment History" to see your transactions.',
      },
      {
        question: "Is there a membership or subscription option available?",
        answer:
          "Group Fit operates on a pay-per-session model. Membership options may be added in the future.",
      },
      {
        question: "How does the referral program work?",
        answer:
          'You receive a 15% discount on your next booking when someone you refer joins Group Fit and completes a session. Go to "Accounts" then "Refer a Friend" to share your referral.',
      },
      {
        question: "How can I find out about current promotions and discounts?",
        answer:
          'At checkout, tap "Available Discounts" to view active offers. Coupon codes can also be entered on that screen.',
      },
    ],
  },
  {
    title: "Feedback & Support",
    faqs: [
      {
        question: "How do I provide feedback on my session experience?",
        answer:
          'After a session, go to "My Sessions" and tap "Review Sessions" to rate and leave feedback.',
      },
    ],
  },
];

// Helper to guarantee a clean string for schema
const getSchemaAnswer = (faq: {
  question: string;
  answer: React.ReactNode;
  schemaAnswer?: string;
}) => {
  if (faq.schemaAnswer && faq.schemaAnswer.trim().length > 0) return faq.schemaAnswer.trim();
  if (typeof faq.answer === "string" && faq.answer.trim().length > 0) return faq.answer.trim();
  return "See details on the page.";
};

export default function FAQ() {
  const title = "Customer FAQ | Group Fit";
  const description =
    "Find answers about booking sessions, group bookings, trainer verification, payments, and cancellation policies on Group Fit.";
  const canonical = "https://groupfitapp.com/faq";
  const ogImage = "https://groupfitapp.com/groupfit-logo.png";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: getSchemaAnswer(faq),
        },
      }))
    ),
  };

  return (
    <>
      <Helmet>
        <title>{title} | Personal Training Questions Answered</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={`${title} | Personal Training Questions Answered`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="791" />
        <meta property="og:image:height" content="791" />
        <meta property="og:image:alt" content="Group Fit" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@groupfitapp" />
        <meta name="twitter:title" content={`${title} | Personal Training Questions Answered`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Group Fit" />

        {/* FAQ Schema */}
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img
            src={faqHeroImg}
            alt="Personal training session"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs className="mb-6" />
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 28, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="mt-6 text-lg text-white/60"
            >
              Everything you need to know about booking and training with Group Fit.
            </motion.p>
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
                transition={{ delay: catIndex * 0.05 }}
                className="mb-12 last:mb-0"
              >
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold">
                    {catIndex + 1}
                  </span>
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
                        <span className="font-medium text-foreground">{faq.question}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-8">
              Download Group Fit and book your first session today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-red-dark text-white">
                <Link to="/download" aria-label="Download Group Fit">
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10"
              >
                <Link to="/app-user-terms-and-condition" aria-label="Read Group Fit customer terms and conditions">
                  Terms &amp; Conditions
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
