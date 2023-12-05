import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import ContactComponent from "../ContactComponent";

const data = [
  [
    {
      index: 1,
      size: "single",
      imageUrl: "../../../images/Portfolio_1.png",
      title: "University of Toledo",
      text: "Highlights the Toledo campus through stunning visuals, clean design and a custom map",
    },
    {
      index: 2,
      size: "single",
      imageUrl: "../../../images/Portfolio_2.png",
      title: "Seattle University",
      text: "Showcases Seattle U's urban campus and the iconic surround Seattle area",
    },
    {
      index: 3,
      size: "single",
      imageUrl: "../../../images/Portfolio_3.png",
      title: "Indiana University",
      text: "Cove Creek captured all 9 campuses across Indiana for IU School of Medicine ",
    },
  ],
  [
    {
      index: 1,
      size: "double",
      imageUrl: "../../../images/Portfolio_4.png",
      title: "Normandy",
      text: "In 2022, Cove Creek created tours for all 26 overseas American cemeteries",
    },
    {
      index: 2,
      size: "single",
      imageUrl: "../../../images/Portfolio_5.png",
      title: "Arizona State",
      text: "Explore the ASU football program and key areas around campus",
    },
  ],
  [
    {
      index: 1,
      size: "single",
      imageUrl: "../../../images/Portfolio_6.png",
      title: "Kents Hill School",
      text: "Highlights a two-century-old educational institution,  combining tradition with contemporary elements.",
    },
    {
      index: 2,
      size: "single",
      imageUrl: "../../../images/Portfolio_7.png",
      title: "West Texas A&M",
      text: "Experience this vibrant campus situated in Canyon, TX",
    },
    {
      index: 3,
      size: "single",
      imageUrl: "../../../images/Portfolio_8.png",
      title: "EF Pasasdena",
      text: "Tour the premier collection of international boarding schools in the US",
    },
  ],
  [
    {
      index: 1,
      size: "single",
      imageUrl: "../../../images/Portfolio_9.png",
      title: "Seattle Pacific",
      text: "Discover this picturesque campus situated in Seattle's Queen Anne district",
    },
    {
      index: 2,
      size: "double",
      imageUrl: "../../../images/Portfolio_10.png",
      title: "World Tour",
      text: "Explore highlights of Cove Creek’s projects that have taken us around the globe",
    },
  ],
];

function Portfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.wave_top}></div>
      <p className={styles.title}>
        Our eye-catching imagery captivates users, with over a decade of fine
        tuning our process to deliver premium virtual tour content
      </p>
      <section className={styles.grid_container}>
        {data.map((row, index) => (
          <div className={styles.row} key={index}>
            {row.map((item) => (
              <div
                key={item.id}
                className={`${styles.card} ${styles[item.size]}`}
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              >
                <p className={styles.card__title}>{item.title}</p>
                <p className={styles.card__desc}>{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className={styles.frames}>
        <div className={styles.frame}>
          <div
            className={`${styles.frame__top} ${styles.frame__top_image_one}`}
          ></div>
          <p className={styles.frame__title}>advanced cms</p>
          <p className={styles.frame__text}>
            Make it yours in minutes with our advanced CMS system
          </p>
          <Link to="/" className={styles.frame__link}>
            Discover Our CMS
          </Link>
        </div>
        <div className={styles.frame}>
          <div
            className={`${styles.frame__top} ${styles.frame__top_image_two}`}
          ></div>
          <p className={styles.frame__title}>advanced cms</p>
          <p className={styles.frame__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <Link to="/case_study" className={styles.frame__link}>
            View Case Study
          </Link>
        </div>
      </section>

      <ContactComponent />
    </div>
  );
}

export default Portfolio;
