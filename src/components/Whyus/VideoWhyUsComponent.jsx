import styles from "./style.module.scss";

function VideoWhyUsComponent() {
  return (
    <section className={styles.video_box}>
      <div className={styles.video_box__container}>
        <video autoPlay loop muted className={styles.video_box__video}>
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/893945694/rendition/360p/file.mp4?loc=external&log_user=0&signature=e15563b55356e723a771a093e45a548ee93d5276d38b5edccbf58e03afbf9985"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className={styles.video_box__button}>Schedule a Demo</button>
    </section>
  );
}

export default VideoWhyUsComponent;
