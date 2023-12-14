import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import InputForm from "../InputForm";

import styles from "./style.module.scss";

function Contact() {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const controls = useAnimation();
  const controlsBottom = useAnimation();

  const fetchData = (data) => {
    setIsMessageSent(data);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refBottom, inViewBottom] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
    if (inViewBottom) {
      controlsBottom.start({ opacity: 1, y: 0 });
    }
  }, [inView, inViewBottom, controls, controlsBottom]);

  return (
    <div className={styles.container}>
      <div className={styles.wave_top}></div>

      <section className={styles.form} ref={ref}>
        <motion.p
          className={styles.tip}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          Get in touch
        </motion.p>
        <motion.h1
          className={styles.form__title}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.4 }}
        >
          Get started on your 360° virtual tour today
        </motion.h1>
        {!isMessageSent ? (
          <InputForm buttonText={"Send Message"} fetchData={fetchData} />
        ) : (
          <div className={styles.form__sent}>Message sent!</div>
        )}
      </section>

      <div className={styles.bottom} ref={refBottom}>
        <motion.p
          className={styles.tip}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsBottom}
          transition={{ duration: 0.3 }}
        >
          Our commitment to you
        </motion.p>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 200 }}
          animate={controlsBottom}
          transition={{ duration: 0.5 }}
        >
          We are committed to delivering the very best virtual tours. While we
          are proud of what we have accomplished, we are constantly striving to
          raise the bar.
        </motion.h2>
      </div>
    </div>
  );
}

export default Contact;
