import React from "react";

// import AgenticSection from "../components/sections/AgenticSection";

// import AgentPlatformSection from "../components/sections/AgenticPlatform";

import MultimodalSection from "../components/sections/MultiModal";
// import UseCases from "../components/sections/UseCases";

import MainLayout from "../components/layout/MainLayout";
// import DataSourceImageSection from "../components/sections/DataSourceImage";
// import ConnectorsSection from './../components/sections/ConnectorsSection';

import FieldProductivity from "../components/sections/product/FieldProductivity";
import RetailPlaybooks from "../components/sections/product/RetailPlaybooks";
// import OverviewSection from './../components/sections/OverviewSection';

import AgenticSection from "../components/sections/product/AgenticSection";
import SplitSection from "../components/sections/product/AgenticPlatform";
import UseCases from "../components/sections/product/UseCases";
import ConnectorsSection from "../components/sections/product/ConnectorsSection";
import OverviewSection from "../components/sections/product/OverviewSection";
import QuickAction from "../components/layout/QuickAction";

export default function Product() {
  return (
    <MainLayout>
      <OverviewSection />
      <AgenticSection />
      <SplitSection />
      <MultimodalSection />
      <ConnectorsSection />
      <UseCases />
      {/* <DataSourceImageSection /> */}
      {/* <FieldProductivity /> */}
      {/* <RetailPlaybooks /> */}
      <QuickAction />
    </MainLayout>
  );
}
