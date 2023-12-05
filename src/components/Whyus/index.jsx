import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import HomeCarousel from "../Carousel";
import ArticleComponent from "../ArticleComponent";
import RobustComponent from "../RobustComponent";
import UnmatchedComponent from "../UnmatchedComponent";
import CaseComponent from "../CaseComponent";
import ContactComponent from "../ContactComponent";

const whyCove = {
  label: "Why Cove Creek",
  text: "For over a decade, Cove Creek has been creating stunning 360° virtual tours, custom tailored to the various needs of university campuses, areas of tourism, and more",
};

const ourComitten = {
  label: "Our commitment",
  text: "We are committed to delivering the very best virtual tour experiences. We are proud of what we have accomplished, and are constantly striving to raise the bar.",
};

function Whyus() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        We craft immersive experiences that captivate global audiences
      </p>
      <section className={styles.image_container}>
        <div className={styles.top_image}>
          <button className={styles.top_image__button}>Schedule a Demo</button>
        </div>
      </section>
      <ArticleComponent data={whyCove} />
      <RobustComponent />
      <UnmatchedComponent link={true} />
      <section className={styles.carousel}>
        <HomeCarousel />
      </section>


      <ArticleComponent data={ourComitten} background={'white'}/>
      <div style={{ background: "white", width: '100%' }}>
        <section className={styles.team}>
          <div className={styles.team__slider}>
            <div className={styles.team__slider_frame}>
              <div className={styles.team__slider_frame__buttons}>
                <button className={styles.team__slider_frame__button}>
                  <img src="/icons/Chevron_Left.svg" alt="Left" />
                </button>
                <button className={styles.team__slider_frame__button}>
                  <img src="/icons/Chevron_Right.svg" alt="Right" />
                </button>
              </div>
            </div>
            <p className={styles.team__slider_desc}>
              North African American Cemetery
            </p>
          </div>
          <div className={styles.team__desc}>
            <p className={styles.team__desc_title}>Our team</p>
            <p className={styles.team__desc_description}>
              A team dedicated to bringing 360° photography to life
            </p>
            <p className={styles.team__desc_text}>
              Cove Creek's team is comprised of talented 360° photographers,
              software developers, and support staff. Our lean team size
              provides the efficiency to give personalized attention and deliver
              amazing results.
            </p>

            <Link to="/" className={styles.team__desc_bottom}>
              View careers
              <img src="/icons/Arrow_right_blue.svg" alt="Link" />
            </Link>
          </div>
        </section>
      </div>

      <CaseComponent />
      <ContactComponent />
    </div>
  );
}

export default Whyus;
