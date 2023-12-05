import styles from "./style.module.scss";

function ArticleComponent({data, background}) {
  return (
      <section className={styles.why} style={{background}}>
        <p className={styles.why__title}>{data.label}</p>
        <p className={styles.why__desc}>
          {data.text}
        </p>
      </section>

  );
}

export default ArticleComponent;
