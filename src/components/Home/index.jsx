import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import HomeCarousel from "../Carousel";
import ContactComponent from "../ContactComponent";

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wave_top}></div>
      <section className={styles.image_box}>
        <p className={styles.image_title}>360° Virtual Tours</p>
        <p className={styles.image_desc}>Premium Quality, Intuitive Control</p>
      </section>
      <img
        src="/icons/Arrow_down_blue.svg"
        alt="Logo"
        className={styles.arrow_down}
        onClick={() => scrollToSection("mySection")}
      />
      <section className={styles.leading} id="mySection">
        <p className={styles.leading__tours}>premium 360° tours</p>
        <p className={styles.leading__desc}>
          Cove Creek is the leading producer of stunning, interactive virtual
          tours, custom made for <span>university</span> <span>campuses</span>{" "}
          and <span>tourism</span> locations worldwide
        </p>
      </section>
      <HomeCarousel />
      <Link to="/portfolio" className={styles.button_see}>
        See Our Portfolio
      </Link>
      <section className={styles.presentation}>
        <div className={styles.presentation__desc}>
          <p className={styles.presentation__desc_top}>Unmatched Quality</p>
          <p className={styles.presentation__desc_title}>
            Attention to detail like you’ve never seen before
          </p>
          <Link to="/whyus" className={styles.presentation__desc_bottom}>
            What makes us unique
            <img src="/icons/Arrow_right_blue.svg" alt="Checked" />
          </Link>
        </div>
        <div
          className={`${styles.presentation__image} ${styles.presentation__image_att}`}
        ></div>
      </section>
      <section
        className={`${styles.presentation} ${styles.presentation__direct}`}
      >
        <div className={styles.presentation__desc}>
          <p className={styles.presentation__desc_top}>Advanced CMS</p>
          <p className={styles.presentation__desc_title}>
            Make it yours in minutes with our advanced CMS
          </p>
          <Link to="/whyus" className={styles.presentation__desc_bottom}>
            Learn more
            <img src="/icons/Arrow_right_blue.svg" alt="Checked" />
          </Link>
        </div>
        <div
          className={`${styles.presentation__image} ${styles.presentation__image_make}`}
        >
          <div className={styles.presentation__buttons}>
            <button className={styles.presentation__buttons_button}>
              <img src="/icons/Add_white.svg" alt="Checked" />
              Add Hotspot
            </button>
            <button className={styles.presentation__buttons_button}>
              <img src="/icons/Filter_center_focus.svg" alt="Checked" />
              Set View
            </button>
          </div>
        </div>
      </section>
      <section className={styles.preference}>
        <div className={styles.preference__list}>
          <div className={styles.preference__list_items}>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Client-Controlled CMS
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Custom Routes
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Slate Implementation
            </p>
          </div>
          <div className={styles.preference__list_items}>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Custom CTAs
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Branding Controls
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              ADA Compliant (WCAG 2.2)
            </p>
          </div>
          <div className={styles.preference__list_items}>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Analytics Reporting
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Digital Asset Management
            </p>
            <p className={styles.preference__list_item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Self-Guided Routing
            </p>
          </div>
        </div>
      </section>
      <ContactComponent />
    </div>
  );
}

export default Home;
