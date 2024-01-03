import { useEffect, useRef } from "react";

import lottie from "lottie-web";

interface LottieProps {
  animationData: any;
  width: number;
  height: number;
  speed?: number;
}

export const Lottie = ({
  animationData,
  width,
  height,
  speed = 1,
}: LottieProps) => {
  const element = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<any>();

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        animationData,
        container: element.current,
      });
      lottieInstance.current.setSpeed(speed);
    }
    return () => {
      lottieInstance.current?.destroy();
    };
  }, [animationData, speed]);

  return <div style={{ width, height }} ref={element}></div>;
};

export default Lottie;
