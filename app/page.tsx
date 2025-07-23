"use client";

import BannerSection from "@/components/sections/banner-section";
import BuildingSection from "@/components/sections/building-section";
import CoreValueSection from "@/components/sections/core-value-section";
import FooterSection from "@/components/sections/footer-section";
import InfrastructureSection from "@/components/sections/infrastructure-section";
import MissionPilaSection from "@/components/sections/mission-pila-section";
import PartnerSection from "@/components/sections/partner-section";
import VisionSection from "@/components/sections/vision-section";

import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <BannerSection />
      </motion.div>

      <VisionSection />
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <MissionPilaSection />
      </motion.div>

      <CoreValueSection />
      <InfrastructureSection />
      <BuildingSection />
      <PartnerSection />
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <FooterSection />
      </motion.div>
    </>
  );
}
