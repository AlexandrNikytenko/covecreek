import { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Intersection } from "@splidejs/splide-extension-intersection";
import "@splidejs/react-splide/css";
import styles from "./style.module.scss";
const slides = [
  {
    src: "/images/why-us/slider/north-african-abmc.jpg",
    altText: "North African American Cemetery",
    title: "North African American Cemetery",
  },
  {
    src: "/images/why-us/slider/austin-texas.jpg",
    altText: "Austin Texas",
    title: "Austin Texas",
  },
  {
    src: "/images/why-us/slider/ww2-memorial.jpg",
    altText: "World War II Memorial",
    title: "World War II Memorial",
  },
  {
    src: "/images/why-us/slider/indiana-university.jpg",
    altText: "Indiana University",
    title: "Indiana University",
  },
  {
    src: "/images/why-us/slider/suresnes-abmc.jpg",
    altText: "Suresnes American Cemetery",
    title: "Suresnes American Cemetery",
  },
  {
    src: "/images/why-us/slider/state-tech.jpg",
    altText: "State Tech (MO)",
    title: "State Tech (MO)",
  },
  {
    src: "/images/why-us/slider/post-production-office.jpg",
    altText: "Post Production Office",
    title: "Post Production Office",
  },
];

export function Slide({ src, mobileSrc = src, altText, title }) {
  let isMobile = window.innerWidth < 768;
  useEffect(() => {
    window.addEventListener("resize", () => {
      isMobile = window.innerWidth < 768;
    });
  }, []);
  return (
    <SplideSlide>
      <div className={styles.slide}>
        <figure className={styles.image_container}>
          <img src={isMobile ? mobileSrc : src} alt={altText} />
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
    interval: 2400,
    pauseOnHover: true,
    resetProgress: false,
    arrows: "slider",
    perPage: 1,
    perSlide: 1,
    pagination: false,
    speed: 500,
    easing: "ease-out",
    width: "100%",
    intersection: {
      inView: {
        autoplay: true,
      },
      outView: {
        autoplay: false,
      },
    },
  };
  const ref = useRef();

  useEffect(() => {
    // set options again. animations don't seem to initialize properly without this
    ref.current.splide.options = options;
  }, []);

  return (
    <div className={styles.slider}>
      <Splide options={options} ref={ref} extensions={{ Intersection }}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            src={slide.src}
            altText={slide.altText}
            title={slide.title}
          />
        ))}
      </Splide>
    </div>
  );
}

export default SliderWhy;
