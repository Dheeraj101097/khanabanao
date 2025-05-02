import React from "react";
import Navbar from "../components/Navbarlp";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function LandingPage() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default LandingPage;
