import { cards } from "../../constants/alltours";
import TourGrid from "../TourGrid";
import ContactComponent from "../ContactComponent";
import styles from "./style.module.scss";

function AllTours() {
  return (
    <div className={styles.container}>
      <section className={styles.top_section}>
        <h1 className={styles.title}>American Battle Monuments Commission</h1>
      </section>
      <TourGrid cards={cards} />
      <ContactComponent />
    </div>
  );
}

export default AllTours;
