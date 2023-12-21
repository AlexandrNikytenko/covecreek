import { cards } from "../../constants/summercamptours";
import TourGrid from "../TourGrid";
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

      <TourGrid cards={cards} />
      <ContactComponent />
    </div>
  );
}

export default SummerCampTours;
