import React from "react";
import LegalPageLayout, { LegalSection, BLUE } from "./LegalPageLayout";

const TermsOfService = () => {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="The terms and conditions governing your use of the TrueValue Groups website."
      lastUpdated="June 21, 2026"
    >
      <p>
        These Terms of Service ("Terms") govern your use of the TrueValue Groups website and any
        inquiries, bookings, or communications you make with us through it. By accessing or using
        this website, you agree to be bound by these Terms. If you do not agree, please do not
        use this website.
      </p>

      <LegalSection title="1. About TrueValue Groups">
        <p>
          TrueValue Groups is a real estate development and promotion business based in Mysuru,
          Karnataka, offering MUDA and RERA approved residential plots across locations including
          Bannur Road, Bogadi Road, Yelawala, Nanjangud Road, and Jettihundi.
        </p>
      </LegalSection>

      <LegalSection title="2. Use of This Website">
        <ul className="list-disc ml-6 space-y-2">
          <li>You agree to use this website only for lawful purposes related to genuinely exploring or inquiring about our properties.</li>
          <li>You must not attempt to copy, scrape, reverse-engineer, or misuse any part of this website or its content.</li>
          <li>You must not submit false, misleading, or fraudulent information through our inquiry, contact, or callback forms.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Property Information & Listings">
        <p>
          While we make every effort to keep project details, plot sizes, pricing indications,
          amenities, and approval statuses (MUDA/RERA) accurate and up to date, this information
          is provided for general guidance only and does not constitute a legal offer or contract.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Layouts, images, and amenities shown may differ slightly from the final developed site.</li>
          <li>Plot availability, pricing, and loan eligibility are subject to change without prior notice and must be confirmed directly with our sales team.</li>
          <li>RERA registration numbers, where displayed, should be independently verified on the official Karnataka RERA portal before making any commitment.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Bookings, Payments & Cancellations">
        <p>
          Any booking of a plot, payment of token amount, or execution of a sale agreement is
          governed by a separate, formal agreement signed between TrueValue Groups and the buyer.
          These Terms do not themselves create any reservation, sale, or refund obligation —
          specific booking and cancellation terms will be set out in that agreement.
        </p>
      </LegalSection>

      <LegalSection title="5. Intellectual Property">
        <p>
          All content on this website — including text, layouts, logos, photographs, and graphics
          — is the property of TrueValue Groups or its licensors and is protected by applicable
          intellectual property laws. You may not reproduce or redistribute this content without
          our prior written consent.
        </p>
      </LegalSection>

      <LegalSection title="6. Third-Party Links & Services">
        <p>
          Our website may link to third-party services such as WhatsApp, Google Maps, or social
          media platforms. We are not responsible for the content, accuracy, or practices of these
          third-party services.
        </p>
      </LegalSection>

      <LegalSection title="7. Limitation of Liability">
        <p>
          TrueValue Groups will not be liable for any indirect, incidental, or consequential loss
          arising from your use of this website or reliance on information published on it. All
          property-related decisions should be made after independent verification and, where
          appropriate, professional legal advice.
        </p>
      </LegalSection>

      <LegalSection title="8. Governing Law">
        <p>
          These Terms are governed by the laws of India, and any disputes arising from your use
          of this website will be subject to the exclusive jurisdiction of the courts in Mysuru,
          Karnataka.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to These Terms">
        <p>
          We may revise these Terms from time to time. Continued use of the website after changes
          are posted constitutes your acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <p>For any questions regarding these Terms, please contact:</p>
        <p className="mt-2">
          <strong>TrueValue Groups</strong>
          <br />
          11203, Devasya House, 4th Stage 2nd Phase, Vijayanagara, Mysuru, Karnataka – 570017
          <br />
          Email:{" "}
          <a href="mailto:Truevaluegroups1@gmail.com" className="font-semibold hover:underline" style={{ color: BLUE }}>
            Truevaluegroups1@gmail.com
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+918431263217" className="font-semibold hover:underline" style={{ color: BLUE }}>
            +91 8431263217
          </a>
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default TermsOfService;