import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const FormStates = {
  IDLE: "idle",
  SENDING: "sending",
  SENT: "sent",
};

export function InputForm({ type, buttonText, fetchData }) {
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
    setResult(formData);
    fetchData(formData);
    //Data logic
    setResult("");
    form.reset();
  }

  const fileInputRef = useRef(null); // Create a ref for the file input
  const [fileName, setFileName] = useState(""); // State for storing the filename
  const handleFileInputClick = (e) => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Define allowed file types
      const allowedTypes = [
        "application/pdf", // .pdf
      ];

      // Check if the file type is allowed
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF document.");
        return;
      }

      // Check if the file size is less than or equal to 4 MB
      // Limit is related to Vercel's serverless functions payload limit
      if (file.size > 4000000) {
        alert("File size should not exceed 4 MB.");
        return;
      }

      setFileName(file.name);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} ref={ref}>
      <motion.input
        name="name"
        autoComplete="name"
        type="text"
        placeholder="Name"
        required
        className={styles.input}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      />
      <motion.input
        name="email"
        autoComplete="email"
        type="email"
        placeholder="Email"
        required
        className={styles.input}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.4 }}
      />
      <motion.input
        name="phone"
        autoComplete="tel"
        type="text"
        placeholder="Phone"
        required
        className={styles.input}
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      />
      {type === "join" && (
        <motion.div
          className={styles.input_area}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.input_file} onClick={handleFileInputClick}>
            <input
              name="resume"
              type="file"
              placeholder="Resume"
              required
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple={false}
            />
            <p className={styles.input_file__text}>
              {fileName || "Upload Resume"}
            </p>
            <button type="button" className={styles.input_file__button}>
              Browse Files
            </button>
          </div>
        </motion.div>
      )}
      <motion.textarea
        name="message"
        required
        rows="4"
        className={styles.input}
        placeholder={
          type === "join"
            ? "Tell us about yourself..."
            : "Tell us about your project..."
        }
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
