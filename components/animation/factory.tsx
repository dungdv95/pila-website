"use client";
import animationData from "./animation-factory.json";
import Lottie from "react-lottie";

export default function AnimationFactory({
  className,
}: {
  className?: string;
}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} isClickToPauseDisabled={true} />;
}
