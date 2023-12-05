import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import styles from "./style.module.scss";

function HomeCarousel() {
  const responsive = {
    0: { items: 1 },
    1280: { items: 2 },
    1784: { items: 3, itemsFit: "contain" },
  };

  const items = [
    <div className="item" data-value="1">
      <div className={styles.slide_1}>
        <p className={styles.title}>Normandy</p>
        <p className={styles.desc}>
          Write a short sentence about this virtual tour and what the company
          uses it for.
        </p>
      </div>
    </div>,
    <div className="item" data-value="2">
      <div className={styles.slide_2}>
        <p className={styles.title}>University of Toledo</p>
        <p className={styles.desc}>
          This would be a little something about University of Toledo virtual
          tour. I think three lines would be a good maximum limit.
        </p>
      </div>
    </div>,
    <div className="item" data-value="3">
      <div className={styles.slide_3}>
        <p className={styles.title}>NYC Tousism</p>
        <p className={styles.desc}>
          Write a short something about this virtual tour.
        </p>
      </div>
    </div>,
    <div className="item" data-value="4">
      <div className={styles.slide_4}>
        <p className={styles.title}>University</p>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          nobis ea incidunt repellat quaerat quo aspernatur a omnis possimus
          voluptates?
        </p>
      </div>
    </div>,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableDotsControls
      disableButtonsControls
    />
  );
}

export default HomeCarousel;
