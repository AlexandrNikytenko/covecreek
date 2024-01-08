import styles from "./style.module.scss";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { BounceLoader } from "react-spinners";

export const FormStates = {
  IDLE: "idle",
  SENDING: "sending",
  SENT: "sent",
  ERROR: "error",
};

export const EndpointTypes = {
  FORM: "form",
  JSON: "json",
};

export const TextareaInput = ({
  name,
  placeholder,
  required,
  rows,
  controls,
}) => (
  <motion.textarea
    name={name}
    placeholder={placeholder}
    required={required}
    rows={rows}
    className={styles.input}
    initial={{ opacity: 0, y: 200 }}
    animate={controls}
    transition={{ duration: 0.7 }}
  />
);
TextareaInput.displayName = "TextareaInput";

export const TextInput = ({
  name,
  autoComplete,
  type,
  placeholder,
  required,
  controls,
}) => (
  <motion.input
    name={name}
    autoComplete={autoComplete}
    type={type}
    placeholder={placeholder}
    required={required}
    className={styles.input}
    initial={{ opacity: 0, y: 200 }}
    animate={controls}
    transition={{ duration: 0.4 }}
  />
);
TextInput.displayName = "TextInput";

export const FileInput = ({
  name,
  controls,
  placeholder,
  required,
  accept,
  maxFileSize,
}) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(placeholder);
  const [fileError, setFileError] = useState("");

  const handleFileClick = () => fileInputRef.current.click();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > maxFileSize) {
        setFileError(
          `File size should be less than ${maxFileSize / 1024 / 1024} MB`
        );
        setFileName(placeholder);
        return;
      }
      setFileName(file.name);
      setFileError("");
    }
  };

  return (
    <motion.div
      className={styles.input_area}
      initial={{ opacity: 0, y: 200 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.input_file} onClick={handleFileClick}>
        <input
          name={name}
          type="file"
          required={required}
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={fileInputRef}
          accept={accept}
          multiple={false}
        />
        <p className={styles.input_file__text}>{fileError || fileName}</p>
        <button type="button" className={styles.input_file__button}>
          Browse Files
        </button>
      </div>
    </motion.div>
  );
};
FileInput.displayName = "FileInput";

export const SubmitButton = ({
  buttonText,
  controls,
  type,
  className,
  style,
}) => (
  <motion.button
    type="submit"
    className={className || styles.button}
    initial={{ opacity: 0, y: 200 }}
    animate={controls}
    transition={{ duration: 0.8 }}
    style={style}
  >
    {buttonText}
  </motion.button>
);
SubmitButton.displayName = "SubmitButton";

export const Loader = ({ controls, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 200 }}
    animate={controls}
    transition={{ duration: 0.7 }}
    className={className || styles.loader_container}
  >
    <BounceLoader className={styles.loader} />
  </motion.div>
);
Loader.displayName = "Loader";

export const SentMessage = ({ message, controls, className, onBackClick }) => (
  <motion.div
    className={className || styles.sent}
    initial={{ opacity: 0, y: 200 }}
    animate={controls}
    transition={{ duration: 0.7 }}
  >
    <p className={styles.sent__text}>{message}</p>
    <button type="button" className={styles.sent__button} onClick={onBackClick}>
      Back
    </button>
  </motion.div>
);
SentMessage.displayName = "SentMessage";

export function InputForm({ endpoint, endpointType, children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const handleBackClick = useCallback(() => {
    setFormState(FormStates.IDLE);
  }, []);

  const [formState, setFormState] = useState(FormStates.IDLE);
  const fetchData = async (formData) => {
    try {
      setFormState(FormStates.SENDING);
      // Skip sending request if in development mode
      if (process.env.NODE_ENV === "development") {
        console.log("Skipping request in development mode");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setFormState(FormStates.SENT);
        return;
      }

      const config = { headers: {} };
      if (endpointType === EndpointTypes.FORM) {
        // EndpointType.FORM
        config.headers["Content-Type"] = "multipart/form-data";
        await axios.post(endpoint, formData, config);
      } else {
        // EndpointType.JSON
        config.headers["Content-Type"] = "application/json";
        const data = Object.fromEntries(formData.entries());
        await axios.post(endpoint, JSON.stringify(data), config);
      }
      setFormState(FormStates.SENT);
    } catch (error) {
      // Handle error
      setFormState(FormStates.ERROR);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await fetchData(formData);
    } catch (error) {
      // Handle error
      setFormState(FormStates.ERROR);
    }
  }

  useEffect(() => {
    // animate in the form
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
    // re-animate when formState changes
  }, [inView, controls, formState]);

  // Clones passed in children so that we can add our own props
  const findAndCloneStateComponent = (componentType, additionalProps = {}) => {
    const foundComponent = React.Children.toArray(children).find(
      (child) =>
        React.isValidElement(child) && child.type.displayName === componentType
    );

    return foundComponent
      ? React.cloneElement(foundComponent, { ...additionalProps, controls })
      : null;
  };

  // Form state specific rendering
  if (formState === FormStates.SENDING) {
    return (
      findAndCloneStateComponent("Loader") || <Loader controls={controls} />
    );
  }

  if (formState === FormStates.SENT) {
    return (
      findAndCloneStateComponent("SentMessage", {
        onBackClick: handleBackClick,
      }) || <SentMessage controls={controls} onBackClick={handleBackClick} />
    );
  }

  // Default rendering for other children
  const childrenWithProps = React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      child.type.displayName !== "Loader" &&
      child.type.displayName !== "SentMessage"
    ) {
      return React.cloneElement(child, { controls });
    }
    return null;
  });

  return (
    <form onSubmit={handleSubmit} className={styles.form} ref={ref}>
      {formState === FormStates.ERROR && (
        <div className={styles.error}>An error occurred, please try again.</div>
      )}

      {childrenWithProps}
    </form>
  );
}

export default InputForm;
