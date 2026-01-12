import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function AppPrivacy() {
  return (
    <>
      <Helmet>
        <title>App Privacy Policy | Group Fit</title>
        <meta
          name="description"
          content="Read the Privacy Policy for the Group Fit mobile applications."
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
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert"
          >
            <p>
              Thank you for choosing to use our GroupFit application ("the App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our App. Please read this Privacy Policy carefully. By using the App, you consent to the practices described in this Privacy Policy.
            </p>
            <p>
              If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline">legal@groupfitapp.com</a>.
            </p>

            <h2>Information We Collect</h2>
            <p>When you use our App, we collect the following types of personal information:</p>
            <ul>
              <li><strong className="text-primary">Personal Information:</strong> This includes your name, email address, and phone number when you register for an account. If you make payments, these are processed by Stripe, where you provide your credit card or banking information directly on Stripe's platform, which is not stored by us.</li>
              <li><strong className="text-primary">Verification Information:</strong> To ensure your identity and comply with regulatory requirements, we use Plaid, where you provide identity documents directly on their platform. We do not store these documents.</li>
              <li><strong className="text-primary">User Content:</strong> This refers to information you voluntarily provide through the App, such as reviews, ratings, and feedback about personal trainers.</li>
              <li><strong className="text-primary">Usage Information:</strong> We automatically collect certain information about your device and how you use our App, including IP address, device type, operating system, app version, and usage patterns.</li>
              <li><strong className="text-primary">Location Information:</strong> With your consent, we may collect and process information about your location to provide location-based features and services.</li>
              <li><strong className="text-primary">Authentication Information:</strong> To enhance security, we use Twilio to generate one-time passcodes (OTP) for login and other authentication purposes. Twilio may collect your phone number to send OTPs.</li>
              <li><strong className="text-primary">Referral Information:</strong> If you participate in our referral programs, we may collect information about you and your referrals through Branch.io, which may include data on who referred you, who you refer, and any rewards or incentives you earn.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use your information for the following purposes:</p>
            <ul>
              <li><strong className="text-primary">To Provide and Improve the App:</strong> This includes operating, maintaining, and enhancing the App's features, including processing payments, verifying identity, facilitating referral programs, and authenticating users through services like Stripe, Plaid, Branch.io, and Twilio.</li>
              <li><strong className="text-primary">To Personalise User Experience:</strong> We use your information to customize the App's content and services to your preferences.</li>
              <li><strong className="text-primary">To Communicate with You:</strong> This includes sending you transactional and promotional communications. You can opt-out of marketing communications at any time.</li>
              <li><strong className="text-primary">To Respond to User Inquiries and Support Requests:</strong> We use your information to respond to inquiries and provide customer support.</li>
              <li><strong className="text-primary">To Ensure Compliance and Security:</strong> We use your information to enforce our terms of use, privacy policy, and other policies, and to detect and prevent fraud or other unauthorized activities. This includes OTP-based authentication through Twilio.</li>
              <li><strong className="text-primary">To Facilitate Referrals and Incentives:</strong> We may use your information to manage referral programs and associated incentives through Branch.io.</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your personal information in the following circumstances:</p>
            <ul>
              <li><strong className="text-primary">With Service Providers:</strong> We share your information with third-party service providers, such as Stripe for payment processing, Plaid for identity verification, Twilio for OTP-based authentication, and Branch.io for referral programs. We may also use other similar platforms to achieve the same results.</li>
              <li><strong className="text-primary">For Business Transfers:</strong> If we undergo a business transition such as a merger, acquisition, or sale of assets, your information may be part of the transferred assets.</li>
              <li><strong className="text-primary">For Legal Compliance:</strong> We may disclose your information in response to legal requirements or to protect our rights, such as in response to valid requests by public authorities.</li>
            </ul>

            <h2>Data Security</h2>
            <p>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no security system is infallible. If you suspect any breach or unauthorized access to your data, please contact us immediately.</p>

            <h2>Your Choices and Rights</h2>
            <p>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no security system is infallible. If you suspect any breach or unauthorized access to your data, please contact us immediately.</p>

            <h2>Retention of Personal Information</h2>
            <p>We retain your personal information for as long as needed to meet the purposes outlined in this policy or as required by law.</p>

            <h2>Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will take effect when we post the updated version. We encourage you to review this policy from time to time.</p>

            <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline">legal@groupfitapp.com</a>.</p>

            <p>By using our App, you signify your consent to the terms of this Privacy Policy. If you do not agree with this Privacy Policy, you should not use the App.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
