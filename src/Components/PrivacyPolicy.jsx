import React from "react";
import LegalPageLayout, { LegalSection, BLUE } from "./LegalPageLayout";

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How TrueValue Groups collects, uses, and protects your information."
      lastUpdated="June 21, 2026"
    >
      <p>
        Welcome to <strong>TrueValue Groups</strong> ("we," "our," or "us"). Your privacy is
        important to us. This Privacy Policy explains how we collect, use, and protect your
        information when you visit our website or engage with our real estate services across
        Mysore.
      </p>

      <LegalSection title="1. Information We Collect">
        <p>We may collect the following types of information:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number, and any details
            you share with us via inquiry forms, the Contact page, WhatsApp, or phone calls.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, device details, IP address,
            pages visited, and cookies used for analytics and performance improvements.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <ul className="list-disc ml-6 space-y-2">
          <li>To respond to property inquiries and schedule site visits.</li>
          <li>To provide updates on our ongoing and upcoming projects (My Nagar, JJ Enclave, Vaishakh Lake View, Shivam Layout, Vanasiri, and future developments).</li>
          <li>To improve website performance and enhance user experience.</li>
          <li>To send promotional updates, only if you have opted in.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Data Protection & Security">
        <p>
          We implement reasonable security measures to protect your personal information.
          However, please note that no online data transmission or storage system is 100%
          secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="4. Sharing of Information">
        <p>We do not sell, rent, or trade your personal data. We may share it only with:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Trusted partners who assist us with project management, marketing, or communication on our behalf.</li>
          <li>Legal authorities, where required by law or to protect our legal rights.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Use of Cookies">
        <p>
          Our website uses cookies to enhance your browsing experience and analyze site traffic.
          You can disable cookies in your browser settings at any time. For more detail, see our{" "}
          <a href="/cookie-policy" className="font-semibold hover:underline" style={{ color: BLUE }}>
            Cookie Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Third-Party Links">
        <p>
          Our website may contain links to external sites (such as social media or map services).
          We are not responsible for the content or privacy practices of those websites — please
          review their respective privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights & Choices">
        <p>
          You may request access, correction, or deletion of your personal data by contacting us
          at{" "}
          <a href="mailto:Truevaluegroups1@gmail.com" className="font-semibold hover:underline" style={{ color: BLUE }}>
            Truevaluegroups1@gmail.com
          </a>
          . You can also opt out of promotional communications at any time.
        </p>
      </LegalSection>

      <LegalSection title="8. Updates to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with a revised "Last Updated" date.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <p>For any questions about this Privacy Policy or our data practices, please contact:</p>
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

export default PrivacyPolicy;