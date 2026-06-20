import React from "react";
import Navbar from "../Router/Navbar";
import Herosection from "./HeroSection";
import ProjectOverviewSection from "./ProjectOverviewSection";
import TestimonialCarousel from "./TestimonialCarousel";
import WhyChooseUsSection from "./WhyChooseUsSection";
import AboutUsStorySection from "./AboutUsStorySection";
import LeadershipTimeline from "./LeadershipTimeline";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Herosection />
      <WhyChooseUsSection />
      <AboutUsStorySection />
      <ProjectOverviewSection />
      <LeadershipTimeline />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default LandingPage;
