import styles from "./style.module.scss";
import InputForm from "../InputForm";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function ContactComponent() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.wave_top}></div>
      <div className={styles.get}>
        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          Get started
        </motion.p>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 400 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          Get started on your 360° virtual tour today
        </motion.h1>
      </div>
      <motion.div
        style={{ width: "100%", zIndex: "1" }}
        initial={{ opacity: 0, y: 600 }}
        animate={controls}
        transition={{ duration: 0.9 }}
      >
        <InputForm type={"start"} buttonText={"Schedule a Demo"} fetchData={()=>{}}/>
      </motion.div>
    </section>
  );
}

export default ContactComponent;
