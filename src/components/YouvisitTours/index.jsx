import Row from "../AllTours/Row";
import { cards } from "../../constants/youvisittours";
import ContactComponent from "../ContactComponent";
import styles from "./style.module.scss";

function YouvisitTours() {
  return (
    <div className={styles.container}>
      <section className={styles.top_section}>
        <h1 className={styles.small_title}>Cove Creek vs. YouVisit</h1>
        <h2 className={styles.title}>See what makes us stand out</h2>
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

export default YouvisitTours;
