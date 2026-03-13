import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import trainerTermsHero from "@/assets/heroes/trainer-terms-hero.jpg";
export default function AppTrainerTerms() {
  return <>
      <Helmet>
        <title>Group Fit Trainer Terms & Conditions | Group Fit</title>
        <meta name="description" content="Read the Terms and Conditions for using the Group Fit Trainer application. Learn about compensation, cancellation policies, and contractor obligations." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img src={trainerTermsHero} alt="Trainer Terms and Conditions" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Group Fit Trainer Terms & Conditions
            </h1>
            <p className="mt-4 text-white/70">Updated On: March 13, 2026</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto">
            <p className="text-muted-foreground leading-relaxed mb-6">
              These GroupFit Technologies, Inc. – Terms and Conditions – Canada ("Group Fit Terms" or this "Agreement") govern your access to and use of the Group Fit Trainer application and related websites, content, products, and services (collectively, the "Group Fit Services") made available by GroupFit Technologies, Inc. ("Group Fit", the "Company", "we", "us", or "our").
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">Scope of these Group Fit Terms</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">Group Fit provides a technology platform that enables independent trainers, coaches, and instructors to connect with clients for sport or physical activity instruction and coaching services (the "Services"). Group Fit Services do not include any transportation services and do not include the provision or supervision of the Services themselves.</p>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <p className="text-foreground font-semibold uppercase text-sm">PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING GROUP FIT SERVICES.</p>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-3">Parties</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              These Group Fit Trainer Terms and Conditions are a legally binding agreement between:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-6">
              <li><strong className="text-foreground">GroupFit Technologies Inc.</strong>, a company incorporated under the laws of the Province of Ontario; and</li>
              <li>Any individual who creates or uses a trainer account on the Group Fit Trainer application to provide sport or physical activity instruction and coaching services as an independent contractor (the "Contractor", "you", or "your").</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">Acceptance of this Agreement</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">By creating a trainer account, accessing or using Group Fit Trainer (the "App"), or offering any Services through the App, you confirm that you:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-6">
              <li>have read and understood this Agreement; and</li>
              <li>agree to be bound by this Agreement as a Contractor.</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">Relationship Between the Parties</h3>
            <p className="text-muted-foreground leading-relaxed mb-10">
              You acknowledge and agree that Group Fit provides a technology platform that enables you to connect with clients and does not employ you, supervise your sessions, control how you provide your Services, or attend your sessions. You are engaged as an independent contractor and are solely responsible for your own business, including your Services, conduct, safety, taxes, and compliance with all applicable laws.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">1.</span> General
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">1.1 Term of Agreement:</strong> Your provision of Services through the Group Fit platform begins upon your sign-up as a Contractor and continues until this Agreement is terminated in accordance with these terms. Certain provisions, by their nature, will survive termination as set out in this Agreement.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">2.</span> Services and Obligations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-primary">2.1 Scope of Services:</strong> You agree to provide sport or physical activity instruction and coaching services (the "Services") to clients who book you through the App. The Services may include personal training, coaching, or instructing individuals or groups at locations selected by the clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">2.2 Contractor Responsibilities:</strong> You are solely responsible for: (i) assessing the suitability of any environment where you provide Services; (ii) designing and delivering safe and appropriate sessions; (iii) complying with all applicable laws, regulations, and professional standards; and (iv) ensuring that your Services and any advice you provide are appropriate for each client's fitness level, health status, and limitations.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">3.</span> Time for Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You will devote such time and attention to the Services as may be agreed between you and the Company from time to time. Nothing in this Agreement prevents you from providing services to other clients or third parties, provided that you comply with this Agreement and your other activities do not create a conflict of interest.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">4.</span> Compensation
              </h2>

              <ul className="space-y-4">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">4.1 Standard Payment Terms:</strong> For standard paid sessions (excluding FREE Code Sessions described below), you will receive a commission equal to eighty percent (80%) of the gross listed session price for that activity as determined by the Company from time to time (the "Session Fee").
                  <p className="mt-2">For purposes of this Agreement:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>"Gross listed session price" means the publicly displayed price for the session at the time of booking, before any customer discounts, promotional codes, credits, or incentives are applied.</li>
                    <li>Your commission is calculated based on the gross listed session price and is not reduced by customer-facing discounts or promotional offers, unless expressly stated otherwise by the Company in writing.</li>
                    <li>Refunds, chargebacks, cancellations, or adjustments may reduce or reverse payable amounts.</li>
                  </ul>
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">4.2 FREE Code Sessions (New Customers Only):</strong> Group Fit may offer a "first session free" incentive to new customers on Group Fit through the discount code FREE (a "FREE Code Session").
                  <p className="mt-2">The FREE code:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>May be used only once per customer;</li>
                    <li>Applies only to the first session booked by that customer after signing up on Group Fit; and</li>
                    <li>Will not apply to any subsequent bookings, even if the customer books with a different trainer.</li>
                  </ul>
                  <p className="mt-2">A FREE Code Session is a customer acquisition incentive and is not a standard paid session.</p>
                  <p className="mt-2">No commission is payable for completion of a FREE Code Session itself.</p>
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">4.3 Trainer Bonus for FREE Code Customers:</strong> A Contractor may be eligible to receive up to thirty Canadian dollars (CAD $30) in total bonus payments in connection with a FREE Code Session, provided that the same customer completes paid sessions through the Group Fit platform.
                  <p className="mt-2">Unless otherwise specified by the Company in writing, the bonus will be released as follows:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>CAD $10 after the customer completes their first paid session;</li>
                    <li>CAD $10 after the customer completes their second paid session;</li>
                    <li>CAD $10 after the customer completes their third paid session.</li>
                  </ul>
                  <p className="mt-2">Bonus payments are earned only after the applicable paid sessions are completed (not merely booked). If the customer does not complete the required paid sessions, no bonus will be payable.</p>
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">4.4 FREE Code Conversion Eligibility:</strong> Eligibility to receive bonus payments in connection with FREE Code Sessions is conditional upon reasonable customer conversion.
                  <p className="mt-2">For purposes of this section:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>A "FREE Code Customer" means a customer who completes a FREE Code Session.</li>
                    <li>A "Qualifying Conversion" means completion of at least one (1) paid session by that same customer within sixty (60) days following the FREE Code Session.</li>
                  </ul>
                  <p className="mt-2">To remain eligible for bonus payments, a Contractor must maintain a minimum conversion ratio of at least one (1) Qualifying Conversion for every three (3) FREE Code Customers within any rolling sixty (60) day period.</p>
                  <p className="mt-2">If, during any rolling sixty (60) day period, the Contractor's conversion ratio falls below this threshold:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Group Fit may pause the Contractor's eligibility to receive bonus payments for new FREE Code Customers; and</li>
                    <li>Eligibility may be reinstated once the Contractor's conversion ratio returns to or exceeds the required threshold.</li>
                  </ul>
                  <p className="mt-2">This eligibility requirement does not affect commissions earned from standard paid sessions.</p>
                  <p className="mt-2">Group Fit reserves the right, acting reasonably, to apply and administer this eligibility standard based on session records maintained within the platform.</p>
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">4.5 GST/HST and Other Taxes:</strong> You are solely responsible for determining and complying with all tax obligations that may apply to you in connection with the Services and amounts you receive from the Company.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">4.6 Payment Schedule:</strong> The Company will make payments of your commissions and promotional payouts on a bi-monthly basis. Payments will be made within fifteen (15) days following the end of each bi-monthly period.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">4.7 Payment Method:</strong> Payment will be made to you via bank transfer or other electronic payment method using your payment details on file.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">5.</span> Cancellation Policy
              </h2>
              <ul className="space-y-4">
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">5.1 Trainer Cancellation Requests:</strong> You may request the cancellation of a booked session only by creating a support ticket through the Group Fit Helpdesk. This request should be made as soon as the need for cancellation arises.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">5.2 Trainer Cancellation Fee:</strong> If Group Fit approves your request to cancel a booked session, a cancellation fee equal to five percent (5%) of the session fee will be charged to you.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">5.3 Repeated Cancellations:</strong> Repeated cancellations may result in warnings, temporary suspension of your ability to offer Services, or permanent revocation of your access to the platform.
                </li>
                <li className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">5.4 Client Cancellations:</strong> Clients may cancel booked sessions in accordance with the client-facing Group Fit terms and policies.
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">6.</span> Expenses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-primary">6.1 Travel and Other Expenses:</strong> Any expenses related to travel to a client's location, equipment, supplies, licences, insurance, or other costs you incur in connection with the Services are solely your responsibility. Group Fit has no obligation to reimburse any such expenses unless expressly agreed in writing in advance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">6.2 Expense Tracking:</strong> You are responsible for maintaining your own records of any expenses you incur and for handling any related tax or accounting matters.
              </p>
            </div>

            {/* Section 7-9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">7.</span> Licences and Permits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-primary">7.1 Licence to Group Fit:</strong> You grant Group Fit a non-exclusive, royalty-free, worldwide licence to use, reproduce, modify, publish, display, and distribute your profile information, images, and any content you submit in connection with your use of the App.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">7.2 Regulatory and Professional Requirements:</strong> You are solely responsible for obtaining and maintaining any registrations, licences, permits, certifications, or other approvals required to legally provide the Services.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">8.</span> Rules and Regulations
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You must comply with all rules, policies, and guidelines of Group Fit that are communicated to you from time to time, as well as all applicable laws, by-laws, regulations, and professional standards in relation to the Services.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">9.</span> Insurance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Group Fit does not provide or arrange insurance for you. You are solely responsible for determining whether you require insurance and for obtaining and maintaining any insurance coverage you consider appropriate (including commercial general liability and professional liability insurance) at your own cost.
              </p>
            </div>

            {/* Section 10-12 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">10.</span> Indemnity
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Group Fit, its affiliates, and their respective officers, directors, employees, agents, and representatives from and against any and all claims, demands, liabilities, damages, losses, costs, and expenses arising out of or related to your provision of the Services, your use of the Group Fit Services, your breach of this Agreement, or your failure to comply with any tax obligations.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">11.</span> Service Delivery and Availability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You must provide the Services in a professional, courteous, and safe manner; arrive on time; maintain accurate availability in the App; and follow reasonable instructions and quality standards communicated by Group Fit from time to time.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">12.</span> Contractor Not an Employee
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You are an independent contractor and not an employee, partner, joint venturer, or agent of Group Fit. Nothing in this Agreement creates an employment relationship. You are not entitled to any employment-related benefits from Group Fit.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">14.</span> Non-Circumvention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                During the term of this Agreement and for twelve (12) months following the last session you provide to a particular client through the App, you will not, directly or indirectly, solicit or accept business from that client (or their household or private group) for services that are the same as or similar to the Services, in any way that bypasses the Group Fit platform.
              </p>
            </div>

            {/* Disclaimers and Liability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">24.</span> Disclaimers
              </h2>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-foreground text-sm uppercase leading-relaxed">
                  THE GROUP FIT SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." GROUP FIT AND ITS AFFILIATES DISCLAIM ALL REPRESENTATIONS, WARRANTIES, AND CONDITIONS, EXPRESS, IMPLIED, OR STATUTORY, NOT EXPRESSLY SET OUT IN THIS AGREEMENT. GROUP FIT DOES NOT GUARANTEE THE AVAILABILITY, QUALITY, SUITABILITY, SAFETY, OR ABILITY OF ANY CLIENT OR THIRD PARTY.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">25.</span> Limitation of Liability
              </h2>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-foreground text-sm uppercase leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL GROUP FIT OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT.
                </p>
              </div>
            </div>

            {/* Governing Law and Dispute Resolution */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">26.</span> Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This Agreement is governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">27.</span> Dispute Resolution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless prohibited by law, any dispute arising out of or relating to this Agreement or your use of the Group Fit Services will be resolved by binding arbitration in accordance with the Arbitration Rules of the ADR Institute of Canada, Inc. ("ADRIC"). Before starting arbitration, the parties will attempt in good faith to resolve the dispute informally for at least thirty (30) days.
              </p>
            </div>

            {/* Notices and Application Usage */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">28.</span> Notices
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Group Fit may provide notices to you by email to the address associated with your Account, through the App, or by any other reasonable means. You may provide notices to Group Fit by email at{" "}
                <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline font-medium">
                  legal@groupfitapp.com
                </a>.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-primary">30.</span> Application Usage
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This Agreement remains in effect for as long as you have an active Account or continue to use the Group Fit Services as a Contractor. If you wish to stop being a Contractor, you must cease using the App and delete or deactivate your Account. Group Fit may suspend or terminate your access to the App at any time in accordance with this Agreement.
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
    </>;
}
