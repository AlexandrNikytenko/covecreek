import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

import { BounceLoader } from "react-spinners";
import {
  InputForm,
  TextInput,
  FileInput,
  SubmitButton,
  TextareaInput,
  SentMessage,
  EndpointTypes,
} from "../InputForm";

import styles from "./style.module.scss";
import { SmallHeadingMotion } from "../SmallHeading";

function Contact() {
  const controls = useAnimation();
  const controlsBottom = useAnimation();

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
        <SmallHeadingMotion
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          className={styles.tip}
        >
          Get in touch
        </SmallHeadingMotion>
        <motion.h1
          className={styles.form__title}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.4 }}
        >
          Get started on your 360° virtual tour today
        </motion.h1>
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
            placeholder="Tell us about your project..."
            required
            rows={4}
          />
          <SentMessage message="Thank you for contacting us. We will get back to you shortly." />
          <SubmitButton buttonText={"Send Message"} />
        </InputForm>
      </section>

      <div className={styles.bottom} ref={refBottom}>
        <SmallHeadingMotion
          initial={{ opacity: 0, y: 200 }}
          animate={controlsBottom}
          transition={{ duration: 0.3 }}
          className={styles.tip}
        >
          Our commitment to you
        </SmallHeadingMotion>
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
