"use client";
import React, { useEffect } from "react";
import LottieAnimation from "./lottie-animation";

export default function MainAnimation({
  animationData,
  loop,
}: {
  animationData: any;
  loop: boolean | number;
}) {
  return (
    <LottieAnimation
      animationData={animationData}
      loop={loop}
      autoplay={true}
    />
  );
}
