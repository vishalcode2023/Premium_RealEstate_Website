import React from "react";
import LegalPageLayout, { LegalSection, BLUE } from "./LegalPageLayout";

const cookieTypes = [
  {
    type: "Essential Cookies",
    purpose: "Required for core site functionality, such as navigation and loading pages correctly. The site cannot function properly without these.",
  },
  {
    type: "Performance & Analytics Cookies",
    purpose: "Help us understand how visitors use our website (e.g. which pages and projects are most viewed) so we can improve content and performance.",
  },
  {
    type: "Functionality Cookies",
    purpose: "Remember choices you make (such as a selected project filter) to provide a more personalized experience on return visits.",
  },
  {
    type: "Third-Party Cookies",
    purpose: "Set by services we embed, such as Google Fonts, Font Awesome, and WhatsApp chat — these are subject to the respective third party's own cookie policy.",
  },
];

const CookiePolicy = () => {
  return (
    <LegalPageLayout
      title="Cookie Policy"
      subtitle="How TrueValue Groups uses cookies on this website."
      lastUpdated="June 21, 2026"
    >
      <p>
        This Cookie Policy explains what cookies are, how <strong>TrueValue Groups</strong> uses
        them on this website, and how you can control them. It should be read alongside our{" "}
        <a href="/privacy" className="font-semibold hover:underline" style={{ color: BLUE }}>
          Privacy Policy
        </a>
        .
      </p>

      <LegalSection title="1. What Are Cookies?">
        <p>
          Cookies are small text files placed on your device when you visit a website. They are
          widely used to make websites work efficiently, remember your preferences, and provide
          information to site owners about how their website is used.
        </p>
      </LegalSection>

      <LegalSection title="2. Types of Cookies We Use">
        <div className="space-y-4">
          {cookieTypes.map((c, i) => (
            <div key={i} className="border-l-4 pl-4" style={{ borderColor: BLUE }}>
              <p className="font-semibold" style={{ color: "#1F2937" }}>{c.type}</p>
              <p className="text-sm md:text-base mt-1">{c.purpose}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="3. Why We Use Cookies">
        <ul className="list-disc ml-6 space-y-2">
          <li>To ensure our website loads and functions correctly across devices.</li>
          <li>To understand which projects and pages visitors are most interested in.</li>
          <li>To improve the speed, design, and overall experience of the site over time.</li>
          <li>To support embedded third-party tools like fonts, icons, and chat widgets.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Managing Your Cookie Preferences">
        <p>
          Most web browsers allow you to control cookies through their settings. You can usually:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>View what cookies are stored and delete them individually.</li>
          <li>Block third-party cookies.</li>
          <li>Block cookies from particular sites.</li>
          <li>Block all cookies from being set.</li>
          <li>Delete all cookies when you close your browser.</li>
        </ul>
        <p>
          Please note that if you disable cookies entirely, some parts of this website may not
          function as intended.
        </p>
      </LegalSection>

      <LegalSection title="5. Changes to This Cookie Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in the cookies we
          use or for legal/regulatory reasons. Please revisit this page periodically to stay
          informed.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact Us">
        <p>If you have questions about our use of cookies, please contact:</p>
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

export default CookiePolicy;