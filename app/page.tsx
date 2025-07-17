"use client";

import ApplicationSection from "@/components/sections/application-section";
import BannerSection from "@/components/sections/banner-section";
import CoreValueSection from "@/components/sections/core-value-section";
import MissionSection from "@/components/sections/mission-section";
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
      <MissionSection />
      <CoreValueSection />
      {/* <ApplicationSection /> */}
    </>
  );
}
