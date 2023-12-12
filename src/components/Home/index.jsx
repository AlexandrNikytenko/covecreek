import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import HomeCarousel from "../Carousel";
import ContactComponent from "../ContactComponent";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import VideoHomeComponent from "./VideoHomeComponent";

function Home() {
  const controlsUnmached = useAnimation();
  const controlsAdvanced = useAnimation();
  const controlsLeading = useAnimation();
  const controlsLink = useAnimation();
  const controlsPreference = useAnimation();

  const [refUnmached, inViewUnmached] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [refAdvanced, inViewAdvanced] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [refLeading, inViewLeading] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [refLink, inViewLink] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [refPreference, inViewPreference] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  useEffect(() => {
    if (inViewUnmached) {
      controlsUnmached.start({ opacity: 1, x: 0 });
    }

    if (inViewAdvanced) {
      controlsAdvanced.start({ opacity: 1, x: 0 });
    }

    if (inViewLeading) {
      controlsLeading.start({ opacity: 1, y: 0 });
    }

    if (inViewLink) {
      controlsLink.start({ opacity: 1, y: 0 });
    }

    if (inViewPreference) {
      controlsPreference.start({ opacity: 1, y: 0 });
    }
  }, [
    inViewUnmached,
    inViewAdvanced,
    inViewLeading,
    inViewLink,
    inViewPreference,
    controlsUnmached,
    controlsAdvanced,
    controlsLeading,
    controlsLink,
    controlsPreference,
  ]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wave_top}></div>
      <VideoHomeComponent scrollToSection={scrollToSection} />

      <section ref={refLeading} className={styles.leading} id="mySection">
        <motion.p
          className={styles.leading__tours}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsLeading}
          transition={{ duration: 0.3 }}
        >
          premium 360° tours
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 400 }}
          animate={controlsLeading}
          transition={{ duration: 0.6 }}
          className={styles.leading__desc}
        >
          Cove Creek is the leading producer of stunning, interactive virtual
          tours, custom made for <span>university</span> <span>campuses</span>{" "}
          and <span>tourism</span> locations worldwide
        </motion.p>
      </section>

      <HomeCarousel />

      <motion.div
        ref={refLink}
        initial={{ opacity: 0, y: 200 }}
        animate={controlsLink}
        transition={{ duration: 0.3 }}
      >
        <Link to="/portfolio" className={styles.button_see}>
          See Our Portfolio
        </Link>
      </motion.div>

      <section className={styles.presentation} ref={refUnmached}>
        <motion.div
          className={styles.presentation__desc}
          initial={{ opacity: 0, x: 100 }}
          animate={controlsUnmached}
          transition={{ duration: 1 }}
        >
          <p className={styles.presentation__desc_top}>Unmatched Quality</p>
          <p className={styles.presentation__desc_title}>
            Attention to detail like you’ve never seen before
          </p>
          <Link to="/whyus" className={styles.presentation__desc_bottom}>
            What makes us unique
            <img src="/icons/Arrow_right_blue.svg" alt="Checked" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 1000 }}
          animate={controlsUnmached}
          transition={{ duration: 0.75 }}
          className={`${styles.presentation__image} ${styles.presentation__image_att}`}
        ></motion.div>
      </section>

      <section
        ref={refAdvanced}
        className={`${styles.presentation} ${styles.presentation__direct}`}
      >
        <motion.div
          className={styles.presentation__desc}
          initial={{ opacity: 0, x: -100 }}
          animate={controlsAdvanced}
          transition={{ duration: 1 }}
        >
          <p className={styles.presentation__desc_top}>Advanced CMS</p>
          <p className={styles.presentation__desc_title}>
            Make it yours in minutes with our advanced CMS
          </p>
          <Link to="/whyus" className={styles.presentation__desc_bottom}>
            Learn more
            <img src="/icons/Arrow_right_blue.svg" alt="Checked" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={controlsAdvanced}
          transition={{ duration: 0.75 }}
          className={`${styles.presentation__image} ${styles.presentation__image_make}`}
        >
          <div className={styles.presentation__buttons}>
            <button className={styles.presentation__buttons_button}>
              <img src="/icons/Add_white.svg" alt="Checked" />
              Add Hotspot
            </button>
            <button className={styles.presentation__buttons_button}>
              <img src="/icons/Filter_center_focus.svg" alt="Checked" />
              Set View
            </button>
          </div>
        </motion.div>
      </section>

      <section className={styles.preference} ref={refPreference}>
        <div className={styles.preference__list}>
          <motion.div
            className={styles.preference__list_items}
            initial={{ opacity: 0, y: 100 }}
            animate={controlsPreference}
            transition={{ duration: 0.3 }}
          >
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Client-Controlled CMS
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Custom Routes
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Slate Implementation
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={controlsPreference}
            transition={{ duration: 0.5 }}
            className={styles.preference__list_items}
          >
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Custom CTAs
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Branding Controls
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              ADA Compliant (WCAG 2.2)
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={controlsPreference}
            transition={{ duration: 0.7 }}
            className={styles.preference__list_items}
          >
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Analytics Reporting
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Digital Asset Management
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Self-Guided Routing
            </p>
          </motion.div>
        </div>
      </section>

      <ContactComponent />
    </div>
  );
}

export default Home;
