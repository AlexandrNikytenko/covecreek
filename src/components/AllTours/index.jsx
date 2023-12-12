import { Link } from "react-router-dom";
import ContactComponent from "../ContactComponent";
import Row from "./Row";
import styles from "./style.module.scss";

function AllTours() {
  const myArray = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <div className={styles.container}>
      <section className={styles.top_section}>
        <p className={styles.title}>American Battle Monuments Commission</p>
        <Link to="/case_study" className={styles.blue_button}>
          View Case Study
        </Link>
      </section>

      <section className={styles.image_container}>
        {myArray.map((card, index) => (
          <Row key={index} index={index + 1} />
          // <div className={styles.image}>
          //   <p className={styles.image__title}>Project Title</p>
          // </div>
        ))}
      </section>

      <ContactComponent />
    </div>
  );
}

export default AllTours;
