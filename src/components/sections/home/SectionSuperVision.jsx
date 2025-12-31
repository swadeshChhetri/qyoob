import React from "react";
import { Shield, Landmark, Boxes, User, Users, Network } from "lucide-react";
import MaxWrapper from "./../../layout/MaxWrapper";
import Section from "../../layout/Section";

export default function SectionSupervision() {
  return (
    <Section className="w-full bg-black text-white">
      <MaxWrapper>
        <div className="w-full bg-[#0f0f0f] rounded-3xl overflow-hidden mt-10 flex flex-col md:flex-row">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 bg-[#1b1b1b] px-10 md:px-14 py-14 flex flex-col justify-center">
            <h4 className="text-2xl font-medium mb-10">AI SUPERVISION</h4>

            <div className="space-y-8">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-lime-400 p-3 rounded-full">
                  <Landmark className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-lg font-medium">
                    Enterprise-Grade Control
                  </p>
                  <p className="text-gray-300">
                    Real-time visibility, policy controls, and full oversight
                    designed for enterprise environments.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-lime-400 p-3 rounded-full">
                  <Shield className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-lg font-medium">Security You Can Trust</p>
                  <p className="text-gray-300">
                    AI-native safety, compliance guardrails, and risk-mitigating
                    protections built into every layer.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-lime-400 p-3 rounded-full">
                  <Boxes className="text-black" size={20} />
                </div>
                <div>
                  <p className="text-lg font-medium">Built to Integrate</p>
                  <p className="text-gray-300">
                    Seamlessly connects with your existing tech stack—no
                    disruption, just smooth integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Perfect Responsive Image */}
          <div className="w-full md:w-1/2 bg-[#151515] flex items-stretch">
            <img
              src="/image/ai_supervision.png"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </MaxWrapper>
    </Section>
  );
}
