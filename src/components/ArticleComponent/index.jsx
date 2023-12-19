import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function ArticleComponent({ data, background, link }) {
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
    <section className={styles.article} style={{ background }} ref={ref}>
      <motion.h3
        className={styles.article__title}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        {data.label}
      </motion.h3>
      <motion.p
        className={styles.article__desc}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.4 }}
      >
        {data.text}
      </motion.p>
      {link && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Link to="/why-us" className={styles.article__link}>
            What makes us unique
            <img src="/icons/Arrow_right_blue.svg" alt="Link" />
          </Link>
        </motion.div>
      )}
    </section>
  );
}

export default ArticleComponent;
