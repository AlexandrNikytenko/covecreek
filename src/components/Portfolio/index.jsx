import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ContactComponent from "../ContactComponent";
import styles from "./style.module.scss";
import CardPortfolio from "./CardPortfolio";
import { HashLink } from "react-router-hash-link";
import PAGES from "src/constants/pages";
import Container from "../Container";

const data = [
  [
    {
      index: 1,
      size: "single",
      imageUrl: "/images/portfolio/Portfolio_1.jpg",
      title: "University of Toledo",
      text: "Highlights the Toledo campus through stunning visuals, clean design and a custom map",
      url: "https://tours.covecreekproductions.com/toledo/",
    },
    {
      index: 2,
      size: "single",
      imageUrl: "/images/portfolio/Portfolio_2.jpg",
      title: "Seattle University",
      text: "Showcases Seattle U's urban campus and the iconic surround Seattle area",
      url: "https://tours.covecreekproductions.com/seattle-university-cc/",
    },
    {
      index: 3,
      size: "single",
      imageUrl: "/images/portfolio/Portfolio_3.jpg",
      title: "Indiana University",
      text: "Cove Creek captured all 9 campuses across Indiana for IU School of Medicine ",
      url: "https://covecreekproductions.com/tours/indiana/", // needs updating
    },
  ],
  [
    {
      index: 1,
      size: "double",
      imageUrl: "/images/portfolio/Portfolio_4.jpg",
      title: "Normandy American Cemetery",
      text: "In 2022, Cove Creek created tours for all 26 overseas American cemeteries",
      url: "https://tours.covecreekproductions.com/normandy/",
    },
    {
      index: 2,
      size: "single",
      imageUrl: "/images/portfolio/Portfolio_5.jpg",
      title: "Arizona State",
      text: "Explore the ASU football program and key areas around campus",
      url: "https://covecreekproductions.com/tours/asu_football/", // needs updating
    },
  ],
  [
    {
      index: 1,
      size: "single",
      imageUrl: "/images/portfolio/Portfolio_6.jpg",
      title: "Kents Hill School",
      text: "Highlights a two-century-old educational institution,  combining tradition with contemporary elements.",
      url: "https://tours.covecreekproductions.com/kents-hill-school/",
    },
    {
      index: 2,
      size: "single",
      imageUrl: "/images/portfolio/Portfolio_7.jpg",
      title: "West Texas A&M",
      text: "Experience this vibrant campus situated in Canyon, TX",
      url: "https://tours.covecreekproductions.com/wtamu-cc/",
    },
    {
      index: 3,
      size: "single",
      imageUrl: "/images/portfolio/Portfolio_8.jpg",
      title: "EF Pasasdena",
      text: "Tour the premier collection of international boarding schools in the US",
      url: "https://covecreekproductions.com/tours/ef_academy_pasadena/", // needs updating
    },
  ],
  [
    {
      index: 1,
      size: "single",
      imageUrl: "/images/portfolio/Portfolio_9.jpg",
      title: "Seattle Pacific",
      text: "Discover this picturesque campus situated in Seattle's Queen Anne district",
      url: "https://covecreekproductions.com/tours/spu_cc/", // needs updating
    },
    {
      index: 2,
      size: "double",
      imageUrl: "/images/portfolio/Portfolio_10.jpg",
      title: "World Tour",
      text: "Explore highlights of Cove Creek’s project that have taken us around the globe",
      url: "https://tours.covecreekproductions.com/world-tour/",
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
      <Container className={styles.title_container}>
        <h1
          className={styles.title}
          ref={refTitle}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsTitle}
          transition={{ duration: 0.4 }}
        >
          We combine <span>beautiful imagery</span> and{" "}
          <span>innovative design</span> to create a premium virtual tour{" "}
          experience
        </h1>
      </Container>
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
                url={item.url}
              />
            ))}
          </div>
        ))}
      </section>

      <section className={styles.frames} ref={refFrames}>
        <HashLink
          to={PAGES.WhyUs.path + "#robust-cms"}
          className={styles.frame}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsFrames}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.4 }}
            className={styles.frame__image}
          >
            <img src="/images/portfolio/Portfolio_1.jpg" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.5 }}
            className={styles.frame__title}
          >
            Advanced CMS
          </motion.h3>
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
            <button className={styles.frame__link}>Discover Our CMS</button>
          </motion.div>
        </HashLink>

        <Link
          to={PAGES.CaseStudy.path}
          className={`${styles.desktop_only} ${styles.frame}`}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsFrames}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.6 }}
            className={styles.frame__image}
          >
            <img src="/images/portfolio/Portfolio_4.jpg" />
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.7 }}
            className={styles.frame__title}
          >
            Case Study
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.8 }}
            className={styles.frame__text}
          >
            American Battle Monuments Commission
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFrames}
            transition={{ duration: 0.9 }}
          >
            <button className={styles.frame__link}>View Case Study</button>
          </motion.div>
        </Link>
      </section>

      <ContactComponent />
    </div>
  );
}

export default Portfolio;
