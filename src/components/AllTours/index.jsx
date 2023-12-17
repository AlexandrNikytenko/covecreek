import { Link } from "react-router-dom";
import Row from "./Row";

import { cards } from "../../constants/alltours";

import ContactComponent from "../ContactComponent";

import styles from "./style.module.scss";

function AllTours() {
  return (
    <div className={styles.container}>
      <section className={styles.top_section}>
        <h1 className={styles.title}>American Battle Monuments Commission</h1>
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

export default AllTours;
