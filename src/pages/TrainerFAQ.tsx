import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CircleDollarSign, Calendar, MapPinned, Users, Briefcase, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

const faqCategories = [
  {
    title: "Getting Started",
    icon: Sparkles,
    faqs: [
      {
        question: "What is Group Fit?",
        answer: "Group Fit is a platform that allows clients to create workout groups with friends and book specialized trainers anytime, anywhere. Trainers can expand their client base, set their own schedules, and maximize their earnings.",
      },
      {
        question: "What is the ID verification process?",
        answer: "You need to complete ID verification via Plaid. A link will be sent to you to complete the same. This ensures a safe environment for both trainers and customers.",
      },
      {
        question: "What should I do to make a good impression on customers?",
        answer: "You should write a compelling bio, use a good profile picture, and select the languages you speak so that customers can easily identify and understand you upon arrival.",
      },
    ],
  },
  {
    title: "Availability & Scheduling",
    icon: Calendar,
    faqs: [
      {
        question: "How does the Availability work for me?",
        answer: "You can specify your availability. For instance, you might set your availability from 9am to 2pm on Mondays. Customers can book sessions only during your available times.",
      },
      {
        question: "How do setting a time gap between sessions and a service radius benefit my visibility?",
        answer: "Setting a time gap between sessions and defining your service radius are key to managing your availability and ensuring you are visible to the right customers. For example, if you set the CN Tower in Toronto as your Service Location with a 15km radius, only customers within that radius will see your profile and be able to book sessions. The time gap between sessions provides a buffer to prevent overlap, allowing you to prepare for appointments without scheduling conflicts. For instance, if a session ends at 11:00 a.m. and you've set a 20-minute gap, the next available slot will be from 11:20 a.m. This ensures a smooth and organized schedule.",
      },
      {
        question: "What happens if a session overlaps with another booking?",
        answer: "The platform ensures there are no overlapping bookings by maintaining the specified time gaps between sessions.",
      },
      {
        question: "How can I ensure there are no scheduling conflicts?",
        answer: "You should always keep your availability updated to ensure there are no conflicts.",
      },
      {
        question: "Can I update my service area, availability, and specializations?",
        answer: "Yes, you can update your Service Location, service radius, availability, and specializations anytime through the platform. To add more specializations, trainers can send a request via Support.",
      },
    ],
  },
  {
    title: "Visibility & Profile",
    icon: MapPinned,
    faqs: [
      {
        question: "How do customers see my profile?",
        answer: "Customers can only see your profile if they live within your specified service radius, choose one of your specified specializations, and select a time that falls within your availability.",
      },
      {
        question: "How does the booking process work for customers?",
        answer: "Customers begin by selecting the specialization they are interested in, choosing a preferred date and time, and then entering their address. Based on these details, a list of available trainers will be displayed. Customers can view each trainer's profile, which includes photos, reviews from other customers, bios, and specializations.",
      },
      {
        question: "How do trainers manage their profiles and schedules?",
        answer: "The Group Fit platform manages all scheduling and profile visibility automatically, so trainers don't need to handle this manually.",
      },
    ],
  },
  {
    title: "Sessions & Groups",
    icon: Users,
    faqs: [
      {
        question: "Will I receive group bookings?",
        answer: "Yes, you may receive group bookings at the discretion of the customer, who can form their own groups. You will receive the names of all group members and the selected address in their app. There are no extra charges for group sessions.",
      },
      {
        question: "Do group sessions cost more than individual sessions?",
        answer: "No, the price for group sessions is the same as for individual sessions. Group Fit enables customers to automatically divide the session cost equally among all group members, making it convenient and fair for everyone involved.",
      },
      {
        question: "Where can sessions take place?",
        answer: "Customers can choose any location for their sessions, such as their home, a public park, a community center, or a gym. It is the customer's responsibility to cover the costs of any facility used and to ensure that the location is suitable for the trainer to deliver the services.",
      },
      {
        question: "Do I have to travel to the customer's location?",
        answer: "Yes, once a customer books a session, you are required to go to the customer's location to deliver the services in person.",
      },
      {
        question: "Is it necessary for me to provide equipment for training sessions?",
        answer: "The provision of equipment for training sessions is entirely up to you. You have the freedom to offer equipment at no additional cost to the customer or group, should you choose to do so. This can enhance the overall quality and experience of your sessions.",
      },
    ],
  },
  {
    title: "Payments & Earnings",
    icon: CircleDollarSign,
    faqs: [
      {
        question: "How is the commission for sessions calculated?",
        answer: "Your commission is calculated as a percentage of the session cost paid by the customer or group. To find the most up-to-date commission rate, please refer to our Terms and Conditions.",
      },
      {
        question: "How and when will I receive my commissions?",
        answer: "Your commission earned, along with any applicable HST/GST, will be securely transferred to your Stripe account bi-weekly. Each trainer will receive a link to create their account, and earnings can be withdrawn to a bank account without any charges.",
      },
    ],
  },
  {
    title: "Rescheduling & Cancellations",
    icon: Briefcase,
    faqs: [
      {
        question: "What is the process for rescheduling a session?",
        answer: "Rescheduling your session is straightforward. Tap the \"Contact Support\" button and select a new date and time that suits you. Our dedicated support team will quickly get back to you with a confirmation or an alternative proposal.",
      },
      {
        question: "How can I cancel a scheduled session?",
        answer: "Cancelling a scheduled session is simple. Press the \"Contact Support\" button on the session card you intend to cancel. Be aware that cancellations incur a 5% fee. If it's an option, you might want to reschedule the session to a time that's more convenient for you.",
      },
    ],
  },
];

export default function TrainerFAQ() {
  return (
    <>
      <Helmet>
        <title>Trainer FAQ | Common Questions for Group Fit Coaches</title>
        <meta
          name="description"
          content="Frequently asked questions for Group Fit trainers. Learn about payments, scheduling, visibility, client bookings, and platform requirements."
        />
        <meta name="keywords" content="trainer FAQ, personal trainer questions, Group Fit trainer help, fitness coach FAQ" />
        <link rel="canonical" href="https://groupfit.ca/trainer/faq" />
        <meta property="og:title" content="Trainer FAQ | Group Fit" />
        <meta property="og:description" content="Everything you need to know about training with Group Fit—payments, scheduling, visibility, and more." />
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
                  "text": faq.answer
                }
              }))
            )
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4">
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
              Everything you need to know about training with Group Fit.
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
                transition={{ delay: catIndex * 0.1 }}
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