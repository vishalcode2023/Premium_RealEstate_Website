import React from "react";
import { motion } from "framer-motion";

const BLUE = "#1A3A5C";
const LIGHT_BG = "#F4F7FB";
const DARK = "#1F2937";
const GREY = "#6B7280";
const LIGHT_BLUE = "#E8F0F7";

const timelineEvents = [
  {
    year: "1995",
    title: "Foundational Vision",
    description:
      "Mr. Gangadhar started the journey into real estate 30 years ago, establishing the firm with a commitment to quality housing and community-centric development.",
  },
  {
    year: "2005",
    title: "Era of Expansion",
    description:
      "Pioneered the firm's expansion into commercial and luxury segments. SVP Developers became a cornerstone of the Mysore real estate landscape.",
  },
  {
    year: "Present",
    title: "Future of Digital Real Estate",
    description:
      "Driving digital transformation across all processes, focusing on PropTech integration and expanding the firm's investment portfolio.",
  },
];

const stats = [
  { num: "30+", label: "Years" },
  { num: "500+", label: "Plots Sold" },
  { num: "5", label: "Projects" },
];

const LeadershipTimeline = () => {
  return (
    <section style={{ backgroundColor: LIGHT_BG }} className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2" style={{ color: DARK }}>
            A Legacy of Vision
          </h2>
          <div className="w-14 h-1 mx-auto rounded-full mb-3" style={{ backgroundColor: BLUE }} />
          <p className="text-base max-w-xl mx-auto" style={{ color: GREY }}>
            Tracing the visionary who built our legacy, decade by decade.
          </p>
        </motion.div>

        {/* Founder Banner — full image with left overlay */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl mb-12 relative"
          style={{ height: "460px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Full image, centered to show the full person */}
          <img
            src="/Img/Founder.jpg"
            alt="Mr. Gangadhar - Founder"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />

          {/* Left-to-right gradient so right side shows the person clearly */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,25,47,0.92) 0%, rgba(10,25,47,0.75) 35%, rgba(10,25,47,0.25) 65%, rgba(10,25,47,0.0) 100%)",
            }}
          />

          {/* Content — left aligned */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 text-white" style={{ maxWidth: "520px" }}>
            <p className="text-xs uppercase tracking-[0.25em] mb-3 opacity-60">
              Founder & Managing Director
            </p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-2 leading-tight">
              Mr. Gangadhar
            </h3>
            <p className="text-sm opacity-60 mb-6 tracking-wide">
              SVP Developers, Mysore — Est. 1993
            </p>

            <div className="w-10 h-px mb-6" style={{ backgroundColor: "rgba(255,255,255,0.4)" }} />

            {/* Stats */}
            <div className="flex gap-10">
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="text-3xl md:text-4xl font-bold">{num}</p>
                  <p className="text-xs uppercase tracking-widest mt-1 opacity-55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Horizontal Timeline Cards */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-5 left-0 right-0 h-px"
            style={{ backgroundColor: LIGHT_BLUE, zIndex: 0 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full mx-auto mb-5 relative z-10 shadow-md"
                  style={{ backgroundColor: BLUE }}
                >
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>

                {/* Card */}
                <div
                  className="bg-white rounded-xl p-5 shadow-sm border-t-4"
                  style={{ borderColor: BLUE }}
                >
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                    style={{ backgroundColor: LIGHT_BLUE, color: BLUE }}
                  >
                    {event.year}
                  </span>
                  <h4
                    className="text-base font-serif font-bold mb-2"
                    style={{ color: DARK }}
                  >
                    {event.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: GREY }}>
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LeadershipTimeline;