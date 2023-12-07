import styles from "./style.module.scss";

function CaseComponent({text}) {
  return (
    <section className={styles.case}>
      <div className={styles.case__desc}>
        <p className={styles.case__desc_title}>Case study</p>
        <p className={styles.case__desc_description}>
          The American Battle Monuments Commission
        </p>
        <p className={styles.case__desc_text}>
          {text}
        </p>
      </div>
      <div className={styles.case__image}>
        <button className={styles.case__image_button}>View Case Study</button>
      </div>
    </section>
  );
}

export default CaseComponent;
