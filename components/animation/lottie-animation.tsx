import { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
}: {
  animationData: any;
  loop: boolean | number;
  autoplay: boolean;
}) => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    // Initialize the animation
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg", // 'svg', 'canvas', or 'html'
      loop: loop,
      autoplay: autoplay,
      animationData: animationData,
      rendererSettings: {
        progressiveLoad: true,
        preserveAspectRatio: "xMidYMid slice",
      },
    });

    // Cleanup function

    return () => {
      anim.destroy();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default LottieAnimation;
