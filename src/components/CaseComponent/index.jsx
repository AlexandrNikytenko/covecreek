import styles from "./style.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function CaseComponent({ text }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);

  return (
    <section className={styles.case} ref={ref}>
      <div className={styles.case__desc}>
        <motion.p
          className={styles.case__desc_title}
          initial={{ opacity: 0, x: -200 }}
          animate={controls}
          transition={{ duration: 0.4 }}
        >
          Case study
        </motion.p>
        <motion.h2
          className={styles.case__desc_description}
          initial={{ opacity: 0, x: -200 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          The American Battle Monuments Commission
        </motion.h2>
        <motion.p
          className={styles.case__desc_text}
          initial={{ opacity: 0, x: -200 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          {text}
        </motion.p>
      </div>
      <motion.div
        className={styles.case__image}
        initial={{ opacity: 0, x: -200 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        <button className={styles.case__image_button}>View Case Study</button>
      </motion.div>
    </section>
  );
}

export default CaseComponent;
