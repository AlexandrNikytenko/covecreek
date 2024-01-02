import PAGES from "src/constants/pages";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

function VideoWhyUsComponent() {
  return (
    <section className={styles.video_box}>
      <div className={styles.video_box__container}>
        <video
          playsInline
          autoPlay
          loop
          muted
          className={styles.video_box__video}
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/899355659/rendition/540p/file.mp4?loc=external&log_user=0&signature=caa86623da8d7bd98b5b13621be0978f6d6dfcf7932defc154ed93d252288cfc"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <Link to={PAGES.Contact.path} className={styles.video_box__button}>
        Schedule a Demo
      </Link>
    </section>
  );
}

export default VideoWhyUsComponent;
