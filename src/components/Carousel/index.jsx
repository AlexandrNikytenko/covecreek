import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import styles from "./style.module.scss";
function Carousel() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1,
    cssEase: 'linear',
    // pauseOnHover: true,
    // swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{width: '100%', overflow: 'hidden'}}>
      <Slider {...settings}>
        <div>
          <div className={styles.slide_1}>
            <p className={styles.title}>Normandy</p>
            <p className={styles.desc}>
              Write a short sentence about this virtual tour and what the
              company uses it for.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.slide_2}>
            <p className={styles.title}>University of Toledo</p>
            <p className={styles.desc}>
              This would be a little something about University of Toledo
              virtual tour. I think three lines would be a good maximum limit.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.slide_3}>
            <p className={styles.title}>NYC Tousism</p>
            <p className={styles.desc}>
              Write a short something about this virtual tour.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.slide_4}>
            <p className={styles.title}>University</p>
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              nobis ea incidunt repellat quaerat quo aspernatur a omnis possimus
              voluptates?
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
