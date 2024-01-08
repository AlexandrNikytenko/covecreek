import styles from "./style.module.scss";
export function Container({ children, ...props }) {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
}

export default Container;
