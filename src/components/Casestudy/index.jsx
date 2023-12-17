import { Link } from "react-router-dom";
import ContactComponent from "../ContactComponent";
import CountingComponent from "./CountingComponent";
import styles from "./style.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Casestudy() {
  const controlsHonoring = useAnimation();
  const controlsFramesFirst = useAnimation();
  const controlsFramesSecond = useAnimation();
  const controlsScope = useAnimation();
  const controlsDuration = useAnimation();
  const controlsCompletion = useAnimation();

  const [refHonoring, inViewHonoring] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refFramesFirst, inViewFramesFirst] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refFramesSecond, inViewFramesSecond] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refScope, inViewScope] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refDuration, inViewDuration] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refCompletion, inViewCompletion] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inViewHonoring) {
      controlsHonoring.start({ opacity: 1, y: 0 });
    }
    if (inViewFramesFirst) {
      controlsFramesFirst.start({ opacity: 1, y: 0 });
    }
    if (inViewFramesSecond) {
      controlsFramesSecond.start({ opacity: 1, y: 0 });
    }
    if (inViewScope) {
      controlsScope.start({ opacity: 1, y: 0 });
    }
    if (inViewDuration) {
      controlsDuration.start({ opacity: 1, y: 0 });
    }
    if (inViewCompletion) {
      controlsCompletion.start({ opacity: 1, y: 0 });
    }
  }, [
    inViewHonoring,
    inViewFramesFirst,
    inViewFramesSecond,
    inViewScope,
    inViewDuration,
    inViewCompletion,
    controlsHonoring,
    controlsFramesFirst,
    controlsFramesSecond,
    controlsScope,
    controlsDuration,
    controlsCompletion,
  ]);

  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <div className={styles.head__desc}>
          <p className={styles.head__desc_name}>Case Study</p>

          <h1 className={styles.head__desc_title}>
            American Battle Monuments Commission
          </h1>
        </div>
      </section>

      <section className={styles.honoring} ref={refHonoring}>
        <motion.h3
          className={styles.small_heading}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsHonoring}
          transition={{ duration: 0.3 }}
        >
          {" "}
          Honoring our Heros
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          animate={controlsHonoring}
          transition={{ duration: 0.3 }}
          className={styles.text_title}
        >
          Documenting America's History{" "}
        </motion.p>

        <motion.p
          className={styles.article_text}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsHonoring}
          transition={{ duration: 0.4 }}
        >
          In 2022, Cove Creek had the distinct privilege of showcasing all
          overseas American cemeteries (26) for the American Battle Monuments
          Commissions. This project was commissioned as part of the 100 year
          ABMC anniversary, serving as both historical preservation and
          educational content.
        </motion.p>
        <br />
        <motion.p
          className={styles.article_text}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsHonoring}
          transition={{ duration: 0.5 }}
        >
          Cove Creek took great care and responsibility to help portray these
          sacred sites, and honor the fallen soldiers.
        </motion.p>
      </section>

      <section className={styles.cemetry}>
        <div className={styles.frames} ref={refFramesFirst}>
          <motion.div
            className={styles.frame}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFramesFirst}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`${styles.frame__top} ${styles.frame__top_image_one}`}
            ></div>
            <motion.h3
              className={styles.frame__title}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsFramesFirst}
              transition={{ duration: 0.5 }}
            >
              Normandy American Cemetery
            </motion.h3>
            <motion.p
              className={styles.frame__text}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsFramesFirst}
              transition={{ duration: 0.7 }}
            >
              Located on the site of D-Day landings, over 1 million people per
              year visit this historically important site. 9,387 war dead are
              buried here, and an additional 1,557 are inscribed on the Walls of
              the Missing.
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.frame}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFramesFirst}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`${styles.frame__top} ${styles.frame__top_image_two}`}
            ></div>
            <motion.h3
              className={styles.frame__title}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsFramesFirst}
              transition={{ duration: 0.5 }}
            >
              Manila American Cemetery
            </motion.h3>
            <motion.p
              className={styles.frame__text}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsFramesFirst}
              transition={{ duration: 0.7 }}
            >
              The largest overseas American cemetery, located within urban
              Manila (BGC), lays to rest over 16,000 who died in the Pacific,
              and honors over 36,000 missing in action.
            </motion.p>
          </motion.div>
        </div>
        <div className={styles.frames} ref={refFramesSecond}>
          <motion.div
            className={styles.frame}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFramesSecond}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`${styles.frame__top} ${styles.frame__top_image_three}`}
            ></div>
            <motion.h3
              className={styles.frame__title}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsFramesSecond}
              transition={{ duration: 0.5 }}
            >
              Meuse-Argonne American Cemetery
            </motion.h3>
            <motion.p
              className={styles.frame__text}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsFramesSecond}
              transition={{ duration: 0.7 }}
            >
              The largest World War 1 cemetery, and the largest American
              cemetery in Europe. Most lost their lives in the Meuse-Argonne
              Offensive of 1918.
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.frame}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsFramesSecond}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`${styles.frame__top} ${styles.frame__top_image_four}`}
            ></div>
            <motion.h3
              className={styles.frame__title}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsFramesSecond}
              transition={{ duration: 0.5 }}
            >
              Sicily-Rome American Cemetery
            </motion.h3>
            <motion.p
              className={styles.frame__text}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsFramesSecond}
              transition={{ duration: 0.7 }}
            >
              One of two Italian American Cemeteries, located on the Italian
              coast, south of Rome.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className={styles.scope} ref={refScope}>
        <motion.h2
          className={styles.article_title}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsScope}
          transition={{ duration: 0.3 }}
        >
          An ambitious project scope
        </motion.h2>
        <div className={styles.scope__results}>
          <motion.div
            className={styles.scope__results_card}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsScope}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.scope__results_card__top}>
              <CountingComponent targetNumber={150} durationInSeconds={3} />
            </div>
            <div className={styles.scope__results_card__bottom}>days</div>
          </motion.div>
          <motion.div
            className={styles.scope__results_card}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsScope}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.scope__results_card__top}>
              <CountingComponent targetNumber={11} durationInSeconds={3} />
            </div>
            <div className={styles.scope__results_card__bottom}>countries</div>
          </motion.div>
          <motion.div
            className={styles.scope__results_card}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsScope}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.scope__results_card__top}>
              <CountingComponent targetNumber={30} durationInSeconds={3} />
            </div>
            <div className={styles.scope__results_card__bottom}>
              virtual tours
            </div>
          </motion.div>
        </div>
        <motion.p
          className={styles.article_text}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsScope}
          transition={{ duration: 0.8 }}
        >
          In addition the 26 cemeteries, Cove Creek captured the four ABMC
          memorials in the United States- Honolulu Memorial, East Coast Memorial
          (San Francisco), West Coast Memorial (New York), and the newly
          constructed World War 1 Memorial adjacent to the White House.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={controlsScope}
          transition={{ duration: 0.9 }}
        >
          <Link to="/all_tours" className={styles.link}>
            View all 30 tours
            <img src="/icons/Arrow_right_blue.svg" alt="Link" />
          </Link>
        </motion.div>
      </section>

      <section className={styles.duration} ref={refDuration}>
        <div className={styles.duration__top}>
          <motion.div
            className={styles.duration__top_image}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsDuration}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div
            className={styles.duration__top}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsDuration}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className={styles.article_text}>
                The project took a year to complete, spanning over 150 shooting
                days, and adhering an extensive post-production schedule. . Cove
                Creek planned all global logistics and shooting schedules, with
                the help of the great staff at ABMC.
              </p>
              <br />
              <p className={styles.article_text}>
                Cove Creek adeptly managed logistical challenges, accommodating
                visitor hours, aligning with grounds crew schedules, and
                navigating construction obstacles, all while upholding a
                commitment to producing a high-quality product with minimal
                disruption.
              </p>
              <br />
              <p className={styles.article_text}>
                Cove Creek continues its work with ABMC, providing a robust
                content management system, which allows ABMC employees to keep
                their 30 tours updated with new digital assets.
              </p>
              <br />
            </div>
          </motion.div>
        </div>
        <motion.p
          className={styles.article_text}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsDuration}
          transition={{ duration: 0.7 }}
        >
          All virtual tours can be viewed on
          <Link to="/" className={styles.article_text__link}>
            ABMC’s website
          </Link>
          . In addition to the digital tours, select images have been used in
          print applications, including the recent joint publication from the
          <Link to="/" className={styles.article_text__link}>
            Smithsonian and ABMC
          </Link>
          .
        </motion.p>
      </section>

      <section className={styles.completion} ref={refCompletion}>
        <motion.img
          width={475}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsCompletion}
          transition={{ duration: 0.3 }}
          src="images/Imbc_book.png"
          alt="Book"
          className={styles.completion__image}
        />
        <motion.div
          className={styles.completion__phrase}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsCompletion}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.completion__phrase_text}>
            Time will not dim the glory of their deeds.
          </p>
          <p className={styles.completion__phrase_author}>
            General John Pershing
          </p>
        </motion.div>
        <motion.p
          className={styles.article_text}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsCompletion}
          transition={{ duration: 0.7 }}
        >
          We invite you to explore these historically significant sites, and
          learn more about the great sacrifices made by the previous
          generations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={controlsCompletion}
          transition={{ duration: 0.8 }}
        >
          <Link to="/all_tours" className={styles.link}>
            View all 30 tours
            <img src="/icons/Arrow_right_blue.svg" alt="Link" />
          </Link>
        </motion.div>
      </section>

      <ContactComponent />
    </div>
  );
}

export default Casestudy;
