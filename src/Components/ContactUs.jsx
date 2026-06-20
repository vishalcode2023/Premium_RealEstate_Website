import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Navbar from "../Router/Navbar";
import Footer from "./Footer";

const BLUE = "#1A3A5C";
const LIGHT_BG = "#F4F7FB";
const GREY = "#6B7280";
const DARK = "#1F2937";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Call Us",
    detail: "+91 8431263217",
    link: "tel:+918431263217",
    sub: "Mon – Sat, 9am – 6pm",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    detail: "+91 8431263217",
    link: "https://wa.me/918431263217",
    sub: "Quick responses",
  },
  {
    icon: Mail,
    label: "Email Us",
    detail: "Truevaluegroups1@gmail.com",
    link: "mailto:Truevaluegroups1@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Our Office",
    detail: "No./Flat No: 11203, Devasya House, 4th Stage 2nd Phase, Vijayanagara, Mysuru – 570017",
    link: "https://maps.google.com/?q=Vijayanagara+Mysuru+Karnataka",
    sub: "Visit us anytime",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been submitted. We'll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: LIGHT_BG }}>
      <Navbar />

      {/* Hero Banner */}
      <div
        className="pt-28 pb-14 text-center"
        style={{ backgroundColor: BLUE }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-white mb-3"
        >
          Contact Us
        </motion.h1>
        <p className="text-base text-blue-100 max-w-xl mx-auto px-4">
          We're here to help you find your perfect property in Mysore. Reach out and let's get started.
        </p>
      </div>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {CONTACT_INFO.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.label === "WhatsApp" || item.label === "Our Office" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full mb-3"
                  style={{ backgroundColor: BLUE }}
                >
                  <item.icon size={22} color="white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: BLUE }}>
                  {item.label}
                </p>
                <p className="text-sm font-medium mb-1 break-all" style={{ color: DARK }}>
                  {item.detail}
                </p>
                <p className="text-xs" style={{ color: GREY }}>{item.sub}</p>
              </motion.a>
            ))}
          </div>

          {/* Form + Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm p-7 md:p-9 border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-1" style={{ color: DARK }}>
                Send Us a Message
              </h2>
              <p className="text-sm mb-6" style={{ color: GREY }}>
                Fill the form below and our team will reach out to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1" style={{ color: DARK }}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 bg-gray-50"
                      style={{ "--tw-ring-color": BLUE }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1" style={{ color: DARK }}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: DARK }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: DARK }}>I'm interested in</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none bg-gray-50"
                    style={{ color: formData.interest ? DARK : GREY }}
                  >
                    <option value="">Select a project</option>
                    <option>Bannur Road, Mysore</option>
                    <option>Bogadi Road, Mysore</option>
                    <option>Yelawala, Mysore</option>
                    <option>Nanjangud Road, Mysore</option>
                    <option>Jettihundi, Mysore</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: DARK }}>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 bg-gray-50 resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold rounded-xl text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: BLUE }}
                >
                  <Send size={16} />
                  Submit Inquiry
                </motion.button>
              </form>
            </motion.div>

            {/* Map + Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  title="TrueValue Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.1!2d76.615!3d12.311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVijayanagara%2C+Mysuru%2C+Karnataka+570017!5e0!3m2!1sen!2sin!4v1620000000000"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} style={{ color: BLUE }} />
                  <h3 className="font-bold text-base" style={{ color: DARK }}>Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm" style={{ color: GREY }}>
                  {[
                    { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
                    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
                    { day: "Sunday", time: "Closed" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between">
                      <span>{day}</span>
                      <span className="font-medium" style={{ color: DARK }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-3">
                <a
                  href="tel:+918431263217"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white text-center"
                  style={{ backgroundColor: BLUE }}
                >
                  <Phone size={15} /> Call Now
                </a>
                <a
                  href="https://wa.me/918431263217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white text-center"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
