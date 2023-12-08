import styles from "./style.module.scss";
import InputForm from "../InputForm";

function ContactComponent() {
  return (
    <section className={styles.container}>
      <div className={styles.wave_top}></div>
      <div className={styles.get}>
        <p className={styles.desc}>Get started</p>
        <p className={styles.title}>
          Get started on your 360° virtual tour today
        </p>
      </div>
      <InputForm type={"start"} buttonText={"Schedule a Demo"} />
    </section>
  );
}

export default ContactComponent;
