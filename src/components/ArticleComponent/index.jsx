import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function ArticleComponent({ data, background, link }) {
  return (
    <section className={styles.article} style={{ background }}>
      <p className={styles.article__title}>{data.label}</p>
      <p className={styles.article__desc}>{data.text}</p>
      {link && (
        <Link to="/" className={styles.article__link}>
          What makes us unique
          <img src="/icons/Arrow_right_blue.svg" alt="Link" />
        </Link>
      )}
    </section>
  );
}

export default ArticleComponent;
