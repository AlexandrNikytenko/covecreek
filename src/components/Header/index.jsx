import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`${styles.container} ${!isMenuOpen ? styles.menuOpen : ""}`}
    >
      <div className={styles.shadow}></div>
      {!isMenuOpen && (
        <div className={styles.head}>
          <Link to="/" className={styles.linked}></Link>
          <div className={styles.buttons}>
            <button className={styles.button_get}>Get in touch</button>
            <button type="button" onClick={() => setIsMenuOpen(true)}>
              <img
                src="/icons/Burger_close.svg"
                alt="Menu close"
                className={styles.burger}
              />
            </button>
          </div>
        </div>
      )}

      <div className={styles.menu}>
        <div className={styles.shadow}></div>
        {isMenuOpen && (
          <>
            <div className={styles.head}>
              <Link to="/" className={styles.linked}></Link>
              <div className={styles.buttons}>
                <button className={styles.button_get}>Get in touch</button>
                <button type="button" onClick={() => setIsMenuOpen(false)}>
                  <img
                    src="/icons/Burger_open.svg"
                    alt="Menu open"
                    className={styles.burger}
                  />
                </button>
              </div>
            </div>
            <p className={styles.full_portfolio}>Full portfolio</p>
            <div className={styles.links} onClick={() => setIsMenuOpen(false)}>
              <Link
                to="/portfolio"
                className={`${styles.link} ${styles.link__underline}`}
              >
                Portfolio
              </Link>
              <Link
                to="/whyus"
                className={`${styles.link} ${styles.link__underline}`}
              >
                Why Us
              </Link>
              <Link
                to="/case_study"
                className={`${styles.link} ${styles.link__underline}`}
              >
                Case Study
              </Link>
              <Link
                to="/careers"
                className={`${styles.link} ${styles.link__underline}`}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className={`${styles.link} ${styles.link__underline}`}
              >
                Contact
              </Link>
            </div>
            <div className={styles.contacts}>
              <p>213-770-8211</p>
              <div className={styles.contacts__devider}></div>
              <p>info@covecreekproductions.com</p>
              <div className={styles.contacts__devider}></div>
              <p>2390 E Camelback Rd, Phoenix, AZ 85016</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
