import { Link, Routes, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import PAGES from "../../constants/pages";

function Footer() {
  const location = useLocation();
  const isPrivacy = location.pathname === PAGES.Privacy.path;

  return (
    <div
      className={styles.container}
      style={isPrivacy ? { backgroundColor: "#09131D", paddingTop: "0" } : null}
    >
      {!isPrivacy && <div className={styles.bottom}></div>}
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <h3 className={styles.title}>Get in touch</h3>

          <a className={styles.link} href="tel:+12137708211">
            213-770-8211
          </a>
          <a
            href="mailto:info@covecreekproductions.com"
            className={styles.link}
          >
            info@covecreekproductions.com
          </a>
          <a className={styles.link}>2390 E Camelback Rd, Phoenix, AZ 85016</a>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.title}>Our Work</h3>

          <Link to={PAGES.Portfolio.path} className={styles.link}>
            Portfolio
          </Link>
          <Link to={PAGES.CaseStudy.path} className={styles.link}>
            Case Study
          </Link>
          <Link to={PAGES.WhyUs.path} className={styles.link}>
            Why Us
          </Link>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.title}>More</h3>
          <Link to={PAGES.Careers.path} className={styles.link}>
            Careers
          </Link>
          <Link to={PAGES.Contact.path} className={styles.link}>
            Contact
          </Link>
        </div>
      </div>
      <div className={styles.bottom}></div>
      <div className={`${styles.policy} ${styles.policy__text}`}>
        <p>Copyright © 2023 Cove Creek Productions</p>
        <p>
          <Link to={PAGES.Privacy.path} className={styles.policy__text}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
