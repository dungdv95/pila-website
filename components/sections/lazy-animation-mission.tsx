"use client";

import MainAnimation from "../animation/main-animation";
import animationData from "@/components/animation/animation-mission.json";

export default function LazyAnimationMission() {
  return <MainAnimation animationData={animationData} loop={true} />;
}
