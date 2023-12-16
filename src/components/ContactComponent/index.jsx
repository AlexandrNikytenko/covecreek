import styles from "./style.module.scss";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import {
  InputForm,
  TextInput,
  TextareaInput,
  SubmitButton,
  SentMessage,
  Loader,
  EndpointTypes,
  FormStates,
} from "../InputForm";

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
        <InputForm endpoint="/api/contact" endpointType={EndpointTypes.JSON}>
          <TextInput
            name="name"
            autoComplete="name"
            type="text"
            placeholder="Name"
            required
          />
          <TextInput
            name="email"
            autoComplete="email"
            type="email"
            placeholder="Email"
            required
          />
          <TextInput
            name="phone"
            autoComplete="tel"
            type="text"
            placeholder="Phone"
            required
          />
          <TextareaInput
            name="message"
            placeholder="Tell us about your project"
            required
            rows={4}
          />
          <SubmitButton buttonText={"Schedule a Demo"} />
          <SentMessage message="Thank you for contacting us. We will get back to you shortly." />
          <Loader className={styles.loader} />
        </InputForm>
      </motion.div>
    </section>
  );
}

export default ContactComponent;
