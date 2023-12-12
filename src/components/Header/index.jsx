import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isPrivacy = location.pathname === "/privacy";

  return (
    <div
      className={`${styles.container} ${!isMenuOpen ? styles.menuOpen : ""}`}
    >
      {!isPrivacy && <div className={styles.shadow}></div>}
      {!isMenuOpen && (
        <div className={styles.head}>
          <Link
            to="/"
            className={`${styles.linked} ${
              !isPrivacy ? styles.linked__no_privacy : styles.linked__privacy
            }`}
          ></Link>
          <div className={styles.buttons}>
            <Link
              to="/contact"
              className={`${styles.button_get} ${
                !isPrivacy
                  ? styles.button_get__no_privacy
                  : styles.button_get__privacy
              }`}
            >
              Get in touch
            </Link>
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
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`${styles.linked} ${styles.linked__no_privacy}`}
              ></Link>
              <div className={styles.buttons}>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`${styles.button_get} ${styles.button_get__no_privacy}`}
                >
                  Get in touch
                </Link>
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
              <a href="tel:+12137708211" className={styles.contacts__link}>
                213-770-8211
              </a>
              <div className={styles.contacts__devider}></div>
              <a
                href="mailto:info@covecreekproductions.com"
                className={styles.contacts__link}
              >
                info@covecreekproductions.com
              </a>
              <div className={styles.contacts__devider}></div>
              <a
                className={styles.contacts__link}
                href="https://www.google.com/maps/search/?api=1&query=2390+E+Camelback+Rd%2C+Phoenix%2C+AZ+85016"
                target="_blank"
                rel="noopener noreferrer"
              >
                2390 E Camelback Rd, Phoenix, AZ 85016
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
