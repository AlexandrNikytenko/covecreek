import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ContactComponent from "../ContactComponent";
import styles from "./style.module.scss";
import CardPortfolio from "./CardPortfolio";

const data = [
  [
    {
      index: 1,
      size: "single",
      imageUrl: "../../../images/portfolio/Portfolio_1.jpg",
      title: "University of Toledo",
      text: "Highlights the Toledo campus through stunning visuals, clean design and a custom map",
    },
    {
      index: 2,
      size: "single",
      imageUrl: "../../../images/portfolio/Portfolio_2.jpg",
      title: "Seattle University",
      text: "Showcases Seattle U's urban campus and the iconic surround Seattle area",
    },
    {
      index: 3,
      size: "single",
      imageUrl: "../../../images/portfolio/Portfolio_3.jpg",
      title: "Indiana University",
      text: "Cove Creek captured all 9 campuses across Indiana for IU School of Medicine ",
    },
  ],
  [
    {
      index: 1,
      size: "double",
      imageUrl: "../../../images/portfolio/Portfolio_4.jpg",
      title: "Normandy",
      text: "In 2022, Cove Creek created tours for all 26 overseas American cemeteries",
    },
    {
      index: 2,
      size: "single",
      imageUrl: "../../../images/portfolio/Portfolio_5.jpg",
      title: "Arizona State",
      text: "Explore the ASU football program and key areas around campus",
    },
  ],
  [
    {
      index: 1,
      size: "single",
      imageUrl: "../../../images/portfolio/Portfolio_6.jpg",
      title: "Kents Hill School",
      text: "Highlights a two-century-old educational institution,  combining tradition with contemporary elements.",
    },
    {
      index: 2,
      size: "single",
      imageUrl: "../../../images/portfolio/Portfolio_7.jpg",
      title: "West Texas A&M",
      text: "Experience this vibrant campus situated in Canyon, TX",
    },
    {
      index: 3,
      size: "single",
      imageUrl: "../../../images/portfolio/Portfolio_8.jpg",
      title: "EF Pasasdena",
      text: "Tour the premier collection of international boarding schools in the US",
    },
  ],
  [
    {
      index: 1,
      size: "single",
      imageUrl: "../../../images/portfolio/Portfolio_9.jpg",
      title: "Seattle Pacific",
      text: "Discover this picturesque campus situated in Seattle's Queen Anne district",
    },
    {
      index: 2,
      size: "double",
      imageUrl: "../../../images/portfolio/Portfolio_10.jpg",
      title: "World Tour",
      text: "Explore highlights of Cove Creek’s projects that have taken us around the globe",
    },
  ],
];

function Portfolio() {
  const controlsTitle = useAnimation();
  const controlsFrames = useAnimation();

  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refFrames, inViewFrames] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inViewTitle) {
      controlsTitle.start({ opacity: 1, y: 0 });
    }
    if (inViewFrames) {
      controlsFrames.start({ opacity: 1, y: 0 });
    }
  }, [inViewTitle, inViewFrames, controlsTitle, controlsFrames]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className={styles.container}>
      <motion.p
        className={styles.title}
        ref={refTitle}
        initial={{ opacity: 0, y: 200 }}
        animate={controlsTitle}
        transition={{ duration: 0.4 }}
      >
        We combine&nbsp;<span>beautiful imagery</span>&nbsp;and&nbsp;
        <span>innovative design</span>&nbsp;to create a premium virtual tour
        experience
      </motion.p>
      <section className={styles.grid_container}>
        <div className={styles.wave_top}></div>
        {data.map((row, index) => (
          <div className={styles.row} key={index}>
            {row.map((item, index) => (
              <CardPortfolio
                zIndex={hoveredIndex === index ? 1 : 0}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
                item={item}
                index={index}
                key={index}
              />
            ))}
          </div>
        ))}
      </section>

      <section className={styles.frames} ref={refFrames}>
        <motion.div
          className={styles.frame}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsFrames}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.4 }}
            className={`${styles.frame__top} ${styles.frame__top_image_one}`}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.5 }}
            className={styles.frame__title}
          >
            advanced cms
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.6 }}
            className={styles.frame__text}
          >
            Make it yours in minutes with our advanced CMS system
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.7 }}
          >
            <Link to="/" className={styles.frame__link}>
              Discover Our CMS
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.frame}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsFrames}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.6 }}
            className={`${styles.frame__top} ${styles.frame__top_image_two}`}
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.7 }}
            className={styles.frame__title}
          >
            Case Study
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.8 }}
            className={styles.frame__text}
          >
            American Battle Monuments Comission
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.9 }}
          >
            <Link to="/case_study" className={styles.frame__link}>
              View Case Study
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <ContactComponent />
    </div>
  );
}

export default Portfolio;
