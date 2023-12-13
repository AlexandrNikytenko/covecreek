import styles from "./style.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function CardPortfolio({ index, item }) {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardControls = useAnimation();

  useEffect(() => {
    console.log(cardInView);
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

  return (
    <motion.div key={index} ref={cardRef} className={`${styles[item.size]}`}>
      <motion.div
        className={`${styles.card} `}
        initial={{ opacity: 0, y: 200 }}
        animate={cardControls}
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      >
        <p className={styles.card__title}>{item.title}</p>
        <p className={styles.card__desc}>{item.text}</p>
      </motion.div>
    </motion.div>
  );
}

export default CardPortfolio;
