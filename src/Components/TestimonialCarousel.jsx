import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The team helped us find our dream villa in Mysuru. They handled everything from site visits to documentation with complete transparency.",
    name: "Raghavendra & Kavya M.",
    title: "Home Buyers, Royal Enclave Mysore",
    rating: 5,
  },
  {
    id: 2,
    quote: "Their professional approach made investing in plots near Bannur Road extremely easy. The ROI analysis and loan guidance were top-notch.",
    name: "S. Prakash Kumar",
    title: "Real Estate Investor, Bengaluru",
    rating: 5,
  },
  {
    id: 3,
    quote: "I was amazed at how smooth the selling process was. The marketing team used drone photography and digital promotions that brought serious buyers quickly.",
    name: "Anitha Rajan",
    title: "Home Seller, Vijayanagar Layout",
    rating: 4,
  },
  {
    id: 4,
    quote: "They guided me through eco-friendly upgrades and solar installation for my commercial space, boosting both value and tenant appeal.",
    name: "Dr. Mahesh K. R.",
    title: "Commercial Property Owner, Mandya",
    rating: 5,
  },
  {
    id: 5,
    quote: "Very professional and friendly service! They understood my family's needs perfectly and found the right plot near schools and temples.",
    name: "Lakshmi Narayanan",
    title: "Home Buyer, Srirangapatna",
    rating: 5,
  },
];

const PRIMARY_TEXT_COLOR = '#333333';
const ACCENT_COLOR = '#1A3A5C';
const BACKGROUND_COLOR = '#F4F7FB';

const RatingStars = ({ rating }) => (
  <div className="flex space-x-0.5">
    {Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
      />
    ))}
  </div>
);

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ backgroundColor: BACKGROUND_COLOR }} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-3"
            style={{ color: PRIMARY_TEXT_COLOR }}
          >
            What Our Clients Say
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: ACCENT_COLOR }}></div>
          <p className="mt-3 text-base" style={{ color: ACCENT_COLOR }}>
            Trusted by the community for exceptional real estate service.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden" style={{ minHeight: '260px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-8"
            >
              <RatingStars rating={testimonials[current].rating} />
              <p
                className="text-base md:text-lg font-serif italic mt-4 leading-relaxed"
                style={{ color: PRIMARY_TEXT_COLOR }}
              >
                "{testimonials[current].quote}"
              </p>
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="font-semibold text-base" style={{ color: PRIMARY_TEXT_COLOR }}>
                  {testimonials[current].name}
                </p>
                <p className="text-sm" style={{ color: ACCENT_COLOR }}>
                  {testimonials[current].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? 'w-6' : 'w-2'
              }`}
              style={{ backgroundColor: current === idx ? ACCENT_COLOR : '#CBD5E1' }}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
