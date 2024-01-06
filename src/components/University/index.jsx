import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { UniversityCarousel } from "../Carousel";
import ArticleComponent from "../ArticleComponent";
import RobustComponent from "../RobustComponent";
import UnmatchedComponent from "../UnmatchedComponent";
import ContactComponent from "../ContactComponent";
import { PerspectiveVideo } from "../PerspectiveVideo";
import styles from "./style.module.scss";
import contactStyles from "./contact.style.module.scss";
import { Link } from "react-router-dom";
import PAGES from "src/constants/pages";
import { concatStyles } from "src/utils";

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
  console.log(contactStyles);
  console.log(styles.contact);
  return (
    <div className={styles.container}>
      <section className={styles.top_section}>
        <h1 className={styles.title}>
          360° Virtual Tours Trusted By Leading Universities
        </h1>
        <Link to={PAGES.Contact.path} className={styles.blue_button}>
          Schedule a Demo
        </Link>
        <div className={styles.carousel_frame}>
          <UniversityCarousel />
        </div>
        <button className={styles.transp_button}>See Our Portfolio</button>
      </section>
      <ArticleComponent data={whyCove} />
      <RobustComponent />
      <UnmatchedComponent link={false} />
      <section className={styles.video_box}>
        <PerspectiveVideo
          src="https://player.vimeo.com/progressive_redirect/playback/900288101/rendition/720p/file.mp4?loc=external&log_user=0&signature=c81045571fc430f4ac82bafb4ae494b3691f79d1cdd954e81d8a8ae57535d835"
          placeholder="/images/video-placeholder.jpg"
        >
          <div className={styles.video_box__text}>
            <h3
              className={`${styles.video_box__text__title} ${styles.desktop_only}`}
            >
              Premium quality, intuitive control
            </h3>

            <Link to={PAGES.Contact.path} className={styles.video_box__button}>
              Schedule a Demo
            </Link>
          </div>
        </PerspectiveVideo>
      </section>
      <ContactComponent customStyles={contactStyles} />
    </div>
  );
}

export default University;
