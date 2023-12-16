import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Card from "./Card";
import styles from "./style.module.scss";

function Row({ card }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const rowControls = useAnimation();

  const handleRowInView = useCallback(
    (inView) => {
      if (inView) {
        rowControls.start((i) => ({
          opacity: 1,
          y: 0,
        }));
      }
    },
    [rowControls]
  );

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    handleRowInView(inView);
  }, [inView, handleRowInView]);

  return (
    <div className={styles.image_row} ref={ref}>
      {Array.from({ length: 1 }, (_, cardIndex) => (
        <Card
          card={card}
          key={cardIndex}
          zIndex={hoveredIndex === card.id + cardIndex ? 1 : 0}
          onMouseEnter={() => handleHover(card.id + cardIndex)}
          onMouseLeave={() => handleHover(null)}
        />
      ))}
    </div>
  );
}

export default Row;
