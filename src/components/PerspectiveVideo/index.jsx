import styles from "./style.module.scss";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function PerspectiveVideo({ src, placeholder, children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
  const [isFirstHover, setIsFirstHover] = useState(false);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isDesktop = window.innerWidth >= 768;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    // enable for desktop, but not for safari
    setIsAnimationEnabled(isDesktop && !isSafari);
    window.addEventListener("resize", handleResize);

    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rotateX = useTransform(
    y,
    [0, windowHeight],
    !isFirstHover ? [15, -15] : [10, -25]
  );
  const rotateY = useTransform(x, [0, windowWidth], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
      onMouseEnter={() => setIsFirstHover(true)}
    >
      <motion.div
        className={styles.video_box}
        onMouseMove={handleMouse}
        style={{ perspective: 800 }}
      >
        <motion.div
          className={styles.video_box__container}
          style={isAnimationEnabled ? { rotateX, rotateY } : {}}
        >
          <video
            playsInline
            autoPlay
            loop
            muted
            className={styles.video_box__video}
            poster={placeholder}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
        {children}
      </motion.div>
    </div>
  );
}

export default PerspectiveVideo;
