import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Group Fit</title>
        <meta
          name="description"
          content="Read the Terms of Service for Group Fit. Understand the rules and guidelines for using our personal training booking platform."
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
              Terms of Service
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Last updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-3xl mx-auto text-muted-foreground"
          >
            <h2 className="text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Group Fit, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-foreground">2. Description of Service</h2>
            <p>
              Group Fit is a platform that connects customers with personal trainers for in-person training sessions. We facilitate bookings but do not employ trainers directly.
            </p>

            <h2 className="text-foreground">3. User Accounts</h2>
            <p>
              You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials.
            </p>

            <h2 className="text-foreground">4. Booking and Payments</h2>
            <p>
              All bookings are processed through the Group Fit app. Payment is required at the time of booking. Refunds are subject to our cancellation policy.
            </p>

            <h2 className="text-foreground">5. Trainer Responsibilities</h2>
            <p>
              Trainers are independent contractors. They are responsible for maintaining valid certifications, insurance, and providing safe, professional services.
            </p>

            <h2 className="text-foreground">6. Customer Responsibilities</h2>
            <p>
              Customers must provide accurate session location information and ensure the location is safe and suitable for training activities.
            </p>

            <h2 className="text-foreground">7. Limitation of Liability</h2>
            <p>
              Group Fit is not liable for injuries, damages, or losses resulting from training sessions. Users participate at their own risk.
            </p>

            <h2 className="text-foreground">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of updated terms.
            </p>

            <h2 className="text-foreground">9. Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us through the app.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
