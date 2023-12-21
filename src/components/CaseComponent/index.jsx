import styles from "./style.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Container from "../Container";
import PAGES from "src/constants/pages";

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
      <Container style={{ maxWidth: "1400px" }}>
        <div className={styles.case__inner}>
          <div className={styles.case__desc}>
            <motion.h3
              className={styles.case__desc_title}
              initial={{ opacity: 0, x: -200 }}
              animate={controls}
              transition={{ duration: 0.4 }}
            >
              Case study
            </motion.h3>
            <motion.h4
              className={styles.case__desc_description}
              initial={{ opacity: 0, x: -200 }}
              animate={controls}
              transition={{ duration: 0.5 }}
            >
              The American Battle Monuments Commission
            </motion.h4>
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
            <Link
              to={PAGES.CaseStudy.path}
              as="button"
              className={styles.case__image_button}
            >
              View Case Study
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default CaseComponent;
