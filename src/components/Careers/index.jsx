import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

import { BounceLoader } from "react-spinners";
import InputForm from "../InputForm";

import styles from "./style.module.scss";

function Careers() {
  const controls = useAnimation();
  const controlsBottom = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [refBottom, inViewBottom] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const fetchData = async (data) => {
    setIsSending(true);
    try {
      const formData = data;
      console.log(formData);
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);

      // post multipart/form-data
      const resp = await axios.post("/api/careers", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // const resp = await axios.post("/api/careers", data);
      console.log(resp);
      setIsMessageSent(true);
    } catch (error) {
      setIsMessageSent(false);
    }
    setIsSending(false);
  };

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
      <motion.h1
        className={styles.title}
        ref={ref}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        We’re seeking talented individuals who are passionate about their work
      </motion.h1>
      <section className={styles.content}>
        <div className={styles.form}>
          <p className={styles.form__title}>Join our team</p>

          {isSending ? (
            <div className={styles.form__sending}>
              <BounceLoader className={styles.loader} />
            </div>
          ) : !isMessageSent ? (
            <InputForm
              type={"join"}
              buttonText={"Submit"}
              fetchData={fetchData}
            />
          ) : (
            <div>
              <p className={styles.form__sent}>
                Thank you for contacting us. We will get back to you shortly.
              </p>
            </div>
          )}
        </div>
        <div className={styles.desc} ref={refBottom}>
          <motion.p
            className={styles.desc__title}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsBottom}
            transition={{ duration: 0.3 }}
          >
            Current positions
          </motion.p>
          <motion.p
            className={styles.desc__text}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsBottom}
            transition={{ duration: 0.4 }}
          >
            Submit your resume for consideration.
          </motion.p>
          <div className={styles.desc__list}>
            <motion.p
              className={styles.desc__list_item}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsBottom}
              transition={{ duration: 0.5 }}
            >
              Experienced 360° Photographer
            </motion.p>
            <motion.p
              className={styles.desc__list_item}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsBottom}
              transition={{ duration: 0.6 }}
            >
              Developer (Ruby on Rails)
            </motion.p>
            <motion.p
              className={styles.desc__list_item}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsBottom}
              transition={{ duration: 0.7 }}
            >
              Project Manager
            </motion.p>
            <motion.p
              className={styles.desc__list_item}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsBottom}
              transition={{ duration: 0.8 }}
            >
              Sales and Business Development
            </motion.p>
            <motion.p
              className={styles.desc__list_item}
              initial={{ opacity: 0, y: 200 }}
              animate={controlsBottom}
              transition={{ duration: 0.9 }}
            >
              360° Photography Internship
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
