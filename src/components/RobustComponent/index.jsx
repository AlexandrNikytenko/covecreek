import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function RobustComponent() {
  return (
    <section className={styles.content}>
      <div className={styles.content__box}>
        <div className={styles.content__box_image}>
          <div className={styles.content__box_image__buttons}>
            <button className={styles.content__box_image__buttons_button}>
              <img src="/icons/Add_white.svg" alt="Checked" />
              Add Hotspot
            </button>
            <button className={styles.content__box_image__buttons_button}>
              <img src="/icons/Filter_center_focus.svg" alt="Checked" />
              Set View
            </button>
          </div>
        </div>
        <div className={styles.content__box_set}>
          <div
            className={`${styles.content__box_set__item} ${styles.content__box_set__one}`}
          >
            <button className={styles.content__box_set__button}>
              High Arial
            </button>
          </div>
          <div
            className={`${styles.content__box_set__item} ${styles.content__box_set__two}`}
          >
            <button className={styles.content__box_set__button}>
              Campus Night
            </button>
          </div>
          <div
            className={`${styles.content__box_set__item} ${styles.content__box_set__three}`}
          >
            <button className={styles.content__box_set__button}>
              Centennial Mall North
            </button>
          </div>
          <div
            className={`${styles.content__box_set__item} ${styles.content__box_set__four}`}
          >
            <button className={styles.content__box_set__button}>
              Centennial Mall West
            </button>
          </div>
        </div>
      </div>
      <div className={styles.content__desc}>
        <p className={styles.content__desc_title}>robust content management</p>
        <p className={styles.content__desc_description}>
          Our proprietary 360° software and cloud-based CMS empowers clients to
          control their virtual tour
        </p>
        <div className={styles.content__desc_list}>
          <div className={styles.content__desc_list__column}>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Digital Asset Management
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Branding Controls
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Custom CTAs
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Analytic Reports
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Multi Language Support
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              QR Code Generator
            </p>
          </div>
          <div className={styles.content__desc_list__column}>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Slate Implementation
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Link Shortening
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Salesforce Integration
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Upload Photos & Videos
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Annual Support
            </p>
            <p className={styles.content__desc_list__item}>
              <img src="/icons/Checked_blue.svg" alt="Checked" />
              Route Customization
            </p>
          </div>
        </div>
        <Link to="/" className={styles.content__desc_bottom}>
          Schedule a demo
          <img src="/icons/Arrow_right_blue.svg" alt="Link" />
        </Link>
      </div>
    </section>
  );
}

export default RobustComponent;
