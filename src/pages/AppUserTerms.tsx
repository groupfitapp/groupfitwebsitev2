import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function AppUserTerms() {
  return (
    <>
      <Helmet>
        <title>App User Terms and Conditions | Group Fit</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for using the Group Fit customer application."
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
              App User Terms and Conditions
            </h1>
            <p className="mt-4 text-white/70">Updated on: January 7, 2026</p>
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
            <h2>1. Contractual Relationship</h2>
            <p>
              These GroupFit Technologies, Inc. – Terms and Conditions – Canada ("Group Fit Terms") govern the access or use by you, an individual, from within any country in the world of any platform, applications, websites, content, products, and services (the "Group Fit Services") made available by GroupFit Technologies, Inc.
            </p>

            <h3>Scope of these Group Fit Terms:</h3>
            <p>
              Group Fit Services may be provided by Group Fit or, if specified in these Group Fit Terms or any supplemental terms, affiliates of Group Fit. However, the Group Fit Services provided by Group Fit under these Group Fit Terms do not include any transportation services.
            </p>

            <p className="font-bold uppercase">
              PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE GROUP FIT SERVICES.
            </p>

            <p>
              You may accept these terms by clicking a box or by using or placing an order using a Group Fit branded application or website or by otherwise affirmatively indicating your acceptance and subsequently, by continuing to access and use the Group Fit Services, you agree to be bound by these Group Fit Terms, as may be amended from time to time, which establishes a contractual relationship between you and Group Fit. If you do not agree to these Group Fit Terms, at any time, you agree not to access or use the Group Fit Services.
            </p>

            <h3>Amendments</h3>
            <p>
              Group Fit may amend the Group Fit Terms, any supplemental terms or policies (including the Community Guidelines) related to the Group Fit Services from time to time. Group Fit will provide you with notice in the event of a material change to any Group Fit Terms, policies or supplemental terms that detrimentally affects your rights under these Group Fit Terms.
            </p>

            <h2>2. The Group Fit Services</h2>
            <p>
              Group Fit will provide the Group Fit Services to you in accordance with these Group Fit Terms. The Group Fit Services constitute the provision of a technology platform that enables you, as a user of Group Fit's applications or websites (each, an "Application") to: (a) arrange and schedule fitness, sport, or physical activity instruction and coaching sessions with independent trainers, coaches, and instructors that have an agreement with Group Fit (each, a "Third Party Provider"); (b) process payments for sessions booked through the Group Fit Services; and (c) provide related content or services including customer support.
            </p>

            <h3>Licence</h3>
            <p>
              Subject to your compliance with these Group Fit Terms, Group Fit grants you a limited, non-exclusive, non-sublicensable, revocable, non-transferable licence to: (i) access and use the Applications on your personal device solely in connection with your use of the Group Fit Services; and (ii) access and use any content, information and related materials that may be made available through the Group Fit Services.
            </p>

            <h3>Restrictions</h3>
            <p>
              You may not: (i) remove any copyright, trade mark or other proprietary notices from any portion of the Group Fit Services; (ii) reproduce, modify, prepare derivative works based upon, distribute, licence, lease, sell, resell, transfer, publicly display, publicly perform, transmit, stream, broadcast or otherwise exploit the Group Fit Services except as expressly permitted by Group Fit; (iii) decompile, reverse engineer or disassemble the Group Fit Services except as may be permitted by applicable law.
            </p>

            <h2>3. Your Use Of The Group Fit Services</h2>

            <h3>User Accounts</h3>
            <p>
              In order to use most aspects of the Group Fit Services, you must register for and maintain an active personal user Group Fit Services account ("Account"). You must be at least 18 years of age, or the age of legal majority in your jurisdiction (if different than 18), to obtain an Account.
            </p>

            <h3>User Requirements and Conduct</h3>
            <p>
              The Group Fit Services are not available for use by persons under the age of 18. You may not authorise third parties to use your Account, and you may not allow persons under the age of 18 to receive physical exercise and training services from Third Party Providers unless they are accompanied by you and you agree to take full responsibility for their acts or omissions.
            </p>

            <h3>Health and Physical Condition</h3>
            <p>
              You understand that physical exercise and training activities involve inherent risks, including the risk of serious injury or death. By booking or participating in any session arranged through the Group Fit Services, you represent and warrant that: (i) you are in a suitable physical condition to participate in such activities; (ii) you have consulted with a physician or other appropriate healthcare professional about your participation, or have voluntarily chosen not to do so; and (iii) you will immediately stop participating and seek medical attention if you experience any pain, dizziness, shortness of breath, or other concerning symptoms.
            </p>

            <h2>4. Payment</h2>
            <p>
              You acknowledge that the use of the Group Fit Services may result in charges for sessions booked through the platform ("Charges"). Group Fit sets the session prices and any applicable fees, and may change pricing from time to time in its discretion.
            </p>
            <p>
              Charges are due at the time of booking unless Group Fit states otherwise. Charges will include the session price, applicable taxes (including GST/HST where required), and any other fees or adjustments disclosed to you at checkout or in the booking flow.
            </p>

            <h2>5. Cancellations</h2>
            <p><strong className="text-primary">Cancellation and Rescheduling Period:</strong> You are allowed to cancel or reschedule a booked session through the Group Fit app. You may cancel a session without incurring any charges if the cancellation is made at least 2 hours before the scheduled start time of the session.</p>
            <p><strong className="text-primary">Refund for Timely Cancellations:</strong> If you cancel a booked session 2 hours before the scheduled time, the entire fee for the session will be refunded.</p>
            <p><strong className="text-primary">Late Cancellation Charges:</strong> If you cancel a booked session within 2 hours of the scheduled start time, a cancellation fee equal to 15% of the session fee will be charged.</p>
            <p><strong className="text-primary">Rescheduling Sessions:</strong> You may reschedule a session at any time without incurring any fees.</p>

            <h2>6. Disclaimers; Limitation Of Liability; Indemnity</h2>
            <p>
              THE GROUP FIT SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE". GROUP FIT AND ITS AFFILIATES DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, NOT EXPRESSLY SET OUT IN THESE GROUP FIT TERMS.
            </p>
            <p>
              GROUP FIT AND ITS AFFILIATES SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOST DATA, PERSONAL INJURY OR PROPERTY DAMAGE RELATED TO, IN CONNECTION WITH, OR OTHERWISE RESULTING FROM ANY USE OF THE SERVICES.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Group Fit Terms shall be exclusively governed by and construed in accordance with the laws of the province of Ontario, or Quebec if you are a Quebec resident, and the federal laws of Canada applicable therein, without regard to conflict of law principles.
            </p>

            <h2>8. Dispute Resolution</h2>
            <p>
              Unless prohibited by law, all disputes arising out of or relating to these Group Fit Terms will be finally and conclusively adjudicated and resolved by arbitration under the Arbitration Rules ("ADRIC Rules") of the ADR Institute of Canada, Inc. ("ADRIC"), except as modified here.
            </p>

            <h2>9. Other Provisions</h2>
            <p>
              You may not assign or transfer these Group Fit Terms in whole or in part without Group Fit's prior written approval. These Group Fit Terms, including any incorporated policies, constitute the entire agreement and understanding of the parties with respect to its subject matter.
            </p>

            <h2>10. Application Usage</h2>
            <p>
              This Agreement shall be effective for the duration of your active use of the Group Fit app and platform. In the event of any disputes or differences between you and the Company, you agree to promptly cease using the Group Fit app, erase your profile from the platform, and delete the application from your mobile device.
            </p>

            <p className="mt-8">
              For questions about these terms, contact us at <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline">legal@groupfitapp.com</a>.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
