"use client";

import BannerSection from "@/components/sections/banner-section";
import BuildingSection from "@/components/sections/building-section";
import CoreValueSection from "@/components/sections/core-value-section";
import FooterSection from "@/components/sections/footer-section";
import InfrastructureSection from "@/components/sections/infrastructure-section";
import MissionPilaSection from "@/components/sections/mission-pila-section";
import PartnerSection from "@/components/sections/partner-section";
import VisionSection from "@/components/sections/vision-section";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <BannerSection />
      </motion.div>

      <VisionSection />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <MissionPilaSection />
      </motion.div>

      <CoreValueSection />
      <InfrastructureSection />
      <BuildingSection />
      <PartnerSection />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <FooterSection />
      </motion.div>
    </>
  );
}
