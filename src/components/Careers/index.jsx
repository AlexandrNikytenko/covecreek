import styles from "./style.module.scss";

function Careers() {
  return (
    <div className={styles.container}>
      <div className={styles.wave_top}></div>
      <p className={styles.title}>
        <p className={styles.title__tip}>Careers</p>
        We’re seeking talented individuals who are passionate about their work
      </p>
      <section className={styles.content}>
        <div className={styles.form}>
          <p className={styles.form__title}>Join our team</p>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="text" placeholder="Phone" className={styles.input} />
          <div className={styles.input_area}>
            <input type="text" placeholder="Resume" className={styles.input} />
            <button className={styles.input_area__button}>Browse Files</button>
          </div>
          <textarea
            rows="4"
            className={styles.input}
            placeholder="Tell us about your project..."
          ></textarea>
          <button className={styles.button}>Submit</button>
        </div>
        <div className={styles.desc}>
          <p className={styles.desc__title}>Current positions</p>
          <p className={styles.desc__text}>
            Submit your resume for consideration.
          </p>
          <div className={styles.desc__list}>
            <p className={styles.desc__list_item}>
              Experienced 360° Photographer
            </p>
            <p className={styles.desc__list_item}>Developer (Ruby on Rails)</p>
            <p className={styles.desc__list_item}>Project Manager</p>
            <p className={styles.desc__list_item}>
              Sales and Business Development
            </p>
            <p className={styles.desc__list_item}>
              360° Photography Internship
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
