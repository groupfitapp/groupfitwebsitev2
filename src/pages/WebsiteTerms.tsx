import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function WebsiteTerms() {
  return (
    <>
      <Helmet>
        <title>Website Terms and Conditions | Group Fit</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for using the Group Fit website. Learn about eligibility, user accounts, intellectual property, and more."
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
              Website Terms and Conditions
            </h1>
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
            className="max-w-3xl mx-auto"
          >
            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">1.</span> Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website ("Site"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you may not use the Site.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">2.</span> Use of the Website
              </h2>
              <ul className="space-y-4">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Eligibility:</strong> You must be at least 13 years old to use this Site. By using this Site, you represent and warrant that you are 13 years of age or older.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Lawful Use:</strong> You agree to use the Site only for lawful purposes and in accordance with these Terms.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Modification or Discontinuation:</strong> We reserve the right to modify, suspend, or discontinue any part of the Site at any time without notice.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">3.</span> User Account
              </h2>
              <ul className="space-y-4">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Registration:</strong> If the Site requires user registration, you are responsible for maintaining the confidentiality of your account and password.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Accuracy of Information:</strong> You agree to provide accurate, current, and complete information during the registration process.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Account Security:</strong> You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">4.</span> Intellectual Property
              </h2>
              <ul className="space-y-4">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Ownership:</strong> All content, design, and intellectual property on this Site are owned by or licensed to us and are protected by applicable copyright, trademark, and other intellectual property laws.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Restrictions:</strong> You may not reproduce, distribute, modify, or otherwise use any part of the Site without our express written consent.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">5.</span> Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the Site is also governed by our Privacy Policy, which is incorporated by reference into these Terms.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">6.</span> Limitation of Liability
              </h2>
              <ul className="space-y-4">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">No Warranty:</strong> The Site and its content are provided "as is" without any warranties, express or implied.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Limitation of Liability:</strong> We are not liable for any damages arising from the use or inability to use the Site.
                </li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">7.</span> Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">Jurisdiction:</strong> These Terms are governed by and construed in accordance with the laws of Ontario, Canada.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">8.</span> Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">Modification:</strong> We reserve the right to change these Terms at any time, and the revised terms will be effective immediately upon posting on the Site.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">9.</span> Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions or concerns about these Terms and Conditions, you may contact us at{" "}
                <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline font-medium">
                  legal@groupfitapp.com
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
