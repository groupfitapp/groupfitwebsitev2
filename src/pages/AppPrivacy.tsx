import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function AppPrivacy() {
  return (
    <>
      <Helmet>
        <title>App Privacy Policy | Group Fit</title>
        <meta
          name="description"
          content="Read the Privacy Policy for the Group Fit mobile applications. Learn how we collect, use, and protect your personal information in our apps."
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
              App Privacy Policy
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
            <p className="text-muted-foreground leading-relaxed mb-6">
              Thank you for choosing to use our GroupFit application ("the App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our App. Please read this Privacy Policy carefully. By using the App, you consent to the practices described in this Privacy Policy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              If you have any questions or concerns about our Privacy Policy, please contact us at{" "}
              <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline font-medium">
                legal@groupfitapp.com
              </a>.
            </p>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">Information We</span> Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you use our App, we collect the following types of personal information:
              </p>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Personal Information:</strong> This includes your name, email address, and phone number when you register for an account. If you make payments, these are processed by Stripe, where you provide your credit card or banking information directly on Stripe's platform, which is not stored by us.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Verification Information:</strong> To ensure your identity and comply with regulatory requirements, we use Plaid, where you provide identity documents directly on their platform. We do not store these documents.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">User Content:</strong> This refers to information you voluntarily provide through the App, such as reviews, ratings, and feedback about personal trainers.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Usage Information:</strong> We automatically collect certain information about your device and how you use our App, including IP address, device type, operating system, app version, and usage patterns.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Location Information:</strong> With your consent, we may collect and process information about your location to provide location-based features and services.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Authentication Information:</strong> To enhance security, we use Twilio to generate one-time passcodes (OTP) for login and other authentication purposes. Twilio may collect your phone number to send OTPs.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Referral Information:</strong> If you participate in our referral programs, we may collect information about you and your referrals through Branch.io, which may include data on who referred you, who you refer, and any rewards or incentives you earn.
                </li>
              </ol>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">How We Use</span> Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use your information for the following purposes:
              </p>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">To Provide and Improve the App:</strong> This includes operating, maintaining, and enhancing the App's features, including processing payments, verifying identity, facilitating referral programs, and authenticating users through services like Stripe, Plaid, Branch.io, and Twilio.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">To Personalise User Experience:</strong> We use your information to customize the App's content and services to your preferences.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">To Communicate with You:</strong> This includes sending you transactional and promotional communications. You can opt-out of marketing communications at any time.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">To Respond to User Inquiries and Support Requests:</strong> We use your information to respond to inquiries and provide customer support.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">To Ensure Compliance and Security:</strong> We use your information to enforce our terms of use, privacy policy, and other policies, and to detect and prevent fraud or other unauthorized activities. This includes OTP-based authentication through Twilio.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">To Facilitate Referrals and Incentives:</strong> We may use your information to manage referral programs and associated incentives through Branch.io.
                </li>
              </ol>
            </div>

            {/* Information Sharing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">Information Sharing</span> and Disclosure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your personal information in the following circumstances:
              </p>
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">With Service Providers:</strong> We share your information with third-party service providers, such as Stripe for payment processing, Plaid for identity verification, Twilio for OTP-based authentication, and Branch.io for referral programs. We may also use other similar platforms to achieve the same results.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">For Business Transfers:</strong> If we undergo a business transition such as a merger, acquisition, or sale of assets, your information may be part of the transferred assets.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">For Legal Compliance:</strong> We may disclose your information in response to legal requirements or to protect our rights, such as in response to valid requests by public authorities.
                </li>
              </ol>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">Data</span> Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no security system is infallible. If you suspect any breach or unauthorized access to your data, please contact us immediately.
              </p>
            </div>

            {/* Your Choices and Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">Your Choices</span> and Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at{" "}
                <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline font-medium">
                  legal@groupfitapp.com
                </a>.
              </p>
            </div>

            {/* Retention */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">Retention of</span> Personal Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as needed to meet the purposes outlined in this policy or as required by law.
              </p>
            </div>

            {/* Changes */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">Changes to this</span> Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Changes will take effect when we post the updated version. We encourage you to review this policy from time to time.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">Contact</span> Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, contact us at{" "}
                <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline font-medium">
                  legal@groupfitapp.com
                </a>.
              </p>
            </div>

            {/* Consent */}
            <div className="p-6 bg-muted rounded-xl">
              <p className="text-foreground leading-relaxed font-medium">
                By using our App, you signify your consent to the terms of this Privacy Policy. If you do not agree with this Privacy Policy, you should not use the App.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
