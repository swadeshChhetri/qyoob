import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import IntegrationSection from "./components/IntegrationSection";
import GovernanceSection from "./components/GovernanceSection";
import QuickAction from './../../components/layout/QuickAction';


export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <IntegrationSection />
      <GovernanceSection />
      <QuickAction />
    </MainLayout>
  );
}
