import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import default Splide CSS
import styles from "./style.module.scss"; // Adjust the path to your SCSS module
import { useRef, useEffect } from "react";
// Slide data, you can add more slides as needed
const slides = [
  {
    src: "/images/why-us/slider/Slider1.jpg",
    altText: "Suresnes American Cemetery",
    title: "Suresnes American Cemetery",
  },
  {
    src: "/images/why-us/slider/Slider2.jpg",
    altText: "Indiana University",
    title: "Indiana University",
  },
  {
    src: "/images/why-us/slider/Slider3.jpg",
    altText: "State Tech (MO)",
    title: "State Tech (MO)",
  },
  {
    src: "/images/why-us/slider/Slider4.jpg",
    altText: "World War II Memorial",
    title: "World War II Memorial",
  },
  {
    src: "/images/why-us/slider/Slider5.jpg",
    altText: "Post Production Office",
    title: "Post Production Office",
  },
];

export function Slide({ src, altText, title, onClick }) {
  return (
    <SplideSlide>
      <div className={styles.slide} onClick={onClick}>
        <figure className={styles.image_container}>
          <img src={src} alt={altText} />
          <figcaption>
            <h2 className={styles.title}>{title}</h2>
          </figcaption>
        </figure>
      </div>
    </SplideSlide>
  );
}

export function SliderWhy() {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: "pause",
    interval: 3000,
    pauseOnHover: true,
    resetProgress: false,
    arrows: "slider",
    perPage: 1,
    perSlide: 1,
    pagination: false,
    speed: 800,
    easing: "ease-out",
  };
  const ref = useRef();

  const nextSlide = () => {
    ref.current.splide.go(">");
  };

  useEffect(() => {
    // set options again. animations don't seem to initialize properly without this
    ref.current.splide.options = options;
  }, []);

  return (
    <div className={styles.container}>
      <Splide
        options={options}
        ref={ref}
        onMounted={(Splide) => {
          Splide.Components.Autoplay.play();
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            src={slide.src}
            altText={slide.altText}
            title={slide.title}
            onClick={nextSlide}
          />
        ))}
      </Splide>
    </div>
  );
}

export default SliderWhy;
