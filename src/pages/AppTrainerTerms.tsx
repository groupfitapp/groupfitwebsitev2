import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function AppTrainerTerms() {
  return (
    <>
      <Helmet>
        <title>App Trainer Terms and Conditions | Group Fit</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for using the Group Fit Trainer application."
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
              App Trainer Terms and Conditions
            </h1>
            <p className="mt-4 text-white/70">Updated On: January 7, 2026</p>
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
              These GroupFit Technologies, Inc. – Terms and Conditions – Canada ("Group Fit Terms" or this "Agreement") govern your access to and use of the Group Fit Trainer application and related websites, content, products, and services (collectively, the "Group Fit Services") made available by GroupFit Technologies, Inc. ("Group Fit", the "Company", "we", "us", or "our").
            </p>

            <h3>Scope of these Group Fit Terms</h3>
            <p>
              Group Fit provides a technology platform that enables independent trainers, coaches, and instructors to connect with clients for sport or physical activity instruction and coaching services (the "Services"). The Group Fit Services provided by Group Fit under these Group Fit Terms do not include any transportation services and do not include the provision or supervision of the Services themselves.
            </p>

            <p className="font-bold uppercase">
              PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE GROUP FIT SERVICES.
            </p>

            <h3>Parties</h3>
            <p>These Group Fit Trainer Terms and Conditions are a legally binding agreement between:</p>
            <ul>
              <li><strong>GroupFit Technologies Inc.</strong>, a company incorporated under the laws of the Province of Ontario ("Group Fit", "we", "us", or "our"); and</li>
              <li>Any individual who creates or uses a trainer account on the Group Fit Trainer application (the "App") to provide sport or physical activity instruction and coaching services as an independent contractor (the "Contractor", "you", or "your").</li>
            </ul>

            <h3>Acceptance of this Agreement</h3>
            <p>By creating a trainer account, accessing or using the App, or offering any Services through Group Fit, you confirm that you:</p>
            <ul>
              <li>have read and understood this Agreement; and</li>
              <li>agree to be bound by this Agreement as a Contractor.</li>
            </ul>

            <h3>Relationship Between the Parties</h3>
            <p>You acknowledge and agree that:</p>
            <ul>
              <li>Group Fit provides a technology platform that enables you to connect with clients and does not employ you, supervise your sessions, control how you provide your Services, or attend your sessions; and</li>
              <li>you are engaged as an independent contractor and are solely responsible for your own business, including your Services, conduct, safety, taxes, and compliance with all applicable laws.</li>
            </ul>

            <h2>1. General</h2>
            <h3>Term of Agreement</h3>
            <p>Your provision of Services through the Group Fit platform begins upon your sign-up as a Contractor and continues until this Agreement is terminated in accordance with these terms.</p>

            <h2>2. Services and Obligations</h2>
            <p><strong className="text-primary">Scope of Services:</strong> You agree to provide sport or physical activity instruction and coaching services (the "Services") to clients who book you through the App.</p>
            <p>You are solely responsible for: (i) assessing the suitability of any environment where you provide Services; (ii) designing and delivering safe and appropriate sessions; (iii) complying with all applicable laws, regulations, and professional standards; and (iv) ensuring that your Services and any advice you provide are appropriate for each client's fitness level, health status, and limitations.</p>

            <h2>3. Time for Services</h2>
            <p>You will devote such time and attention to the Services as may be agreed between you and the Company from time to time. Nothing in this Agreement prevents you from providing services to other clients or third parties.</p>

            <h2>4. Compensation</h2>
            <p><strong className="text-primary">Standard Payment Terms:</strong> For standard, non-promotional paid sessions, you will receive a commission equal to ninety-three percent (93%) of the applicable session fee for that activity as determined by the Company from time to time (the "Session Fee"), excluding any refunds, chargebacks, or adjustments.</p>
            <p><strong className="text-primary">Promotional or Free Sessions:</strong> For each "first session free" or similar promotion that is completed, you will receive a fixed promotional payout of thirty Canadian dollars (CAD $30) per completed Free Session.</p>
            <p><strong className="text-primary">Payment Schedule:</strong> The Company will make payments of your commissions and promotional payouts on a bi-monthly basis. Payments will be made within fifteen (15) days following the end of each bi-monthly period.</p>

            <h2>5. Cancellation Policy</h2>
            <p><strong className="text-primary">Trainer Cancellation Requests:</strong> You may request the cancellation of a booked session only by creating a support ticket through the Group Fit Helpdesk.</p>
            <p><strong className="text-primary">Trainer Cancellation Fee:</strong> If Group Fit approves your request to cancel a booked session, a cancellation fee equal to five percent (5%) of the session fee will be charged to you.</p>
            <p><strong className="text-primary">Repeated Cancellations:</strong> Repeated cancellations may result in warnings, temporary suspension, or permanent revocation of your access to the platform.</p>

            <h2>6. Expenses</h2>
            <p>Any expenses related to travel to a client's location, equipment, supplies, licences, insurance, or other costs you incur in connection with the Services are solely your responsibility. Group Fit has no obligation to reimburse any such expenses unless expressly agreed in writing in advance.</p>

            <h2>7. Licences and Permits</h2>
            <p>You grant Group Fit a non-exclusive, royalty-free, worldwide licence to use, reproduce, modify, publish, display, and distribute your profile information, images, and any content you submit in connection with your use of the App.</p>

            <h2>8. Rules and Regulations</h2>
            <p>You must comply with all rules, policies, and guidelines of Group Fit that are communicated to you from time to time, as well as all applicable laws, by-laws, regulations, and professional standards in relation to the Services.</p>

            <h2>9. Insurance</h2>
            <p>Group Fit does not provide or arrange insurance for you. You are solely responsible for determining whether you require insurance and for obtaining and maintaining any insurance coverage you consider appropriate at your own cost.</p>

            <h2>10. Indemnity</h2>
            <p>You agree to indemnify, defend, and hold harmless Group Fit, its affiliates, and their respective officers, directors, employees, agents, and representatives from and against any and all claims, demands, liabilities, damages, losses, costs, and expenses arising out of or related to your provision of the Services.</p>

            <h2>12. Contractor Not an Employee</h2>
            <p>You are an independent contractor and not an employee, partner, joint venturer, or agent of Group Fit. Nothing in this Agreement creates an employment relationship. You are not entitled to any employment-related benefits from Group Fit.</p>

            <h2>14. Non-Circumvention</h2>
            <p>During the term of this Agreement and for twelve (12) months following the last session you provide to a particular client through the App, you will not, directly or indirectly, solicit or accept business from that client in any way that bypasses the Group Fit platform.</p>

            <h2>24. Disclaimers</h2>
            <p>THE GROUP FIT SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." GROUP FIT AND ITS AFFILIATES DISCLAIM ALL REPRESENTATIONS, WARRANTIES, AND CONDITIONS, EXPRESS, IMPLIED, OR STATUTORY.</p>

            <h2>25. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL GROUP FIT OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT.</p>

            <h2>26. Governing Law</h2>
            <p>This Agreement is governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.</p>

            <h2>27. Dispute Resolution</h2>
            <p>Unless prohibited by law, any dispute arising out of or relating to this Agreement or your use of the Group Fit Services will be resolved by binding arbitration in accordance with the Arbitration Rules of the ADR Institute of Canada, Inc. ("ADRIC").</p>

            <h2>28. Notices</h2>
            <p>Group Fit may provide notices to you by email to the address associated with your Account, through the App, or by any other reasonable means. You may provide notices to Group Fit by email at <a href="mailto:legal@groupfitapp.com" className="text-primary hover:underline">legal@groupfitapp.com</a>.</p>

            <h2>30. Application Usage</h2>
            <p>This Agreement remains in effect for as long as you have an active Account or continue to use the Group Fit Services as a Contractor. If you wish to stop being a Contractor, you must cease using the App and delete or deactivate your Account.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
