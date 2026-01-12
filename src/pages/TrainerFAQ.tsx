import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Apple, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { APP_LINKS } from "@/lib/appLinks";

const trainerFaqs = [
  {
    question: "How do I set my rates?",
    answer: "You control your pricing in the app. Set your rates based on the activity and your experience level.",
  },
  {
    question: "How do I get paid?",
    answer: "Payments are processed through the app. Earnings are deposited to your connected bank account.",
  },
  {
    question: "Can I set my own schedule?",
    answer: "Yes. You define your availability in the app. Only accept bookings that work for your schedule.",
  },
  {
    question: "How does the service area work?",
    answer: "You set a radius around your location or specific areas where you're willing to travel for sessions.",
  },
  {
    question: "What happens if a customer cancels?",
    answer: "Cancellation policies are applied based on timing. See the cancellation policy for details.",
  },
  {
    question: "Do I need my own equipment?",
    answer: "It depends on the activity and session location. Many sessions can be done with bodyweight or equipment the customer provides.",
  },
  {
    question: "How do I handle group bookings?",
    answer: "Group bookings work the same as individual bookings. You'll see the group size before accepting.",
  },
  {
    question: "What certifications are required?",
    answer: "Requirements vary by activity. Generally, you need a valid certification for your training specialty plus CPR/First Aid.",
  },
];

export default function TrainerFAQ() {
  return (
    <>
      <Helmet>
        <title>Trainer FAQ | Group Fit</title>
        <meta
          name="description"
          content="Frequently asked questions for Group Fit trainers. Learn about rates, payments, scheduling, and requirements."
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
              Trainer FAQ
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Common questions from trainers joining Group Fit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {trainerFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
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
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              to="/trainer/how-it-works"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              How it works
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/trainer/requirements"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              Requirements
              <ArrowRight className="w-4 h-4" />
            </Link>
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
              Ready to start?
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-red-dark text-white"
            >
              <a href={APP_LINKS.trainer.ios} target="_blank" rel="noopener noreferrer">
                <Apple className="w-5 h-5 mr-2" />
                Download Trainer App
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
