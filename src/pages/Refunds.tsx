import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Refunds() {
  return (
    <>
      <Helmet>
        <title>Refunds & Cancellations | Group Fit</title>
        <meta
          name="description"
          content="Understand the refund and cancellation policy for Group Fit training sessions. Learn about timeframes and conditions for refunds."
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
              Refunds & Cancellations
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
            <h2 className="text-foreground">Customer Cancellations</h2>
            <p>
              Customers may cancel bookings through the Group Fit app. Refund eligibility depends on when the cancellation is made relative to the scheduled session time.
            </p>

            <h3 className="text-foreground">Cancellation Timeframes</h3>
            <ul>
              <li><strong>24+ hours before session:</strong> Full refund</li>
              <li><strong>12-24 hours before session:</strong> 50% refund</li>
              <li><strong>Less than 12 hours before session:</strong> No refund</li>
            </ul>

            <h2 className="text-foreground">Trainer Cancellations</h2>
            <p>
              If a trainer cancels a session, customers receive a full refund. We work to find replacement trainers when possible.
            </p>

            <h2 className="text-foreground">No-Shows</h2>
            <p>
              If a customer does not show up for a scheduled session without prior cancellation, no refund is provided.
            </p>
            <p>
              If a trainer does not show up, the customer receives a full refund.
            </p>

            <h2 className="text-foreground">Weather and Outdoor Sessions</h2>
            <p>
              For outdoor sessions affected by severe weather, cancellations may be made without penalty. Contact us through the app for weather-related issues.
            </p>

            <h2 className="text-foreground">Disputes</h2>
            <p>
              If you have concerns about a session or believe a refund is warranted, please contact us through the app within 48 hours of the scheduled session.
            </p>

            <h2 className="text-foreground">Processing Time</h2>
            <p>
              Approved refunds are processed within 5-10 business days. The time for the refund to appear in your account depends on your payment provider.
            </p>

            <h2 className="text-foreground">Contact</h2>
            <p>
              For questions about refunds or cancellations, please contact us through the Group Fit app or visit our <Link to="/faq" className="text-primary hover:underline">FAQ page</Link>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
