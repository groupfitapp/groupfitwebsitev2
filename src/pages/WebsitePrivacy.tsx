import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function WebsitePrivacy() {
  return (
    <>
      <Helmet>
        <title>Website Privacy Policy | Group Fit</title>
        <meta
          name="description"
          content="Read the Privacy Policy for the Group Fit website and applications."
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
              Website Privacy Policy
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
              This Privacy Policy describes how GroupFit Technologies Inc. ("we," "our," or "us") collects, uses, shares, and protects your personal information when you use our applications ("Apps"), including Group Fit and Group Fit Trainer, and websites, including www.groupfitapp.com ("Website"). It also outlines your rights regarding your personal information and how to contact us with any questions or concerns.
            </p>

            <h2>Information We Collect</h2>
            <p>When you use our Apps and Website, we collect the following types of personal information:</p>
            <ul>
              <li><strong className="text-primary">Personal Information:</strong> This includes your name, email address, phone number, and any other information you provide when you register for an account or contact us through the Apps or Website. If you make payments, these are processed by a third-party payment processor, which collects your credit card or banking information directly on its platform; we do not store these financial details.</li>
              <li><strong className="text-primary">Records and Correspondence:</strong> We keep records and copies of your correspondence, including email addresses, if you contact us. This allows us to track our communications with you and respond appropriately.</li>
              <li><strong className="text-primary">Survey Responses:</strong> Your responses to surveys that we might ask you to complete for research purposes. This helps us understand user preferences and improve our services.</li>
              <li><strong className="text-primary">Search Queries:</strong> Information about your search queries on our Website. This helps us understand what content or features are of interest to you.</li>
              <li><strong className="text-primary">User Content:</strong> This refers to information you voluntarily provide through the Apps or Website, such as reviews, ratings, comments, and feedback. User-generated content is visible to other users, so please be cautious when sharing personal information.</li>
              <li><strong className="text-primary">Usage Information:</strong> We automatically collect certain information about your device and how you use our Apps and Website, including IP address, device type, operating system, browser type, app version, and usage patterns.</li>
              <li><strong className="text-primary">Location Information:</strong> With your consent, we may collect and process information about your location to provide location-based features and services, such as personalized content, local trainer recommendations, or location-based services.</li>
              <li><strong className="text-primary">Authentication Information:</strong> To enhance security, we may use a third-party service to generate one-time passcodes (OTP) for login and other authentication purposes. This service may collect your phone number to send OTPs.</li>
              <li><strong className="text-primary">Referral Information:</strong> If you participate in our referral programs, we may collect information about you and your referrals through a third-party platform. This information may include data on who referred you, who you refer, and any rewards or incentives you earn.</li>
              <li><strong className="text-primary">Device Information:</strong> Information about your device hardware and software, including device identifiers, mobile network information, and other technical data, which helps us understand how the Apps and Website are used.</li>
            </ul>

            <h2>Information We Collect Through Automatic Data Collection Technologies</h2>
            <p>We use various technologies to automatically collect data when you interact with our Apps and Website. These technologies may include:</p>
            <ul>
              <li><strong className="text-primary">Cookies:</strong> Small data files placed on your device that help us identify you, keep you logged in, and track your interactions with our services. You can adjust your browser or device settings to control cookies.</li>
              <li><strong className="text-primary">Web Beacons:</strong> Small electronic files that track your navigation on our Website and can be used to monitor user engagement with our emails.</li>
              <li><strong className="text-primary">Log Files:</strong> Information collected when you access or use our Apps or Website, such as IP addresses, device type, operating system, and other technical data.</li>
            </ul>
            <p>These automatic data collection technologies help us improve our services, analyze user behavior, and enhance your user experience.</p>

            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li><strong className="text-primary">To Provide and Improve the Apps and Website:</strong> This includes operating, maintaining, and enhancing the Apps' and Website's features, processing payments, verifying identity, facilitating referral programs, and authenticating users through third-party services.</li>
              <li><strong className="text-primary">To Personalize User Experience:</strong> We use your information to customize the Apps' and Website's content and services according to your preferences, such as personalized recommendations.</li>
              <li><strong className="text-primary">To Communicate with You:</strong> This includes sending you transactional communications (such as payment receipts or account updates) and promotional communications (such as marketing emails or special offers). You can opt out of promotional communications at any time.</li>
              <li><strong className="text-primary">To Respond to User Inquiries and Support Requests:</strong> We use your information to respond to inquiries and provide customer support.</li>
              <li><strong className="text-primary">To Ensure Compliance and Security:</strong> We use your information to enforce our terms of use, privacy policy, and other policies, and to detect and prevent fraud or other unauthorized activities.</li>
              <li><strong className="text-primary">To Facilitate Referrals and Incentives:</strong> We may use your information to manage referral programs and associated incentives through third-party platforms.</li>
              <li><strong className="text-primary">To Analyze and Improve Services:</strong> We use the data collected to understand user behavior and improve our Apps' and Website's functionality and performance.</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your personal information in the following circumstances:</p>
            <ul>
              <li><strong className="text-primary">With Service Providers:</strong> We share your information with third-party service providers for specific purposes, including processing payments, verifying identity, generating OTPs for authentication, and facilitating referral programs. These third-party service providers have their own privacy policies, which apply to the data they collect. We encourage you to review their privacy policies.</li>
              <li><strong className="text-primary">For Business Transfers:</strong> If GroupFit Technologies Inc. undergoes a business transition such as a merger, acquisition, or sale of assets, your information may be part of the transferred assets. We will notify you if such events occur, and if required by law, give you an opportunity to opt-out.</li>
              <li><strong className="text-primary">For Legal Compliance:</strong> We may disclose your information in response to legal requirements, court orders, or to protect our rights or property. This includes cooperating with law enforcement agencies and regulatory authorities.</li>
              <li><strong className="text-primary">With Your Consent:</strong> We may share your information with other parties when you give us explicit permission to do so.</li>
            </ul>

            <h2>Data Security</h2>
            <p>We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. This includes the use of encryption, secure servers, and access controls. However, no security system is infallible. If you suspect any breach or unauthorized access to your data, please contact us immediately at <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline">legal@groupfitapp.com</a>.</p>

            <h2>Your Choices and Rights</h2>
            <p>You have rights regarding your personal information, including the right to:</p>
            <ul>
              <li>Access your personal information.</li>
              <li>Correct any inaccurate or incomplete information.</li>
              <li>Delete your personal information (subject to legal requirements).</li>
              <li>Object to certain processing activities.</li>
              <li>Withdraw your consent at any time, without affecting the legality of prior processing based on your consent.</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline">legal@groupfitapp.com</a>.</p>

            <h2>Retention of Personal Information</h2>
            <p>We retain your personal information for as long as needed to meet the purposes outlined in this policy or as required by law. When we no longer need to retain your personal information, we will securely delete or anonymize it.</p>

            <h2>Children Under the Age of 18</h2>
            <p>Our Apps and Website are not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected personal information from a child under 18, please contact us at <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline">legal@groupfitapp.com</a>, and we will take steps to delete such information.</p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>We use cookies and other tracking technologies to collect information about your interactions with our Apps and Website. You can adjust your browser or device settings to control the use of cookies, but some features may not function properly if cookies are disabled.</p>

            <h2>International Data Transfers</h2>
            <p>Your personal information may be transferred to, and processed in, countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our Apps and Website, you consent to such transfers. We will ensure that any international transfers of personal information are in compliance with applicable data protection laws.</p>

            <h2>Changes to this Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will take effect when we post the updated version on our Website. We encourage you to review this policy from time to time. If significant changes are made, we will notify you through our Apps, Website, or email.</p>

            <h2>Contact Information</h2>
            <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline">legal@groupfitapp.com</a>.</p>

            <h2>Consent</h2>
            <p>By using our Apps and Website, you signify your consent to the terms of this Privacy Policy. If you do not agree with this Privacy Policy, you should not use our Apps or Website.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
