import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "./style.module.scss";
import { HomeCarousel } from "../Carousel";
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
    threshold: 0,
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
      console.log("inViewUnmached");
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

  const scrollToSection = (sectionId, offset = 20) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionPos = section.offsetTop - offset;
      window.scrollTo({
        top: sectionPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wave_top}></div>
      <VideoHomeComponent
        scrollToSection={scrollToSection}
        src="https://player.vimeo.com/progressive_redirect/playback/894337365/rendition/540p/file.mp4?loc=external&log_user=0&signature=ecbf82ccad517945a5ffbaf26c2dc44f07f1efcb544370d4c532e513a00867b4"
      />

      <section ref={refLeading} className={styles.leading} id="homepage-hero">
        <motion.h3
          className={styles.leading__tours}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsLeading}
          transition={{ duration: 0.3 }}
        >
          Premium 360° Tours
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 400 }}
          animate={controlsLeading}
          transition={{ duration: 0.6 }}
          className={styles.leading__desc}
        >
          Cove Creek is the leading producer of stunning, interactive virtual
          tours, custom made for <span>university</span> <span>campuses</span>{" "}
          and <span>tourism locations</span> worldwide
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

      <section className={styles.presentation_left_image} ref={refUnmached}>
        <div className={styles.presentation_left_image__container}>
          <motion.div
            className={styles.presentation_left_image__desc}
            initial={{ opacity: 0, x: 100 }}
            animate={controlsUnmached}
            transition={{ duration: 1 }}
          >
            <h3 className={styles.presentation_left_image__desc_top}>
              Unmatched Quality
            </h3>
            <p className={styles.presentation_left_image__desc_title}>
              Attention to detail like you’ve never seen before
            </p>
            <Link
              to="/why-us"
              className={styles.presentation_left_image__desc_bottom}
            >
              What makes us unique
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={controlsUnmached}
            transition={{ duration: 0.75 }}
            className={styles.presentation_left_image__image}
          >
            <img src="/images/homepage/homepage_quality.jpg" />
          </motion.div>
        </div>
      </section>

      <section className={styles.presentation_right_image} ref={refUnmached}>
        <div className={styles.presentation_right_image__container}>
          <motion.div
            className={styles.presentation_right_image__desc}
            initial={{ opacity: 0, x: -100 }}
            animate={controlsUnmached}
            transition={{ duration: 1 }}
          >
            <h3 className={styles.presentation_right_image__desc_top}>
              Advanced CMS
            </h3>
            <p className={styles.presentation_right_image__desc_title}>
              Make it yours in minutes with our advanced CMS
            </p>
            <HashLink
              to="/why-us#robust-cms"
              className={styles.presentation_right_image__desc_bottom}
            >
              Learn More
            </HashLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={controlsUnmached}
            transition={{ duration: 0.75 }}
            className={styles.presentation_right_image__image}
          >
            <img src="/images/Group_74.png" />
            <div className={styles.presentation_right_image__buttons}>
              <button
                className={styles.presentation_right_image__buttons_button}
              >
                <img src="/icons/Add_white.svg" alt="Checked" />
                Add Hotspot
              </button>
              <button
                className={styles.presentation_right_image__buttons_button}
              >
                <img src="/icons/Filter_center_focus.svg" alt="Checked" />
                Set View
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.preference} ref={refPreference}>
        <div className={styles.preference__list}>
          <motion.div
            className={styles.preference__list_items}
            initial={{ opacity: 0, y: 100 }}
            animate={controlsPreference}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li>Client-Controlled CMS</li>
              <li>Custom Routes</li>
              <li>Slate Implementation</li>
              <li>Custom CTAs</li>
              <li>Branding Controls</li>
              <li>ADA Compliant (WCAG 2.2)</li>
              <li>Analytics Reporting</li>
              <li>Digital Asset Management</li>
              <li>Self-Guided Routing</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <ContactComponent />
    </div>
  );
}

export default Home;
