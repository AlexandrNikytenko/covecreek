import styles from "./style.module.scss";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function CardPortfolio({
  index,
  item,
  zIndex,
  onMouseEnter,
  onMouseLeave,
  url,
}) {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardControls = useAnimation();
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isDesktop = window.innerWidth >= 768;

  useEffect(() => {
    setIsAnimationEnabled(isDesktop && !isSafari);
  }, []);

  useEffect(() => {
    if (cardInView) {
      cardControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: (index + 1) / 3,
        },
      });
    }
  }, [cardInView, cardControls]);

  const redRef = useRef();
  const rect = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    if (redRef.current) {
      rect.current = redRef.current.getBoundingClientRect();
      x.set(rect.current?.width / 2);
      y.set(rect.current?.height / 2);
    }
  }, [redRef, x, y]);

  const rotateX = useTransform(y, [0, rect.current?.height], [-35, 35]);
  const rotateY = useTransform(x, [0, rect.current?.width], [-35, 35]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(rect.current?.width / 2);
    y.set(rect.current?.height / 2);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseEnter={onMouseEnter}
      onMouseLeave={(event) => {
        handleMouseLeave();
        onMouseLeave(event);
      }}
      key={index}
      ref={cardRef}
      className={`${styles[item.size]}`}
      style={{ perspective: "2000px", zIndex }}
    >
      <motion.figure
        className={`${styles.card} `}
        initial={{ opacity: 0, y: 200 }}
        animate={cardControls}
        ref={redRef}
        style={isAnimationEnabled ? { rotateX, rotateY } : {}}
      >
        <Link to={url} className={styles.card__link} target="_blank">
          <div className={styles.card__overlay}>
            <button className={styles.card__button}>Open in 360° </button>
          </div>
          <img src={item.imageUrl} alt={item.title} />
          <figcaption>
            <h3 className={styles.card__title}>{item.title}</h3>
            <p className={styles.card__desc}>{item.text}</p>
          </figcaption>
        </Link>
      </motion.figure>
    </motion.div>
  );
}

export default CardPortfolio;
