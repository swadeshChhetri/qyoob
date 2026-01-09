import React from "react";
import MainLayout from "../../components/layout/MainLayout";

// Sections we actually created
// import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection";
import MissionSection from "./components/MissionSection";
import OurStorySection from "./components/OurStorySection";
import FounderSection from "./components/FounderSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import CallToActionSection from "./components/CallToActionSection";
import OurApproachSection from "./components/OurApproachSection";

export default function About() {
  return (
    <MainLayout>
      <AboutUsSection />
      <MissionSection />
      <OurStorySection />
      <FounderSection />
      <WhatWeDoSection />
      <OurApproachSection />
      <CallToActionSection />
    </MainLayout>
  );
}
