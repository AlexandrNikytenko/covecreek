import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function UnmatchedComponent({link}) {
  return (
    <section className={styles.unmatched}>
      <p className={styles.unmatched__title}>Unmatched quality</p>
      <div className={styles.unmatched__content}>
        <p className={styles.unmatched__content_text}>
          Our attention to detail is unmatched by the competition, with years of
          fine tuning our process to deliver the best imagery possible for your
          campus
        </p>
        {link && <Link to="/portfolio" className={styles.unmatched__content_link}>
          See Our Portfolio
        </Link>}
      </div>
    </section>
  );
}

export default UnmatchedComponent;
