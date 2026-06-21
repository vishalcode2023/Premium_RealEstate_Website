import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";

import LandingPage from "../Components/LandingPage";
import AboutUs from "../Components/AboutUs";
import OngoingProjects from "../Components/OngoingProjects";
import ContactUs from "../Components/ContactUs";
import OurServices from "../Components/ServiceCard";
import Mynagar from "../Components/Mynagar";
import Jjenclave from "../Components/Jjenclave";
import Lakeview from "../Components/Lakeview";
import Shivam from "../Components/Shivam";
import Vanasiri from "../Components/Vanasiri";


import PrivacyPolicy from "../Components/PrivacyPolicy";
import TermsOfService from "../Components/Termsofservice";
import CookiePolicy from "../Components/Cookiepolicys";

const MainRouter = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="/project" element={<OngoingProjects/>}/>
        <Route path="/services" element={<OurServices/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<TermsOfService/>}/>
        <Route path="/cookie-policy" element={<CookiePolicy/>}/>
        <Route path="/project/mynagar" element={<Mynagar/>}/>
        <Route path="/project/jjenclave" element={<Jjenclave/>}/>
        <Route path="/project/lakeview" element={<Lakeview/>}/>
        <Route path="/project/shivam" element={<Shivam/>}/>
        <Route path="/project/vanasiri" element={<Vanasiri/>}/>
      </Routes>
    </Suspense>
  );
};

export default MainRouter;