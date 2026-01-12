import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Group Fit</title>
        <meta
          name="description"
          content="Read the Privacy Policy for Group Fit. Learn how we collect, use, and protect your personal information."
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
              Privacy Policy
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
            <h2 className="text-foreground">1. Information We Collect</h2>
            <p>
              We collect information you provide when creating an account, booking sessions, and using our services. This includes name, email, phone number, location data, and payment information.
            </p>

            <h2 className="text-foreground">2. How We Use Your Information</h2>
            <p>
              We use your information to facilitate bookings, process payments, communicate with you about sessions, and improve our services.
            </p>

            <h2 className="text-foreground">3. Information Sharing</h2>
            <p>
              We share necessary information with trainers to facilitate bookings. We do not sell your personal information to third parties.
            </p>

            <h2 className="text-foreground">4. Location Data</h2>
            <p>
              We collect location data to match you with available trainers and facilitate session logistics. You can control location permissions through your device settings.
            </p>

            <h2 className="text-foreground">5. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-foreground">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
            </p>

            <h2 className="text-foreground">7. Cookies and Analytics</h2>
            <p>
              We use cookies and analytics tools to understand how our services are used and to improve user experience.
            </p>

            <h2 className="text-foreground">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or email.
            </p>

            <h2 className="text-foreground">9. Contact Us</h2>
            <p>
              For privacy-related questions or concerns, please contact us through the app.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
