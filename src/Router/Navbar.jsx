import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/About" },
  { name: "Projects", href: "/project" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/918431263217"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Floating Call Icon */}
      <a
        href="tel:+918431263217"
        className="fixed bottom-8 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110"
        style={{ backgroundColor: "#1A3A5C" }}
        aria-label="Call us"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] z-50
          rounded-full border px-5 md:px-8 py-2.5 
          flex items-center justify-between transition-all duration-500 
          shadow-[0_4px_30px_rgba(0,0,0,0.2)]
          ${
            scrolled
              ? "bg-white border-gray-200 text-black"
              : "bg-[#1A3A5C]/85 border-white/20 text-white"
          }`}
      >
        {/* Logo - clickable, goes to home */}
        <a href="/" className="flex items-center gap-2.5">
          <div
            className="flex items-center justify-center w-9 h-9 rounded-full"
          >
            <img
              src='/Img/logo.png'
              alt="TrueValue Logo"
              className="w-12 h-12 object-contain rounded-xl"
            />
          </div>
          <span
            className={`text-base md:text-lg font-bold tracking-wide transition-colors ${
              scrolled ? "text-[#1A3A5C]" : "text-white"
            }`}
          >
            TrueValue
          </span>
        </a>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className={`hidden md:block text-sm font-medium transition-colors ${
              scrolled
                ? "text-gray-700 hover:text-[#1A3A5C]"
                : "text-white/90 hover:text-white"
            }`}
          >
            Contact Us
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-sm font-medium transition-all duration-300 
              ${
                scrolled
                  ? "border-gray-300 text-gray-700 hover:bg-gray-100"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
          >
            <Menu size={16} />
            <span className="tracking-wide">MENU</span>
          </button>
        </div>
      </motion.nav>

      {/* Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex flex-col justify-center items-center text-white"
            style={{ backgroundColor: "#1A3A5C" }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-10 text-white/80 hover:text-white transition"
            >
              <X size={30} />
            </button>

            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="space-y-5 text-3xl md:text-5xl text-center font-light tracking-wide"
            >
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="hover:text-gray-300 cursor-pointer transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12 space-y-2 text-sm text-gray-300"
            >
              <p>
                Email:{" "}
                <a
                  href="mailto:Truevaluegroups1@gmail.com"
                  className="underline"
                >
                  Truevaluegroups1@gmail.com
                </a>
              </p>
              <p>
                Call:{" "}
                <a href="tel:+918431263217" className="underline">
                  +91 8431263217
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href="https://wa.me/918431263217" className="underline">
                  +91 8431263217
                </a>
              </p>
              <div className="flex justify-center space-x-6 mt-5 text-2xl">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-300 transition"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
