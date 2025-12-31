import React from "react";
import HeroSection from "../components/sections/home/Hero";

import MainLayout from "./../components/layout/MainLayout";
import SectionSupervision from "../components/sections/home/SectionSuperVision";
import SectionAgents from "../components/sections/home/SectionAgents";
import QuickAction from "../components/layout/QuickAction";
import DataSourceApps from "../components/sections/home/DataSourcesApps";
import WhatWeBuildSection from './../components/sections/home/WhatWeBuildSection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <WhatWeBuildSection />
      <SectionAgents />
      <DataSourceApps />
      <SectionSupervision />
      <QuickAction />
    </MainLayout>
  );
}
