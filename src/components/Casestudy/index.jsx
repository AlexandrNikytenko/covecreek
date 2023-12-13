import { Link } from "react-router-dom";
import ContactComponent from "../ContactComponent";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";

function CountingComponent({ targetNumber, durationInSeconds }) {
  const [number, setNumber] = useState(0);
  const steps = targetNumber / (durationInSeconds * 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (number < targetNumber) {
        setNumber((prev) => prev + steps);
      } else {
        clearInterval(intervalId);
      }
    }, 1);

    return () => clearInterval(intervalId);
  }, [number, targetNumber, steps]);

  return <div>{Math.round(number)}</div>;
}
function Casestudy() {
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

      <section className={styles.honoring}>
        <h2 className={styles.article_title}>Honoring our Heros</h2>
        <p className={styles.article_text}>
          In 2022, Cove Creek had the distinct privilege of showcasing all
          overseas American cemeteries (26) for the American Battle Monuments
          Commissions. This project was commissioned as part of the 100 year
          ABMC anniversary, serving as both historical preservation and
          educational content.
        </p>
        <br />
        <p className={styles.article_text}>
          Cove Creek took great care and responsibility to help portray these
          sacred sites, and honor the fallen soldiers.
        </p>
      </section>

      <section className={styles.cemetry}>
        <div className={styles.frames}>
          <div className={styles.frame}>
            <div
              className={`${styles.frame__top} ${styles.frame__top_image_one}`}
            ></div>
            <h3 className={styles.frame__title}>Normandy American Cemetery</h3>
            <p className={styles.frame__text}>
              Located on the site of D-Day landings, over 1 million people per
              year visit this historically important site. 9,387 war dead are
              buried here, and an additional 1,557 are inscribed on the Walls of
              the Missing.
            </p>
          </div>
          <div className={styles.frame}>
            <div
              className={`${styles.frame__top} ${styles.frame__top_image_two}`}
            ></div>
            <h3 className={styles.frame__title}>Manila American Cemetery</h3>
            <p className={styles.frame__text}>
              The largest overseas American cemetery, located within urban
              Manila (BGC), lays to rest over 16,000 who died in the Pacific,
              and honors over 36,000 missing in action.
            </p>
          </div>
        </div>
        <div className={styles.frames}>
          <div className={styles.frame}>
            <div
              className={`${styles.frame__top} ${styles.frame__top_image_three}`}
            ></div>
            <h3 className={styles.frame__title}>
              Meuse-Argonne American Cemetery
            </h3>
            <p className={styles.frame__text}>
              The largest World War 1 cemetery, and the largest American
              cemetery in Europe. Most lost their lives in the Meuse-Argonne
              Offensive of 1918.
            </p>
          </div>
          <div className={styles.frame}>
            <div
              className={`${styles.frame__top} ${styles.frame__top_image_four}`}
            ></div>
            <h3 className={styles.frame__title}>
              Sicily-Rome American Cemetery
            </h3>
            <p className={styles.frame__text}>
              One of two Italian American Cemeteries, located on the Italian
              coast, south of Rome.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.scope}>
        <h2 className={styles.article_title}>An ambitious project scope</h2>
        <div className={styles.scope__results}>
          <div className={styles.scope__results_card}>
            <div className={styles.scope__results_card__top}>
              <CountingComponent targetNumber={150} durationInSeconds={3} />
            </div>
            <div className={styles.scope__results_card__bottom}>days</div>
          </div>
          <div className={styles.scope__results_card}>
            <div className={styles.scope__results_card__top}>
              <CountingComponent targetNumber={11} durationInSeconds={3} />
            </div>
            <div className={styles.scope__results_card__bottom}>countries</div>
          </div>
          <div className={styles.scope__results_card}>
            <div className={styles.scope__results_card__top}>
              <CountingComponent targetNumber={30} durationInSeconds={3} />
            </div>
            <div className={styles.scope__results_card__bottom}>
              virtual tours
            </div>
          </div>
        </div>
        <p className={styles.article_text}>
          In addition the 26 cemeteries, Cove Creek captured the four ABMC
          memorials in the United States- Honolulu Memorial, East Coast Memorial
          (San Francisco), West Coast Memorial (New York), and the newly
          constructed World War 1 Memorial adjacent to the White House.
        </p>
        <Link to="/all_tours" className={styles.link}>
          View all 30 tours
          <img src="/icons/Arrow_right_blue.svg" alt="Link" />
        </Link>
      </section>

      <section className={styles.duration}>
        <div className={styles.duration__top}>
          <div className={styles.duration__top_image}></div>
          <div className={styles.duration__top}>
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
          </div>
        </div>
        <p className={styles.article_text}>
          All virtual tours can be viewed on
          <Link to="/" className={styles.article_text__link}>
            {" "}
            ABMC’s website
          </Link>
          . In addition to the digital tours, select images have been used in
          print applications, including the recent joint publication from the
          <Link to="/" className={styles.article_text__link}>
            {" "}
            Smithsonian and ABMC
          </Link>
          .
        </p>
      </section>

      <section className={styles.completion}>
        <div className={styles.completion__image}></div>
        <div className={styles.completion__phrase}>
          <p className={styles.completion__phrase_text}>
            Time will not dim the glory of their deeds.
          </p>
          <p className={styles.completion__phrase_author}>
            General John Pershing
          </p>
        </div>
        <p className={styles.article_text}>
          We invite you to explore these historically significant sites, and
          learn more about the great sacrifices made by the previous
          generations.
        </p>
        <Link to="/all_tours" className={styles.link}>
          View all 30 tours
          <img src="/icons/Arrow_right_blue.svg" alt="Link" />
        </Link>
      </section>

      <ContactComponent />
    </div>
  );
}

export default Casestudy;
