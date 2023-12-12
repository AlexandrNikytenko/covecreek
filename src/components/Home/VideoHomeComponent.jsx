import styles from "./style.module.scss";

import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function VideoHomeComponent({ scrollToSection }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isFirstHover, setIsFirstHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

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

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);


  return (
    <div  ref={ref} style={{ width: "100%" }} onMouseEnter={() => setIsFirstHover(true)}>
      <motion.section
        className={styles.video_box}
        onMouseMove={handleMouse}
        style={{
          perspective: 800,
        }}
        initial={{ opacity: 0, y: 300 }}
          animate={controls}
          transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.video_box__container}
          style={{ rotateX, rotateY }}
        >
          <video autoPlay loop muted className={styles.video_box__video}>
            <source src="/videos/Cove_Creek_web_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <div className={styles.video_box__text}>
          <p className={styles.video_box__text_title}>360° Virtual Tours</p>
          <p className={styles.video_box__text_desc}>
            Premium Quality, Intuitive Control
          </p>
        </div>
        <img
          src="/icons/Arrow_down_blue.svg"
          alt="Logo"
          className={styles.video_box__arrow_down}
          onClick={() => scrollToSection("mySection")}
        />
      </motion.section>
    </div>
  );
}

export default VideoHomeComponent;
