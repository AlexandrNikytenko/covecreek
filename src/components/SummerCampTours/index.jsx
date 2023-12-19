import { Link } from "react-router-dom";
import Row from "../AllTours/Row";
import { cards } from "../../constants/summercamptours";
import ContactComponent from "../ContactComponent";
import styles from "./style.module.scss";

function SummerCampTours() {
  return (
    <div className={styles.container}>
      <section className={styles.top_section}>
        <h1 className={styles.title}>
          For over a decade, Cove Creek has showcased summer camp to new campers
          and staff members.
        </h1>
      </section>

      <section className={styles.image_container}>
        {cards.map((card, index) => (
          <Row key={card.id} index={card.id} card={card} />
        ))}
      </section>

      <ContactComponent />
    </div>
  );
}

export default SummerCampTours;
