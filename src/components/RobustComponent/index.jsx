import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PAGES from "src/constants/pages";

function RobustComponent() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [inView, controls]);
  return (
    <section className={styles.content} ref={ref}>
      <motion.div
        className={styles.content__box}
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        <img src="/images/why-us/robust-cms.jpg" />
      </motion.div>
      <div className={styles.content__desc} id="robust-cms">
        <motion.h3
          className={styles.content__desc_title}
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          transition={{ duration: 0.4 }}
        >
          Robust Content Management
        </motion.h3>
        <motion.p
          className={styles.content__desc_description}
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Our proprietary 360° software and cloud-based CMS empowers clients to
          control their virtual tour
        </motion.p>

        <motion.div
          className={styles.content__desc_list}
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          transition={{ duration: 0.7 }}
        >
          <ul>
            <li>Digital Asset Management</li>
            <li>Branding Controls</li>
            <li>Custom CTAs</li>
            <li>Analytic Reports</li>
            <li>Multi Language Support</li>
            <li>QR Code Generator</li>
            <li>Slate Implementation</li>
            <li>Link Shortening</li>
            <li>Salesforce Integration</li>
            <li>Upload Photos & Videos</li>
            <li>Annual Support</li>
            <li>Route Customization</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          transition={{ duration: 0.8 }}
          className={styles.content__desc_bottom}
        >
          <Link to={PAGES.Contact.path}>Schedule a demo</Link>
        </motion.div>
      </div>
    </section>
  );
}

export default RobustComponent;
