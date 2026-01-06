import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import HeroSection from './components/HeroSection';
import CoreCapabilitiesSection from './components/CoreCapabilitiesSection';
import ProtocolsSection from './components/ProtocolsSection';
import DeploymentOptionsSection from './components/DeploymentOptionsSection';
import PlatformArchitectureSection from './components/PlatformArchitectureSection';
import SecurityComplianceSection from './components/SecurityComplianceSection';
import SupportedIntegrationsSection from './components/SupportedIntegrationSection';
import QuickAction from './../../components/layout/QuickAction';

export default function Product() {
  return (
    <MainLayout>
     <HeroSection />
     <CoreCapabilitiesSection />
     <ProtocolsSection />
     <DeploymentOptionsSection />
     <PlatformArchitectureSection />
     <SecurityComplianceSection />
     <SupportedIntegrationsSection />
     <QuickAction />
    </MainLayout>
  );
}
