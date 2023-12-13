import { Link, useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./style.module.scss";

function Footer() {
  const location = useLocation();
  const isPrivacy = location.pathname === "/privacy";

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);
  return (
    <div
      ref={ref}
      className={styles.container}
      style={isPrivacy ? { backgroundColor: "#09131D", paddingTop: "0" } : null}
    >
      {!isPrivacy && <div className={styles.bottom}></div>}
      <div className={styles.contacts}>
        <motion.div
          className={styles.contact}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <p className={styles.title}>Get in touch</p>
          <a className={styles.link} href="tel:+12137708211">
            213-770-8211
          </a>
          <a
            href="mailto:info@covecreekproductions.com"
            className={styles.link}
          >
            info@covecreekproductions.com
          </a>
          <a
            className={styles.link}
            href="https://www.google.com/maps/search/?api=1&query=2390+E+Camelback+Rd%2C+Phoenix%2C+AZ+85016"
            target="_blank"
            rel="noopener noreferrer"
          >
            2390 E Camelback Rd, Phoenix, AZ 85016
          </a>
        </motion.div>
        <motion.div
          className={styles.contact}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.title}>Our Work</p>
          <Link to="/portfolio" className={styles.link}>
            Portfolio
          </Link>
          <Link to="/case_study" className={styles.link}>
            Case Study
          </Link>
          <Link to="/whyus" className={styles.link}>
            Why Us
          </Link>
        </motion.div>
        <motion.div
          className={styles.contact}
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.title}>More</p>
          <Link to="/careers" className={styles.link}>
            Careers
          </Link>
          <Link to="/contact" className={styles.link}>
            Contact
          </Link>
        </motion.div>
      </div>
      <div className={styles.bottom}></div>
      <div className={`${styles.policy} ${styles.policy__text}`}>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          Copyright © 2023 Cove Creek Productions
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Link to="/privacy" className={styles.policy__text}>
            Privacy Policy
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link to="/" className={styles.policy__text}>
            Terms of Use
          </Link>
        </motion.p>
      </div>
    </div>
  );
}

export default Footer;
