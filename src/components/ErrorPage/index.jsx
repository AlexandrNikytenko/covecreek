import React from "react";
import styles from "./style.module.scss";

export const ErrorPage = ({
  statusCode = "404",
  errorMessage = "Page not found.",
}) => {
  return (
    <div className={styles.error}>
      <h1 className={styles.error__title}>{statusCode}</h1>
      <p className={styles.error__desc}>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;
