import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { WhyUsCarousel } from "../Carousel";
import ArticleComponent from "../ArticleComponent";
import RobustComponent from "../RobustComponent";
import UnmatchedComponent from "../UnmatchedComponent";
import CaseComponent from "../CaseComponent";
import ContactComponent from "../ContactComponent";
import SliderWhy from "../SliderWhy";
import VideoWhyUsComponent from "./VideoWhyUsComponent";

import styles from "./style.module.scss";
import { Container } from "../Container";
import ROUTES from "src/constants/routes";

const whyCove = {
  label: "Why Cove Creek",
  text: "For over a decade, Cove Creek has been creating stunning 360° virtual tours, custom tailored to the various needs of university campuses, areas of tourism, and more",
};

const ourComitten = {
  label: "Our commitment",
  text: "We are committed to delivering the very best virtual tour experiences. We are proud of what we have accomplished, and are constantly striving to raise the bar.",
};

const case_text =
  "Explore 30 historical tours, from the shores of Normandy to the Pacific Theater Operations.  This ambitious project covered 11 countries and over 150 shooting days.";

function Whyus() {
  const controlsTeam = useAnimation();

  const [refTeam, inViewTeam] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inViewTeam) {
      controlsTeam.start({ opacity: 1, x: 0 });
    }
  }, [inViewTeam, controlsTeam]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        We craft immersive experiences that captivate global audiences
      </h1>
      <VideoWhyUsComponent />
      <ArticleComponent data={whyCove} />
      <RobustComponent />
      <UnmatchedComponent link={true} />
      <section className={styles.carousel}>
        <WhyUsCarousel />
      </section>
      <ArticleComponent data={ourComitten} background={"white"} />
      <div style={{ background: "white", width: "100%" }}>
        <section className={styles.team} ref={refTeam}>
          <Container>
            <div className={styles.team__inner}>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={controlsTeam}
                transition={{ duration: 0.3 }}
              >
                <SliderWhy />
              </motion.div>
              <div className={styles.team__desc}>
                <motion.h3
                  className={styles.team__desc_title}
                  initial={{ opacity: 0, x: 200 }}
                  animate={controlsTeam}
                  transition={{ duration: 0.4 }}
                >
                  Our team
                </motion.h3>
                <motion.p
                  className={styles.team__desc_description}
                  initial={{ opacity: 0, x: 200 }}
                  animate={controlsTeam}
                  transition={{ duration: 0.5 }}
                >
                  A team dedicated to bringing 360° photography to life
                </motion.p>
                <motion.p
                  className={styles.team__desc_text}
                  initial={{ opacity: 0, x: 200 }}
                  animate={controlsTeam}
                  transition={{ duration: 0.6 }}
                >
                  Cove Creek's team is comprised of talented 360° photographers,
                  software developers, and support staff. Our team size provides
                  the efficiency to give personalized attention and deliver
                  amazing results.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  animate={controlsTeam}
                  transition={{ duration: 0.7 }}
                  className={styles.team__desc_bottom}
                >
                  <Link to={ROUTES.Careers}>View careers</Link>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
      </div>

      <CaseComponent
        text={
          "Explore 30 historical tours, from the shores of Normandy to the Pacific Theater Operations.  This ambitious project covered 11 countries and over 150 shooting days."
        }
      />
      <ContactComponent />
    </div>
  );
}

export default Whyus;
