import { Link, useLocation } from "react-router-dom";

import styles from "./style.module.scss";

function Footer() {
  const location = useLocation();
  const isPrivacy = location.pathname === "/privacy";

  return (
    <div
      className={styles.container}
      style={isPrivacy ? { backgroundColor: "#09131D", paddingTop: "0" } : null}
    >
      {!isPrivacy && <div className={styles.bottom}></div>}
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <p className={styles.title}>Get in touch</p>
          <a className={styles.link} href="tel:+12137708211">
            213-770-8211
          </a>
          <a
            href="mailto:info@covecreekproductions.com"
            className={styles.link}
          >
            info@covecreekproductions.com
          </a>
          <a
            className={styles.link}
            href="https://www.google.com/maps/search/?api=1&query=2390+E+Camelback+Rd%2C+Phoenix%2C+AZ+85016"
            target="_blank"
            rel="noopener noreferrer"
          >
            2390 E Camelback Rd, Phoenix, AZ 85016
          </a>
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
          <Link to="/privacy" className={styles.policy__text}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
