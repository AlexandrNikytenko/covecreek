import { useState } from "react";
import InputForm from "../InputForm";
import styles from "./style.module.scss";

function Contact() {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const fetchData = (data) => {
    setIsMessageSent(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wave_top}></div>

      <section className={styles.form}>
        <p className={styles.tip}>Get in touch</p>
        <h1 className={styles.form__title}>
          Get started on your 360° virtual tour today
        </h1>
        {!isMessageSent ? (
          <InputForm buttonText={"Send Message"} fetchData={fetchData} />
        ) : (
          <div className={styles.form__sent}>Message sent!</div>
        )}
      </section>

      <p className={styles.tip}>Our commitment to you</p>
      <h2 className={styles.title}>
        We are committed to delivering the very best virtual tours. While we are
        proud of what we have accomplished, we are constantly striving to raise
        the bar.
      </h2>
    </div>
  );
}

export default Contact;
