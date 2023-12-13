import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function UnmatchedComponent({link}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <section className={styles.unmatched} ref={ref}>
      <motion.p className={styles.unmatched__title}
      initial={{ opacity: 0, y: 200 }}
      animate={controls}
      transition={{ duration: 0.3 }}
      >Unmatched quality</motion.p>
      <motion.div className={styles.unmatched__content}
      initial={{ opacity: 0, y: 200 }}
      animate={controls}
      transition={{ duration: 0.4 }}
      >
        <p className={styles.unmatched__content_text}>
          Our attention to detail is unmatched by the competition, with years of
          fine tuning our process to deliver the best imagery possible for your
          campus
        </p>
        {link && <Link to="/portfolio" className={styles.unmatched__content_link}>
          See Our Portfolio
        </Link>}
      </motion.div>
    </section>
  );
}

export default UnmatchedComponent;
