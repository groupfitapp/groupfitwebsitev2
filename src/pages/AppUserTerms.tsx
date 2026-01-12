import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function AppUserTerms() {
  return (
    <>
      <Helmet>
        <title>App User Terms and Conditions | Group Fit</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for using the Group Fit customer application. Learn about booking, payments, cancellations, and your rights."
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
            className="max-w-3xl mx-auto"
          >
            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">1.</span> Contractual Relationship
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These GroupFit Technologies, Inc. – Terms and Conditions – Canada ("Group Fit Terms") govern the access or use by you, an individual, from within any country in the world of any platform, applications, websites, content, products, and services (the "Group Fit Services") made available by GroupFit Technologies, Inc.
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Scope of these Group Fit Terms:</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Group Fit Services may be provided by Group Fit or, if specified in these Group Fit Terms or any supplemental terms, affiliates of Group Fit. However, the Group Fit Services provided by Group Fit under these Group Fit Terms do not include any transportation services.
              </p>

              <div className="bg-muted p-4 rounded-lg my-6">
                <p className="text-foreground font-semibold uppercase text-sm">
                  PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE GROUP FIT SERVICES.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                You may accept these terms by clicking a box or by using or placing an order using a Group Fit branded application or website or by otherwise affirmatively indicating your acceptance and subsequently, by continuing to access and use the Group Fit Services, you agree to be bound by these Group Fit Terms, as may be amended from time to time, which establishes a contractual relationship between you and Group Fit.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Amendments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Group Fit may amend the Group Fit Terms, any supplemental terms or policies related to the Group Fit Services from time to time. Group Fit will provide you with notice in the event of a material change to any Group Fit Terms, policies or supplemental terms that detrimentally affects your rights under these Group Fit Terms.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">2.</span> The Group Fit Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Group Fit Services constitute the provision of a technology platform that enables you, as a user of Group Fit's applications or websites to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-4">
                <li>Arrange and schedule fitness, sport, or physical activity instruction and coaching sessions with independent trainers (each, a "Third Party Provider")</li>
                <li>Process payments for sessions booked through the Group Fit Services</li>
                <li>Access related content or services including customer support</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Licence</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Subject to your compliance with these Group Fit Terms, Group Fit grants you a limited, non-exclusive, non-sublicensable, revocable, non-transferable licence to access and use the Applications on your personal device solely in connection with your use of the Group Fit Services.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Restrictions</h3>
              <p className="text-muted-foreground leading-relaxed">
                You may not: (i) remove any copyright, trade mark or other proprietary notices; (ii) reproduce, modify, distribute, licence, lease, sell, resell, or transfer the Group Fit Services; (iii) decompile, reverse engineer or disassemble the Group Fit Services except as may be permitted by applicable law; (iv) link to, mirror or frame any portion of the Group Fit Services.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">3.</span> Your Use Of The Group Fit Services
              </h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">User Accounts</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In order to use most aspects of the Group Fit Services, you must register for and maintain an active personal user Group Fit Services account ("Account"). You must be at least 18 years of age, or the age of legal majority in your jurisdiction (if different than 18), to obtain an Account.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">User Requirements and Conduct</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Group Fit Services are not available for use by persons under the age of 18. You may not allow persons under the age of 18 to receive physical exercise and training services from Third Party Providers unless they are accompanied by you and you agree to take full responsibility for their acts or omissions.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Health and Physical Condition; No Guarantee of Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                You understand that physical exercise and training activities involve inherent risks, including the risk of serious injury or death. By booking or participating in any session, you represent and warrant that: (i) you are in a suitable physical condition to participate; (ii) you have consulted with a physician or have voluntarily chosen not to do so; and (iii) you will immediately stop participating and seek medical attention if you experience any concerning symptoms.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">4.</span> Payment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You acknowledge that the use of the Group Fit Services may result in charges for sessions booked through the platform ("Charges"). Group Fit sets the session prices and any applicable fees, and may change pricing from time to time in its discretion.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Charges are due at the time of booking unless Group Fit states otherwise. Charges will include the session price, applicable taxes (including GST/HST where required), and any other fees or adjustments disclosed to you at checkout.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Chargebacks and Payment Disputes</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you dispute a charge directly with your payment provider (a "Chargeback"), Group Fit may temporarily suspend your Account while the Chargeback is investigated. Group Fit reserves the right to provide evidence to your payment provider and recover any amounts credited in error.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">5.</span> Cancellations
              </h2>
              <ul className="space-y-4">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Cancellation and Rescheduling Period:</strong> You may cancel or reschedule a booked session through the Group Fit app. You may cancel a session without incurring any charges if the cancellation is made at least 2 hours before the scheduled start time.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Refund for Timely Cancellations:</strong> If you cancel a booked session 2 hours before the scheduled time, the entire fee for the session will be refunded.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Late Cancellation Charges:</strong> If you cancel a booked session within 2 hours of the scheduled start time, a cancellation fee equal to 15% of the session fee will be charged.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Rescheduling Sessions:</strong> You may reschedule a session at any time without incurring any fees.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">Refund for Third Party Provider No-Show:</strong> If a Third Party Provider fails to show up, you may request a refund by creating a support ticket within 48 hours of the booked session time.
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">6.</span> Disclaimers; Limitation Of Liability; Indemnity
              </h2>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Disclaimers</h3>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-foreground text-sm uppercase leading-relaxed">
                  THE GROUP FIT SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE". GROUP FIT AND ITS AFFILIATES DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, NOT EXPRESSLY SET OUT IN THESE GROUP FIT TERMS.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Limitation of Liability</h3>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-foreground text-sm uppercase leading-relaxed">
                  GROUP FIT AND ITS AFFILIATES SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR CONSEQUENTIAL DAMAGES. IN NO EVENT SHALL GROUP FIT'S TOTAL LIABILITY EXCEED FIVE HUNDRED CANADIAN DOLLARS (CAD $500).
                </p>
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Indemnity</h3>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold Group Fit and its affiliates harmless from any and all claims, demands, losses, liabilities, and expenses arising out of or in connection with your use of the Group Fit Services.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">7.</span> Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                These Group Fit Terms shall be exclusively governed by and construed in accordance with the laws of the province of Ontario, or Quebec if you are a Quebec resident, and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">8.</span> Dispute Resolution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless prohibited by law, all disputes arising out of or relating to these Group Fit Terms will be finally and conclusively adjudicated and resolved by arbitration under the Arbitration Rules of the ADR Institute of Canada, Inc. ("ADRIC").
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Before beginning the arbitration, the party with the claim will first try to informally negotiate with the other party, in good faith, a resolution of the dispute for not less than 30 days but no more than 45 days unless extended by agreement.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">9.</span> Other Provisions
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may not assign or transfer these Group Fit Terms in whole or in part without Group Fit's prior written approval. These Group Fit Terms, including any incorporated policies, constitute the entire agreement and understanding of the parties with respect to its subject matter.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Survival</h3>
              <p className="text-muted-foreground leading-relaxed">
                Termination of your Account or cessation of your use of the Group Fit Services does not affect any provisions of these Group Fit Terms which are expressly or by their nature intended to continue in force after such termination.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">10.</span> Application Usage
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This Agreement shall be effective for the duration of your active use of the Group Fit app and platform. In the event of any disputes or differences between you and the Company, you agree to promptly cease using the Group Fit app, erase your profile from the platform, and delete the application from your mobile device.
              </p>
            </div>

            {/* Contact */}
            <div className="p-6 bg-muted rounded-xl">
              <p className="text-foreground leading-relaxed">
                For questions about these terms, contact us at{" "}
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
