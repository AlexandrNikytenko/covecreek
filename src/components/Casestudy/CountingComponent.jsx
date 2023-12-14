import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function CountingComponent({ targetNumber, durationInSeconds }) {
  const [number, setNumber] = useState(0);
  const steps = targetNumber / (durationInSeconds * 200);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      const intervalId = setInterval(() => {
        if (number < targetNumber) {
          setNumber((prev) => prev + steps);
        } else {
          clearInterval(intervalId);
        }
      }, 1);
  
      return () => clearInterval(intervalId);
    }
  }, [inView, controls, targetNumber, number, steps]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ number: 0 }}>
      {Math.round(number)}
    </motion.div>
  );
}

export default CountingComponent;
