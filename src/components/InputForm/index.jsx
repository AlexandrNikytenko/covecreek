import styles from "./style.module.scss";
import { useState } from "react";

function InputForm({ type, buttonText, fetchData }) {
  const [result, setResult] = useState("");

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className={styles.input}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className={styles.input}
      />
      <input
        name="phone"
        type="text"
        placeholder="Phone"
        className={styles.input}
      />
      {type === "join" && (
        <div className={styles.input_area}>
          <input
            name="phone"
            type="text"
            placeholder="Resume"
            className={styles.input}
          />
          <button className={styles.input_area__button}>Browse Files</button>
        </div>
      )}
      <textarea
        name="message"
        rows="4"
        className={styles.input}
        placeholder="Tell us about your project..."
      ></textarea>
      <button
        type="submit"
        className={styles.button}
        style={type === "join" ? { backgroundColor: "#3076BE" } : {}}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default InputForm;
