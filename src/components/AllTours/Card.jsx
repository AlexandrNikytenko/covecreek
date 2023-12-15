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

function Card({ zIndex, onMouseEnter, onMouseLeave, card }) {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);

  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "-10px 0px 0px 0px",
  });

  const cardControls = useAnimation();

  function getRemainder(num) {
    const remainder = num % 3;
    return remainder === 0 ? 3 : remainder;
  }

  useEffect(() => {
    setIsAnimationEnabled(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    if (cardInView) {
      const duration =
        window.innerWidth > 768 ? getRemainder(card.id) * 0.3 : 0.3;
      cardControls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration,
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
      key={card.id}
      ref={cardRef}
      className={styles.image_box}
      style={{ perspective: "500px", zIndex }}
    >
      <motion.div
        style={{
          ...(isAnimationEnabled
            ? { rotateX, rotateY, backgroundImage: `url(${card.imageURL})` }
            : { backgroundImage: `url(${card.imageURL})` }),
        }}
        className={styles.image}
        initial={{ opacity: 0, y: 200 }}
        animate={cardControls}
        ref={redRef}
      >
        <Link className={styles.link} to={card.link} target="_blank">
          <p className={styles.image__title}>{card.name}</p>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Card;
