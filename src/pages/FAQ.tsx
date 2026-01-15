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
      },
      {
        question: "How long is each session?",
        answer: "Each session is 60 minutes.",
      },
      {
        question: "Are there any age restrictions for using Group Fit?",
        answer: "Users must be at least 18 years old to book and participate in sessions on Group Fit. Parental consent may be required for minors participating in certain activities.",
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
            <p className="mb-3">Group Fit is committed to providing you with qualified and trustworthy trainers. We implement a rigorous two-step screening process:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Resume and Certification Review:</strong> We meticulously evaluate each trainer's resume and relevant certifications to verify their experience and expertise.</li>
              <li><strong>Identity Verification by Plaid:</strong> All trainers undergo an identity check conducted by Plaid, ensuring they are who they claim to be.</li>
            </ul>
            <p className="mt-3">This robust process ensures that the trainers you interact with on Group Fit are not only experienced but also verified, fostering a safe and trustworthy training environment.</p>
          </>
        ),
      },
      {
        question: "How can I book sessions with a specific trainer?",
        answer: "Simply favorite your preferred trainers by pressing the heart icon on their profile. To book sessions with your favorite trainers, go to \"My Trainers\" in the app, where you can select from your list of favorite trainers and schedule sessions directly with them, based on their availability.",
      },
      {
        question: "Can I find a coach who speaks French?",
        answer: "Yes. Trainer languages are shown on the trainer profile card.",
      },
    ],
  },
  {
    title: "Booking & Availability",
    faqs: [
      {
        question: "Why can't I find any trainers on Group Fit?",
        answer: (
          <>
            <p className="mb-3">There could be several reasons why you're unable to find trainers for your session:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Scheduling Conflicts:</strong> The trainer you're interested in may already be booked for another session at your chosen time.</li>
              <li><strong>Activity Availability:</strong> There might not be any trainers currently available who specialize in the activity you're looking to train in.</li>
              <li><strong>Location-Based Matching:</strong> Trainers are shown based on the location you've selected, and there may be limited availability in your area.</li>
            </ul>
            <p className="mt-3">We understand this can be inconvenient. The availability of trainers depends on the number of qualified trainers who have signed up to offer their services in various specializations on our platform.</p>
          </>
        ),
      },
      {
        question: "How can I favorite an activity?",
        answer: "To favorite an activity, go to the \"Activities\" screen, select the activity you're interested in, and tap on the heart icon in the corner. Your favorited activities will then be displayed on the Home screen under \"Favorites.\"",
      },
    ],
  },
  {
    title: "Locations & Equipment",
    faqs: [
      {
        question: "What should I consider when choosing a location for my session?",
        answer: "You are free to choose any location for your session, provided it is publicly accessible or you have obtained permission to use it. If the location you select requires a fee for facility usage, please be aware that you will be responsible for covering these costs.",
      },
      {
        question: "Is it necessary for me to have equipment for my training session?",
        answer: "While it's not mandatory, having basic equipment can significantly enhance your training experience depending on the activity you choose. Trainers are not required to provide equipment. Ultimately, while some equipment may be advantageous, it is not essential for a successful session.",
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
              <li>Select the Activity you'd like.</li>
              <li>Tap on "Create Booking."</li>
              <li>Choose your location or add a new one.</li>
              <li>Pick the date and time for your session.</li>
              <li>Select your preferred trainer and tap "Book Session."</li>
              <li>Choose from your existing groups or tap "Create New Group." Users who have installed and created a profile will appear under "Available on Group Fit." If any invitees are not yet on the list, you can invite them to install the app.</li>
              <li>Once your group is selected, tap "Proceed to Pay."</li>
              <li>On the checkout screen, choose "Pay Total Amount" if you prefer to cover the full session cost yourself, or "Pay Partial Amount" to split the cost equally among all group members.</li>
            </ol>
            <p className="text-sm bg-muted p-3 rounded-lg"><strong>Note:</strong> Group members have 30 minutes to complete their payment after a group booking is initiated. If any members fail to pay within this timeframe, the booking will be automatically canceled and any members who have already paid will receive a refund.</p>
          </>
        ),
      },
      {
        question: "How many members can be in a group?",
        answer: "A group can have a maximum of 10 members.",
      },
      {
        question: "Do all group members need to come to the same location?",
        answer: "Yes, for a group booking, all members are required to come to the location selected by the member who created the booking.",
      },
      {
        question: "Can I create multiple groups?",
        answer: "Yes, you can create and manage multiple groups by going to \"Accounts\" and then selecting \"My Groups.\" To schedule sessions with different groups, simply follow the booking steps provided. This allows you to organize and book sessions with various groups as needed.",
      },
    ],
  },
  {
    title: "Cancellations & Rescheduling",
    faqs: [
      {
        question: "Can I cancel a booked session?",
        answer: "Yes, you can cancel a booked session without any charges if you do so at least 2 hours before the scheduled start time. For the most current cancellation policy, please consult our Terms and Conditions.",
      },
      {
        question: "How do I reschedule a session?",
        answer: "You can easily reschedule your session by navigating to \"My Sessions\" in the app and selecting \"Contact Support\" for the respective booking.",
      },
      {
        question: "What happens if my trainer doesn't show up?",
        answer: "In the event that your trainer fails to show up for a scheduled session, you can request a full refund of all charges. Simply press the \"Contact Support\" button on the session card in question. Our support team will assess the situation and ensure a prompt resolution.",
      },
    ],
  },
  {
    title: "Payments & Promotions",
    faqs: [
      {
        question: "How do I view my payment history?",
        answer: "To view your payment history, go to \"Accounts\" and tap on \"Payment History.\" This will display a detailed record of all your past transactions.",
      },
      {
        question: "Is there a membership or subscription option available?",
        answer: "Currently, Group Fit operates on a pay-per-session model. We're exploring membership options for frequent users in the future. Stay tuned for updates!",
      },
      {
        question: "How does the referral program work?",
        answer: "You can get a 15% discount on your next booking by referring a friend to join Group Fit. Go to \"Accounts\" and tap on \"Refer a Friend\" to make your referral. After your friend makes their booking, you'll receive a discount for your next session.",
      },
      {
        question: "How can I find out about current promotions and discounts?",
        answer: "Group Fit regularly offers promotions and discounts. To check for any active discounts, go to the checkout screen and tap on \"Available Discounts.\" From there, you can select any applicable discounts from the list, and they will be automatically applied to your booking. If you have a coupon code, you can also enter it on the \"Available Discounts\" screen.",
      },
    ],
  },
  {
    title: "Feedback & Support",
    faqs: [
      {
        question: "How do I provide feedback on my session experience?",
        answer: "After each session, you'll have the opportunity to rate and provide feedback on your trainer. Simply go to the session card under \"My Sessions\" and tap on \"Review Sessions\". Your feedback is important to us and helps maintain high standards for our services.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Customer FAQ | Group Fit - Personal Training Questions Answered</title>
        <meta
          name="description"
          content="Find answers to common questions about booking personal training sessions, group bookings, trainer quality, locations, payments, and cancellation policies with Group Fit."
        />
        <meta 
          name="keywords" 
          content="personal training FAQ, Group Fit questions, book trainer Canada, group fitness booking, session cancellation, trainer verification" 
        />
        <link rel="canonical" href="https://groupfitapp.com/faq" />
        <meta property="og:title" content="Customer FAQ | Group Fit" />
        <meta property="og:description" content="Get answers to common questions about booking sessions, group bookings, trainer quality, and cancellation policies." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category => 
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": typeof faq.answer === 'string' ? faq.answer : faq.question
                }
              }))
            )
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs className="mb-6" />
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
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-8">
              Download Group Fit and book your first session today.
            </p>
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
