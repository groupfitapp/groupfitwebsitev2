import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Where can sessions take place?",
    answer: "You choose the session location—home, condo gym, park, or a facility you arrange (where permitted). You enter the address during booking and the coach comes to that location.",
  },
  {
    question: "Why does the list of coaches change when I change the address?",
    answer: "Availability is based on the session address selected in Group Fit. Changing the address can change which coaches cover that area and who is available at your selected time.",
  },
  {
    question: "How long is each session?",
    answer: "Each session is 60 minutes.",
  },
  {
    question: "Can I book with friends or family and split the cost?",
    answer: "Yes. Group bookings are private (your own people). You can split the session cost inside Group Fit so there's no manual collecting.",
  },
  {
    question: "What if I don't see options for my activity or time?",
    answer: "Try a different time or date, or choose a different activity. Availability depends on the session address, the activity selected, and coach schedules.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently asked questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
