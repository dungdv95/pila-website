"use client";

import MainAnimation from "../animation/main-animation";
import animationData from "@/components/animation/animation-factory.json";

export default function LazyAnimationBanner() {
  return <MainAnimation animationData={animationData} loop={true} />;
}
