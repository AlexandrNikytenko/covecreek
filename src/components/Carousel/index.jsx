import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";
import styles from "./style.module.scss";
import { Children } from "react";

export function Slide({ src, altText, title, description, width }) {
  return (
    <SplideSlide>
      <div className={styles.slide}>
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

export function Carousel({ children }) {
  const options = {
    width: "100%",
    gap: 20,
    fixedWidth: 420,
    focus: "center",
    type: "loop",
    drag: "free",
    autoplay: true,
    autoScroll: {
      pauseOnHover: true,
      speed: 0.5,
    },
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    pagination: false,
  };

  return (
    <Splide hasTrack={false} options={options} extensions={{ AutoScroll }}>
      <SplideTrack>{children}</SplideTrack>
    </Splide>
  );
}

export function HomeCarousel() {
  return (
    <Carousel>
      <Slide
        key={1}
        src="images/slides/toledo.jpg"
        altText="Aerial view of the University of Toledo"
        title="The University of Toledo"
      />

      <Slide
        key={2}
        src="images/slides/seattle.jpg"
        altText="Seattle University"
        title="Seattle University"
      />

      <Slide
        key={3}
        src="images/slides/indiana.jpg"
        altText="Indiana University"
        title="Indiana University"
      />

      <Slide
        key={4}
        src="images/slides/asu.jpg"
        altText="Arizona State University"
        title="Arizona State University"
      />

      <Slide
        key={5}
        src="images/slides/normandy.jpg"
        altText="Normandy American Cemetery"
        title="Normandy American Cemetery"
      />

      <Slide
        key={6}
        src="images/slides/worldtour.jpg"
        altText="World Tour"
        title="World Tour"
      />

      <Slide
        key={7}
        src="images/slides/principia.jpg"
        altText="Principia College"
        title="Principia College"
      />
    </Carousel>
  );
}

export const WhyUsCarousel = HomeCarousel;

export function UniversityCarousel() {
  return (
    <Carousel>
      <Slide
        key={1}
        src="images/slides/toledo.jpg"
        altText="Aerial view of the University of Toledo"
        title="The University of Toledo"
      />

      <Slide
        key={2}
        src="images/slides/seattle.jpg"
        altText="Seattle University"
        title="Seattle University"
      />

      <Slide
        key={3}
        src="images/slides/indiana.jpg"
        altText="Indiana University"
        title="Indiana University"
      />

      <Slide
        key={4}
        src="images/slides/asu.jpg"
        altText="Arizona State University"
        title="Arizona State University"
      />

      <Slide
        key={5}
        src="images/slides/normandy.jpg"
        altText="Normandy American Cemetery"
        title="Normandy American Cemetery"
      />

      <Slide
        key={6}
        src="images/slides/worldtour.jpg"
        altText="World Tour"
        title="World Tour"
      />

      <Slide
        key={7}
        src="images/slides/principia.jpg"
        altText="Principia College"
        title="Principia College"
      />
    </Carousel>
  );
}

export default Carousel;
