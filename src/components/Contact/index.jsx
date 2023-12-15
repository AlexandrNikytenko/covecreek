import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

import { BounceLoader } from "react-spinners";
import InputForm from "../InputForm";

import styles from "./style.module.scss";

function Contact() {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const controls = useAnimation();
  const controlsBottom = useAnimation();

  const fetchData = async (data) => {
    setIsSending(true);
    try {
      const jsonData = Object.fromEntries(data.entries());
      const resp = await axios.post("/api/contact", jsonData);
      setIsMessageSent(true);
    } catch (error) {
      setIsMessageSent(false);
    }
    setIsSending(false);
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
        {isSending ? (
          <div className={styles.form__sending}>
            <BounceLoader className={styles.loader} />
          </div>
        ) : !isMessageSent ? (
          <InputForm buttonText={"Send Message"} fetchData={fetchData} />
        ) : (
          <div>
            <p className={styles.form__sent}>
              Thank you for contacting us. We will get back to you shortly.
            </p>
          </div>
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
