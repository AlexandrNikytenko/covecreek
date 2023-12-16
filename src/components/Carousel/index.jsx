import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import styles from "./style.module.scss";

export function Slide({ imageSrc, altText, title, description }) {
  return (
    <div>
      <figure className={styles.image_container}>
        <img src={imageSrc} alt={altText} />
        <figcaption>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{description}</p>
        </figcaption>
      </figure>
    </div>
  );
}

export function Carousel() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    // pauseOnHover: true,
    // swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        <Slide
          imageSrc="images/Home_Carousel_1.png"
          altText="Normandy"
          title="Normandy"
          description="Write a short sentence about this virtual tour and what the company uses it for."
        />
        <Slide
          imageSrc="images/Home_Carousel_2.png"
          altText="University of Toledo"
          title="University of Toledo"
          description="This would be a little something about University of Toledo virtual tour. I think three lines would be a good maximum limit."
        />
        <Slide
          imageSrc="images/Home_Carousel_3.png"
          altText="NYC Tourism"
          title="NYC Tourism"
          description="Write a short something about this virtual tour."
        />
        <Slide
          imageSrc="images/Home_Carousel_4.png"
          altText="University"
          title="University"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nobis ea incidunt repellat quaerat quo aspernatur a omnis possimus voluptates?"
        />
      </Slider>
    </div>
  );
}

export default Carousel;
