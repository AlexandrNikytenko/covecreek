import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function InputForm({ type, buttonText, fetchData }) {
  const [result, setResult] = useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setResult(formJson);
    fetchData(true)
    //Data logic
    setResult("");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} ref={ref}>
      <motion.input
        name="name"
        type="text"
        placeholder="Name"
        className={styles.input}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      />
      <motion.input
        name="email"
        type="email"
        placeholder="Email"
        className={styles.input}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.4 }}
      />
      <motion.input
        name="phone"
        type="text"
        placeholder="Phone"
        className={styles.input}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      />
      {type === "join" && (
        <div className={styles.input_area}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        >
          <input
            name="phone"
            type="text"
            placeholder="Resume"
            className={styles.input}
          />
          <button className={styles.input_area__button}>Browse Files</button>
        </div>
      )}
      <motion.textarea
        name="message"
        rows="4"
        className={styles.input}
        placeholder="Tell us about your project..."
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.7 }}
      ></motion.textarea>
      <motion.button
        type="submit"
        className={styles.button}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        style={type === "join" ? { backgroundColor: "#3076BE" } : {}}
      >
        {buttonText}
      </motion.button>
    </form>
  );
}

export default InputForm;
