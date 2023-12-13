import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import styles from "./style.module.scss";

const items = [
  <div>
    <div className={`${styles.slider__frame} ${styles.slide_1}`}></div>
    <p className={styles.slider__desc}>Suresnes American Cemetery</p>
  </div>,

  <div>
    <div className={`${styles.slider__frame} ${styles.slide_2}`}></div>
    <p className={styles.slider__desc}>Indiana University</p>
  </div>,

  <div>
    <div className={`${styles.slider__frame} ${styles.slide_3}`}></div>
    <p className={styles.slider__desc}>State Tech (MO)</p>
  </div>,

  <div>
    <div className={`${styles.slider__frame} ${styles.slide_4}`}></div>
    <p className={styles.slider__desc}>World War II Memorial</p>
  </div>,

  <div>
    <div className={`${styles.slider__frame} ${styles.slide_5}`}></div>
    <p className={styles.slider__desc}>Post Production Office</p>
  </div>,
];

function Slider() {
  const carousel = useRef(null);

  return (
    <div className={styles.container}>
      <AliceCarousel
        key="carousel"
        infinite="true"
        mouseTracking
        animationType="fadeout"
        animationDuration={800}
        disableDotsControls
        disableButtonsControls
        items={items}
        ref={carousel}
      />
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={(e) => carousel?.current?.slidePrev(e)}
        >
          <img src="/icons/Chevron_Left.svg" alt="Left" />
        </button>
        <button
          className={styles.button}
          onClick={(e) => carousel?.current?.slideNext(e)}
        >
          <img src="/icons/Chevron_Right.svg" alt="Right" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
