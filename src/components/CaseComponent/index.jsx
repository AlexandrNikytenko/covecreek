import styles from "./style.module.scss";

function CaseComponent() {
  return (
    <section className={styles.case}>
      <div className={styles.case__desc}>
        <p className={styles.case__desc_title}>Case study</p>
        <p className={styles.case__desc_description}>
          The American Battle Monuments Commission
        </p>
        <p className={styles.case__desc_text}>
          Explore 30 historical tours, from the shores of Normandy to the
          Pacific Theater Operations. This ambitious project covered 11
          countries and over 150 shooting days.
        </p>
      </div>
      <div className={styles.case__image}>
        <button>View Case Study</button>
      </div>
    </section>
  );
}

export default CaseComponent;
