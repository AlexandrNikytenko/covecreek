import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
        <div className={styles.content__box_image}>
          <div className={styles.content__box_image__buttons}>
            <button className={styles.content__box_image__buttons_button}>
              <img src="/icons/Add_white.svg" alt="Checked" />
              Add Hotspot
            </button>
            <button className={styles.content__box_image__buttons_button}>
              <img src="/icons/Filter_center_focus.svg" alt="Checked" />
              Set View
            </button>
          </div>
        </div>
        <div className={styles.content__box_set}>
          <div
            className={`${styles.content__box_set__item} ${styles.content__box_set__one}`}
          >
            <button className={styles.content__box_set__button}>
              High Arial
            </button>
          </div>
          <div
            className={`${styles.content__box_set__item} ${styles.content__box_set__two}`}
          >
            <button className={styles.content__box_set__button}>
              Campus Night
            </button>
          </div>
          <div
            className={`${styles.content__box_set__item} ${styles.content__box_set__three}`}
          >
            <button className={styles.content__box_set__button}>
              Centennial Mall North
            </button>
          </div>
          <div
            className={`${styles.content__box_set__item} ${styles.content__box_set__four}`}
          >
            <button className={styles.content__box_set__button}>
              Centennial Mall West
            </button>
          </div>
        </div>
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
        <div className={styles.content__desc_list}>
          <motion.div
            className={styles.content__desc_list__column}
            initial={{ opacity: 0, x: 200 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Digital Asset Management
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Branding Controls
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Custom CTAs
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Analytic Reports
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Multi Language Support
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              QR Code Generator
            </p>
          </motion.div>
          <motion.div
            className={styles.content__desc_list__column}
            initial={{ opacity: 0, x: 200 }}
            animate={controls}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Slate Implementation
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Link Shortening
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Salesforce Integration
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Upload Photos & Videos
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Annual Support
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Route Customization
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <Link to="/contact" className={styles.content__desc_bottom}>
            Schedule a demo
            <img src="/icons/Arrow_right_blue.svg" alt="Link" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default RobustComponent;
