import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import styles from "./style.module.scss";

export function Slide({ src, altText, title, description }) {
  return (
    <div>
      <figure className={styles.image_container}>
        <img src={src} alt={altText} />
        <figcaption>
          <h2 className={styles.title}>{title}</h2>
        </figcaption>
      </figure>
    </div>
  );
}

export function Carousel() {
  // determine how many slides to show at a time based on screen size
  // slides are 420px wide
  const slidesToShow = Math.floor(window.innerWidth / 420);
  const slideWidth = 100 / slidesToShow; // calculate the width of each slide as a percentage

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    // pauseOnHover: true,
    swipeToSlide: true,
    slidesToShow,
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        <Slide
          src="images/slides/toledo.jpg"
          altText="Aerial view of the University of Toledo"
          title="The University of Toledo"
          width={slideWidth}
        />

        <Slide
          src="images/slides/seattle.jpg"
          altText="Seattle University"
          title="Seattle University"
          width={slideWidth}
        />

        <Slide
          src="images/slides/indiana.jpg"
          altText="Indiana University"
          title="Indiana University"
          width={slideWidth}
        />

        <Slide
          src="images/slides/asu.jpg"
          altText="Arizona State University"
          title="Arizona State University"
          width={slideWidth}
        />

        <Slide
          src="images/slides/normandy.jpg"
          altText="Normandy American Cemetery"
          title="Normandy American Cemetery"
          width={slideWidth}
        />

        <Slide
          src="images/slides/worldtour.jpg"
          altText="World Tour"
          title="World Tour"
          width={slideWidth}
        />

        <Slide
          src="images/slides/principia.jpg"
          altText="Principia College"
          title="Principia College"
          width={slideWidth}
        />
      </Slider>
    </div>
  );
}

export default Carousel;
