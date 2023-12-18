import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { UniversityCarousel } from "../Carousel";
import ArticleComponent from "../ArticleComponent";
import RobustComponent from "../RobustComponent";
import UnmatchedComponent from "../UnmatchedComponent";
import CaseComponent from "../CaseComponent";
import ContactComponent from "../ContactComponent";

import styles from "./style.module.scss";

const whyCove = {
  label: "Why Cove Creek",
  text: "For over a decade, Cove Creek has crafted captivating 360° virtual tours for university campuses with our cutting-edge CMS and industry-leading image quality",
};

const ourComitten = {
  label: "Our commitment",
  text: "We are committed to delivering the very best virtual tour experiences. We are proud of what we have accomplished, and are constantly striving to raise the bar.",
};

const case_text =
  "Write something about how you managed to cover 58 locations and 17 countries in such a short period of time.";

function University() {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <div className={styles.container}>
      <section className={styles.top_section}>
        <h1 className={styles.title}>
          360° virtual tour experiences trusted by leading universities
        </h1>
        <button className={styles.blue_button}>Schedule a Demo</button>
        <div className={styles.carousel_frame}>
          <UniversityCarousel />
        </div>
        <button className={styles.transp_button}>See Our Portfolio</button>
      </section>
      <ArticleComponent data={whyCove} />
      <RobustComponent />
      <UnmatchedComponent link={false} />
      <section className={styles.image_container} ref={ref}>
        <motion.div
          className={styles.image_premium}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <p className={styles.image_premium__title}>
            Premium quality, intuitive control
          </p>
          <button className={styles.blue_button}>Schedule a Demo</button>
        </motion.div>
      </section>
      <section style={{ background: "white", width: "100%" }}>
        <ArticleComponent
          data={ourComitten}
          background={
            "linear-gradient(180deg, rgba(245, 245, 245, 0.00) 0%, #F5F5F5 100%)"
          }
          link={true}
        />
      </section>
      <CaseComponent text={case_text} />
      <ContactComponent />
    </div>
  );
}

export default University;
