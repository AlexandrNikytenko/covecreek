import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  InputForm,
  TextInput,
  FileInput,
  SubmitButton,
  SentMessage,
  EndpointTypes,
  TextareaInput,
} from "../InputForm";

import styles from "./style.module.scss";

function Careers() {
  const controls = useAnimation();
  const controlsBottom = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const [refBottom, inViewBottom] = useInView({
    triggerOnce: true,
    threshold: 0,
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
          <InputForm endpoint="/api/careers" endpointType={EndpointTypes.FORM}>
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
            <FileInput
              name="resume"
              placeholder={"Resume"}
              accept={".pdf"}
              maxFileSize={4 * 1024 * 1024} // 4 MB
            />
            <TextareaInput
              name="message"
              placeholder="Tell us about yourself"
              required
              rows={5}
            />
            <SentMessage message="Thank you for contacting us. We will get back to you shortly." />
            <SubmitButton
              buttonText={"Apply"}
              style={{ backgroundColor: "#3076BE" }}
            />
          </InputForm>
        </div>
        <div className={styles.desc} ref={refBottom}>
          <motion.h3
            className={styles.desc__head}
            initial={{ opacity: 0, y: 200 }}
            animate={controlsBottom}
            transition={{ duration: 0.3 }}
          >
            Careers
          </motion.h3>
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
            <motion.ul
              initial={{ opacity: 0, y: 200 }}
              animate={controlsBottom}
            >
              <li transition={{ duration: 0.5 }}>
                Experienced 360° Photographer
              </li>
              <li transition={{ duration: 0.6 }}>
                Developer (Node.js / React.js / Next.js)
              </li>
              <li transition={{ duration: 0.7 }}>Project Manager</li>
              <li transition={{ duration: 0.8 }}>
                Sales and Business Development
              </li>
              <li transition={{ duration: 0.9 }}>
                360° Photography Internship
              </li>
            </motion.ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
