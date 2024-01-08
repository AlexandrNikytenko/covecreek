import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export function ArrowLink({ to, children, ...props }) {
  return (
    <Link to={to} className={styles.arrow_link} {...props}>
      {children}
    </Link>
  );
}

export default ArrowLink;
