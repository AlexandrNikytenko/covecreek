import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import styles from "./style.module.scss";

function HomeCarousel() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isWideScreen = windowWidth > 768;

  const items = [
    <div className="item">
      <div className={styles.slide_1}>
        <p className={styles.title}>Normandy</p>
        <p className={styles.desc}>
          Write a short sentence about this virtual tour and what the company
          uses it for.
        </p>
      </div>
    </div>,
    <div className="item">
      <div className={styles.slide_2}>
        <p className={styles.title}>University of Toledo</p>
        <p className={styles.desc}>
          This would be a little something about University of Toledo virtual
          tour. I think three lines would be a good maximum limit.
        </p>
      </div>
    </div>,
    <div className="item">
      <div className={styles.slide_3}>
        <p className={styles.title}>NYC Tousism</p>
        <p className={styles.desc}>
          Write a short something about this virtual tour.
        </p>
      </div>
    </div>,
    <div className="item">
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

  const commonProps = {
    mouseTracking: true,
    items: items,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
      1784: { items: 4, itemsFit: "contain" },
    },
    controlsStrategy: "alternate",
    disableDotsControls: true,
    disableButtonsControls: true,
    autoPlay: true,
    animationEasingFunction: "linear",
    autoPlayInterval: 0,
    animationDuration: 20000,
    infinite: true,
    autoPlayStrategy: "none",
  };

  const wideScreenProps = {
    animationType: "fadeout",
  };

  return (
    <AliceCarousel {...commonProps} {...(isWideScreen && wideScreenProps)} />
  );
}

export default HomeCarousel;
