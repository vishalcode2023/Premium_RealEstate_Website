import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-[#1D293D] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 text-center mb-12">
          Effective Date: October 16, 2025
        </p>

        <section className="space-y-6">
          <p>
            Welcome to <strong>SVP Developers & Promoters</strong> (“we,”
            “our,” or “us”). Your privacy is important to us. This Privacy
            Policy explains how we collect, use, and protect your information
            when you visit our website or engage with our real estate services.
          </p>

          <h2 className="text-xl font-semibold mt-8">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              location, and any details shared via inquiry or contact forms.
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, device
              details, IP address, pages visited, and cookies for analytics and
              performance improvements.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To respond to property inquiries and schedule site visits.</li>
            <li>
              To provide updates on our ongoing and upcoming real estate
              projects.
            </li>
            <li>To improve website performance and enhance user experience.</li>
            <li>
              To send promotional messages (only if you have opted in).
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">
            3. Data Protection & Security
          </h2>
          <p>
            We implement industry-standard security measures to protect your
            personal information. However, please note that no online data
            transmission or storage system is 100% secure.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            4. Sharing of Information
          </h2>
          <p>
            We do not sell, rent, or trade your personal data. We may share it
            only with:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              Trusted partners who assist in project management, marketing, or
              communication.
            </li>
            <li>
              Legal authorities, if required by law or for protecting our legal
              rights.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8">5. Use of Cookies</h2>
          <p>
            Our website uses cookies to enhance browsing experience and analyze
            website traffic. You can disable cookies in your browser settings if
            you prefer not to share this data.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            6. Third-Party Links
          </h2>
          <p>
            Our website may contain links to external sites. We are not
            responsible for the content or privacy practices of those websites.
            Please review their respective privacy policies.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            7. Your Rights & Choices
          </h2>
          <p>
            You may request access, correction, or deletion of your personal
            data by contacting us at{" "}
            <a
              href="mailto:info@svpdevelopers.com"
              className="text-blue-600 hover:underline"
            >
              info@svpdevelopers.com
            </a>
            . You can also opt out of marketing communications anytime.
          </p>

          <h2 className="text-xl font-semibold mt-8">
            8. Updates to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with a revised effective date.
          </p>

          <h2 className="text-xl font-semibold mt-8">9. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy or our data practices,
            please contact:
          </p>
          <p className="mt-2">
            <strong>SVP Developers & Promoters</strong> <br />
            Mysore, Karnataka, India <br />
            Email:{" "}
            <a
              href="mailto:info@svpdevelopers.com"
              className="text-blue-600 hover:underline"
            >
              info@svpdevelopers.com
            </a>
            <br />
            Phone: +91 98765 43210
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
