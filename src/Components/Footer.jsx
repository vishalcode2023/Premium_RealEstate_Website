import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const BLUE = "#1A3A5C";
const GREY = "#6B7280";
const WHITE = "#FFFFFF";
const LIGHT_BG = "#F4F7FB";

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-sm hover:underline transition-colors duration-300"
      style={{ color: GREY }}
    >
      {children}
    </a>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: LIGHT_BG, borderTop: `3px solid ${BLUE}` }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Logo & Info */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-white text-sm"
                style={{ backgroundColor: BLUE }}
              >
                TV
              </div>
              <span className="text-xl font-bold" style={{ color: BLUE }}>
                TrueValue
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-4" style={{ color: GREY }}>
              Building dream spaces with trust and quality since over 30 years.
            </p>
            <div className="space-y-2 text-sm" style={{ color: GREY }}>
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: BLUE }} />
                <span>No./Flat No.: 11203, Devasya House, 4th Stage 2nd Phase, Vijayanagara, Mysuru, Karnataka – 570017</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: BLUE }} />
                <a href="tel:+918431263217" className="hover:underline">+91 8431263217</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: BLUE }} />
                <a href="mailto:Truevaluegroups1@gmail.com" className="hover:underline break-all">Truevaluegroups1@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: BLUE }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/About">About Us</FooterLink>
              <FooterLink href="/project">Projects</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: BLUE }}>
              Legal
            </h3>
            <ul className="space-y-2.5">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact CTA */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: BLUE }}>
              Get in Touch
            </h3>
            <p className="text-sm mb-4" style={{ color: GREY }}>
              Looking for your dream property? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Contact Us →
            </a>
            <p className="mt-4 text-xs" style={{ color: GREY }}>
              Business Hours: Mon – Sat, 9am – 6pm
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid #D1D5DB` }}
        >
          <p className="text-xs" style={{ color: GREY }}>
            &copy; {currentYear} TrueValue Groups. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            {[
              { href: "https://www.facebook.com", icon: <Facebook size={18} />, label: "Facebook" },
              { href: "https://www.twitter.com", icon: <Twitter size={18} />, label: "Twitter" },
              { href: "https://www.instagram.com", icon: <Instagram size={18} />, label: "Instagram" },
              { href: "https://www.linkedin.com", icon: <Linkedin size={18} />, label: "LinkedIn" },
              { href: "https://www.youtube.com", icon: <Youtube size={18} />, label: "YouTube" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-opacity hover:opacity-70"
                style={{ color: BLUE }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
