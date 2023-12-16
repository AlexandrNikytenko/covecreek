import styles from "./style.module.scss";
import { InputForm, FormStates } from "../InputForm";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import BounceLoader from "react-spinners/BounceLoader";

function ContactComponent() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [formState, setFormState] = useState(FormStates.IDLE);
  const fetchData = async (data) => {
    setFormState(FormStates.SENDING);
    try {
      const jsonData = Object.fromEntries(data.entries());
      await axios.post("/api/contact", jsonData);
      setFormState(FormStates.SENT);
    } catch (error) {
      setFormState(FormStates.IDLE);
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <section className={styles.container} ref={ref}>
      <div className={styles.wave_top}></div>
      <div className={styles.get}>
        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          Get started
        </motion.p>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 400 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          Get started on your 360° virtual tour today
        </motion.h1>
      </div>
      <motion.div
        className={styles.form}
        initial={{ opacity: 0, y: 600 }}
        animate={controls}
        transition={{ duration: 0.9 }}
      >
        {
          {
            [FormStates.SENDING]: (
              <div className={styles.form__sending}>
                <BounceLoader className={styles.loader} />
              </div>
            ),
            [FormStates.SENT]: (
              <div className={styles.form__sent}>
                <p className={styles.form__sent__text}>
                  Thank you for contacting us. We will get back to you shortly.
                </p>
                <button
                  className={styles.form__sent__button}
                  onClick={() => setFormState(FormStates.IDLE)}
                >
                  Send another message
                </button>
              </div>
            ),
            [FormStates.IDLE]: (
              <InputForm
                type={"start"}
                buttonText={"Schedule a Demo"}
                fetchData={fetchData}
              />
            ),
          }[formState]
        }
      </motion.div>
    </section>
  );
}

export default ContactComponent;
