import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Lottie from "../Lottie";
import Animation360 from "../../animations/360.json";

export function Slide({ src, altText, title, url }) {
  const [tooltip, setTooltip] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setTooltip({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <SplideSlide onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {tooltip.visible && (
        <div
          className={styles.tooltip}
          style={{ top: tooltip.y, left: tooltip.x }}
        >
          <Lottie animationData={Animation360} width={64} height={64} />
        </div>
      )}
      <Link to={url} target="_blank">
        <div className={styles.slide}>
          <div className={styles.slide__overlay}>
            <button className={styles.slide__button}>Open in 360° </button>
          </div>

          <figure className={styles.image_container}>
            <img src={src} alt={altText} />
            <figcaption>
              <h2 className={styles.slide__title}>{title}</h2>
            </figcaption>
          </figure>
        </div>
      </Link>
    </SplideSlide>
  );
}

export function Carousel({ children }) {
  const options = {
    start: 2,
    width: "100%",
    gap: 20,
    fixedWidth: 420,
    breakpoints: {
      768: {
        fixedWidth: 250,
      },
    },
    focus: "center",
    type: "loop",
    drag: "free",

    autoScroll: {
      pauseOnHover: true,
      speed: 0.5,
      autoStart: true,
    },
    pauseOnHover: true,
    pauseOnFocus: false,
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
        src="/images/slides/toledo.jpg"
        altText="Aerial view of the University of Toledo"
        title="The University of Toledo"
        url="https://tours.covecreekproductions.com/toledo/"
      />

      <Slide
        key={2}
        src="/images/slides/seattle.jpg"
        altText="Seattle University"
        title="Seattle University"
        url="https://tours.covecreekproductions.com/seattle-university-cc/"
      />

      <Slide
        key={3}
        src="/images/slides/indiana.jpg"
        altText="Indiana University"
        title="Indiana University"
        url="https://covecreekproductions.com/tours/indiana/"
      />

      <Slide
        key={4}
        src="/images/slides/asu.jpg"
        altText="Arizona State University"
        title="Arizona State University"
        url="https://covecreekproductions.com/tours/asu_football/"
      />

      <Slide
        key={5}
        src="/images/slides/normandy.jpg"
        altText="Normandy American Cemetery"
        title="Normandy American Cemetery"
        url="https://tours.covecreekproductions.com/normandy/"
      />

      <Slide
        key={6}
        src="/images/slides/worldtour.jpg"
        altText="World Tour"
        title="World Tour"
        url="https://tours.covecreekproductions.com/world-tour/"
      />

      <Slide
        key={7}
        src="/images/slides/principia.jpg"
        altText="Principia College"
        title="Principia College"
        url="https://tours.covecreekproductions.com/principia-cc/"
      />
    </Carousel>
  );
}

export const WhyUsCarousel = HomeCarousel;

// This will be different from the home carousel
export function UniversityCarousel() {
  return (
    <Carousel>
      <Slide
        key={1}
        src="/images/slides/toledo.jpg"
        altText="Aerial view of the University of Toledo"
        title="The University of Toledo"
        url="https://tours.covecreekproductions.com/toledo/"
      />

      <Slide
        key={2}
        src="/images/slides/seattle.jpg"
        altText="Seattle University"
        title="Seattle University"
        url="https://tours.covecreekproductions.com/seattle-university-cc/"
      />

      <Slide
        key={3}
        src="/images/slides/indiana.jpg"
        altText="Indiana University"
        title="Indiana University"
        url="https://tours.covecreekproductions.com/indiana-university/"
      />

      <Slide
        key={4}
        src="/images/slides/asu.jpg"
        altText="Arizona State University"
        title="Arizona State University"
        url="https://tours.covecreekproductions.com/asu/"
      />

      <Slide
        key={5}
        src="/images/slides/normandy.jpg"
        altText="Normandy American Cemetery"
        title="Normandy American Cemetery"
        url="https://tours.covecreekproductions.com/normandy/"
      />

      <Slide
        key={6}
        src="/images/slides/worldtour.jpg"
        altText="World Tour"
        title="World Tour"
        url="https://tours.covecreekproductions.com/world-tour/"
      />

      <Slide
        key={7}
        src="/images/slides/principia.jpg"
        altText="Principia College"
        title="Principia College"
        url="https://tours.covecreekproductions.com/principia/"
      />
    </Carousel>
  );
}

export default Carousel;
