import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const VARIANTS = {
  blue: styles.blue_button,
  transparent: styles.transparent_button,
};

export function Button({ to, variant = "blue", children, ...props }) {
  const variantClass = VARIANTS[variant];

  return (
    <Link to={to} className={variantClass} {...props}>
      {children}
    </Link>
  );
}

export default Button;
