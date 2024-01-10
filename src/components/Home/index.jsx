import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "./style.module.scss";
import { HomeCarousel } from "../Carousel";
import ContactComponent from "../ContactComponent";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { PerspectiveVideo } from "../PerspectiveVideo";
import { Container } from "../Container";
import PAGES from "src/constants/pages";

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
    <div className={styles.page_container}>
      <div className={styles.wave_top}></div>
      <div className={styles.video_box} >
        <PerspectiveVideo
          src="https://player.vimeo.com/progressive_redirect/playback/899350477/rendition/720p/file.mp4?loc=external&log_user=0&signature=073196d8eb85ff15f8bdaa1184ef5585b727c8c39b4f1ef7e06237cb8c684743"
          placeholder="/images/video-placeholder.jpg"
        >
          <div className={styles.video_box__text}>
            <h1 className={styles.video_box__text_title}>
              360° Virtual&nbsp;Tours
            </h1>
            <h2 className={styles.video_box__text_desc}>
              Premium Quality, Intuitive Control
            </h2>
          </div>
          <div
            className={styles.video_box__arrow_down}
            onClick={() => scrollToSection("homepage-hero")}
          >
            <img src="/icons/Arrow_down_blue.svg" alt="Logo" />
          </div>
        </PerspectiveVideo>
      </div>

      <section ref={refLeading} className={styles.leading} id="homepage-hero">
        <Container>
          <div className={styles.leading__inner}>
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
              Cove Creek is the leading producer of stunning, interactive
              virtual tours, custom made for <span>university</span>{" "}
              <span>campuses</span> and <span>tourism locations</span> worldwide
            </motion.p>
          </div>
        </Container>
      </section>

      <HomeCarousel />

      <motion.div
        ref={refLink}
        initial={{ opacity: 0, y: 200 }}
        animate={controlsLink}
        transition={{ duration: 0.3 }}
      >
        <Link to={PAGES.Portfolio.path} className={styles.button_see}>
          See Our Portfolio
        </Link>
      </motion.div>

      <section className={styles.presentation} ref={refUnmached}>
        <div className={styles.container}>
          <div className={styles.presentation__inner}>
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
              <Link
                to={PAGES.WhyUs.path}
                className={styles.presentation__desc_bottom}
              >
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
          </div>
        </div>
      </section>

      <section ref={refAdvanced} className={`${styles.presentation} `}>
        <Container>
          <div
            className={`${styles.presentation__inner} ${styles.presentation__direct}`}
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
              <HashLink
                to={PAGES.WhyUs.path + "#robust-cms"}
                className={styles.presentation__desc_bottom}
              >
                Learn more
                <img src="/icons/Arrow_right_blue.svg" alt="Checked" />
              </HashLink>
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
          </div>
        </Container>
      </section>

      <section className={styles.preference} ref={refPreference}>
        <Container>
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
        </Container>
      </section>

      <ContactComponent />
    </div>
  );
}

export default Home;
