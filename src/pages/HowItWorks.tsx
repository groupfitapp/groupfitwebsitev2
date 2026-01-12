import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Dumbbell, 
  MapPin, 
  Calendar, 
  Users, 
  CreditCard,
  ArrowRight,
  Clock,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

const steps = [
  {
    number: 1,
    icon: Dumbbell,
    title: "Choose your activity",
    description: "Start with the training style you want. Explore options on our activities page.",
  },
  {
    number: 2,
    icon: MapPin,
    title: "Enter your session address",
    description: "Use the exact address where you want to train. Coach availability is based on this address.",
  },
  {
    number: 3,
    icon: Calendar,
    title: "Pick your date & time",
    description: "Choose when you want to train. Availability updates based on schedule and location coverage.",
  },
  {
    number: 4,
    icon: Users,
    title: "Select an available coach",
    description: "Pick from coaches shown as available for that session (address + time + activity).",
  },
  {
    number: 5,
    icon: CreditCard,
    title: "Pay in-app and train",
    description: "Complete the booking and meet your coach at the selected location.",
  },
];

const groupFeatures = [
  "Group bookings are private (friends/family)",
  "Everyone meets at the same location and time",
  "Session duration is 60 minutes",
  "Split the cost inside Group Fit",
  "Up to 10 members per group",
];

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works | Book Personal Training Sessions | Group Fit</title>
        <meta
          name="description"
          content="Learn how to book in-person personal training sessions with Group Fit. Choose an activity, enter your address, pick a time, and connect with available coaches."
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
              How booking works in Group Fit
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Booking is built around your selected activity, session address, and time—so you only see coaches who can accept that session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Step-by-step
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-primary">Step {step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Group Bookings */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Private group bookings
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {groupFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-muted rounded-full px-6 py-3"
            >
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Each session is 60 minutes</span>
            </motion.div>
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
              Next steps
            </h2>
            <div className="flex justify-center mb-6">
              <AppStoreBadges
                iosLink={APP_LINKS.customer.ios}
                androidLink={APP_LINKS.customer.android}
              />
            </div>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              <Link to="/activities">
                View Activities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
