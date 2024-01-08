import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import PAGES from "../../constants/pages";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const location = useLocation();
  const isPrivacy = location.pathname === PAGES.Privacy.path;
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      requestAnimationFrame(() => {
        setIsHeaderVisible(
          prevScrollPos > currentScrollPos || currentScrollPos < 10
        );
      });
      setPrevScrollPos(currentScrollPos);
    };

    if (!isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`${styles.container} ${!isMenuOpen ? styles.menuOpen : ""}`}
    >
      {!isPrivacy && <div className={styles.shadow}></div>}
      {!isMenuOpen && (
        <div
          className={styles.head}
          style={{
            top: isHeaderVisible ? "0px" : "-100px",
            ...(!isMobile &&
              prevScrollPos === 0 && { backgroundColor: "transparent" }),
          }}
        >
          <Link
            to="/"
            className={`${styles.linked} ${
              !isPrivacy ? styles.linked__no_privacy : styles.linked__privacy
            }`}
          ></Link>
          <div className={styles.buttons}>
            <Link
              to={PAGES.Contact.path}
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
            <div className={styles.head_menu}>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`${styles.linked} ${styles.linked__no_privacy}`}
              ></Link>
              <div className={styles.buttons}>
                <Link
                  to={PAGES.Contact.path}
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
            <div className={styles.links} onClick={() => setIsMenuOpen(false)}>
              <Link
                to={PAGES.Portfolio.path}
                className={`${styles.link} ${styles.link__underline}`}
              >
                Portfolio
              </Link>
              <Link
                to={PAGES.WhyUs.path}
                className={`${styles.link} ${styles.link__underline}`}
              >
                Why Us
              </Link>
              <Link
                to={PAGES.CaseStudy.path}
                className={`${styles.link} ${styles.link__underline}`}
              >
                Case Study
              </Link>
              <Link
                to={PAGES.Careers.path}
                className={`${styles.link} ${styles.link__underline}`}
              >
                Careers
              </Link>
              <Link
                to={PAGES.Contact.path}
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
              <a className={styles.contacts__link}>
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
