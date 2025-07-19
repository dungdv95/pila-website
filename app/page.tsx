"use client";

import ApplicationSection from "@/components/sections/application-section";
import BannerSection from "@/components/sections/banner-section";
import BuildingSection from "@/components/sections/building-section";
import CoreValueSection from "@/components/sections/core-value-section";
import FooterSection from "@/components/sections/footer-section";
import InfrastructureSection from "@/components/sections/infrastructure-section";
import MissionPilaSection from "@/components/sections/mission-pila-section";
import MissionSection from "@/components/sections/mission-section";
import PartnerSection from "@/components/sections/partner-section";
import VisionSection from "@/components/sections/vision-section";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <BannerSection />
      <VisionSection />
      {/* <MissionSection /> */}
      <MissionPilaSection />
      <CoreValueSection />
      <InfrastructureSection />
      <BuildingSection />
      <PartnerSection />
      <FooterSection />
      {/* <ApplicationSection /> */}
    </>
  );
}
