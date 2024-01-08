import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export const SmallHeading = React.forwardRef(
  ({ children, as = "h3", ...props }, ref) => {
    const Component = as;
    let className = styles.small_heading;
    if (props.className) {
      className += ` ${props.className}`;
    }

    return (
      <Component ref={ref} {...props} className={className}>
        {children}
      </Component>
    );
  }
);

export const SmallHeadingMotion = React.forwardRef(
  ({ initial, animate, transition, ...props }, ref) => {
    const MotionSmallHeading = motion(SmallHeading);
    const defaultAnimationProps = {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
    };
    return (
      <MotionSmallHeading ref={ref} {...defaultAnimationProps} {...props} />
    );
  }
);

export default SmallHeading;
