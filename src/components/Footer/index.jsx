import { Link } from "react-router-dom";

import styles from "./style.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <p className={styles.title}>Get in touch</p>
          <p className={styles.link}>213-770-8211</p>
          <p className={styles.link}>info@covecreekproductions.com</p>
          <p className={styles.link}>2390 E Camelback Rd, Phoenix, AZ 85016 </p>
        </div>
        <div className={styles.contact}>
          <p className={styles.title}>Our Work</p>
          <Link to="/portfolio" className={styles.link}>
            Portfolio
          </Link>
          <Link to="/case_study" className={styles.link}>
            Case Study
          </Link>
          <Link to="/whyus" className={styles.link}>
            Why Us
          </Link>
        </div>
        <div className={styles.contact}>
          <p className={styles.title}>More</p>
          <Link to="/careers" className={styles.link}>
            Careers
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
      <div className={styles.bottom}></div>
      <div className={`${styles.policy} ${styles.policy__text}`}>
        <p>Copyright © 2023 Cove Creek Productions</p>
        <p>
          <Link to="/whyus" className={styles.policy__text}>
            Privacy Policy
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to="/" className={styles.policy__text}>
            Terms of Use
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
