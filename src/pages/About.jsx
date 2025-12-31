import React from "react";

import StatsSection from "../components/sections/about/StatsData";
import MainLayout from "./../components/layout/MainLayout";
import OurValues from "../components/sections/about/Ourvalues";
import Overview from '../components/sections/about/Overview';
import PlatformCapabilities from '../components/sections/about/PlatformCapabilities';

export default function About() {
  return (
    <MainLayout>
      <Overview />
      {/* <PlatformCapabilities /> */}
      <StatsSection />
      <OurValues />
    </MainLayout>
  );
}
