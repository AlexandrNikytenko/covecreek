import { Link } from "react-router-dom";

import styles from "./style.module.scss";

function ContactComponent() {
  return (
    <>
    <div className={styles.container}>
      
      <div className={styles.wave_top}></div>

      <div className={styles.get}>
        <p className={styles.desc}>Get started</p>
        <p className={styles.title}>
          Get started on your 360° virtual tour today
        </p>
      </div>

      <div className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="text" placeholder="Phone" className={styles.input} />
        <textarea
          rows="4"
          className={styles.input}
          placeholder="Tell us about your project..."
        ></textarea>
        <button className={styles.button}>Schedule a Demo</button>
      </div>
    </div>
    <div>

      <div className={styles.bottom}></div>
    </div>
    </>
  );
}

export default ContactComponent;
