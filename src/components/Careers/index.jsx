import InputForm from "../InputForm";
import styles from "./style.module.scss";

function Careers() {
  return (
    <div className={styles.container}>
      <div className={styles.wave_top}></div>
      <h1 className={styles.title}>
        We’re seeking talented individuals who are passionate about their work
      </h1>
      <section className={styles.content}>
        <div className={styles.form}>
          <p className={styles.form__title}>Join our team</p>
          <InputForm type={'join'} buttonText={'Submit'}/>
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
