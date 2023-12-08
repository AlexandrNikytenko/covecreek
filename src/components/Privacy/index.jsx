import styles from "./style.module.scss";

function Privacy() {
  return (
    <section className={styles.container}>
      <p className={styles.container__title}>Privacy Policy</p>

      <p className={styles.container__article}>Cove Creek Productions, LLC</p>
      <p className={styles.container__text}>
        This Privacy Policy governs the manner in which Cove Creek Productions
        collects, uses, maintains and discloses information collected from users
        (each, a “User”) of the https://covecreekproductions.com/ website
        (“Site”). This privacy policy applies to the Site and all products and
        services offered by Cove Creek Productions.
      </p>

      <p className={styles.container__article}>
        Non-personal identification information
      </p>
      <p className={styles.container__text}>
        Whenever users interact with our site, we may gather non-personal
        identification information from them. This may comprise technical
        details about the users' connection to our site, such as the type of
        computer, browser name, operating system, and internet service provider
        used, as well as other comparable data that cannot be used to identify
        an individual.
      </p>

      <p className={styles.container__article}>Web browser cookies</p>
      <p className={styles.container__text}>
        To improve user experience, our site may utilize "cookies," which are
        small data files placed by a user's web browser on their hard drive for
        record-keeping and tracking purposes. Users can opt to configure their
        web browser to reject cookies or receive notifications when cookies are
        being sent. It is essential to note that certain features of the site
        may not work correctly if users choose to disable cookies.
      </p>

      <p className={styles.container__article}>Voluntary web forms</p>
      <p className={styles.container__text}>
        We may collect your name, email, email and phone number when you request
        information, demos, or would like to get in touch with us for other
        matters. Personal information that you provide by email or web forms
        will be used only for such purposes as are described at the point of
        collection (for example on a web form), such as to send information to
        you or respond to your questions or comments. If you provide contact
        information, we may contact you to clarify your comment or question, or
        to learn about your level of interest in, or satisfaction with our
        services.
      </p>

      <p className={styles.container__article}>Children’s guidelines</p>
      <p className={styles.container__text}>
        Our Services are intended for individuals who are 16 years of age or
        older (or any other age mandated by local law).
      </p>

      <p className={styles.container__article}>
        Changes to this privacy policy
      </p>
      <p className={styles.container__text}>
        At any time, Cove Creek Productions reserves the right to modify this
        privacy policy at its discretion. We will indicate the revised date at
        the bottom of this page once the update is complete.
      </p>

      <p className={styles.container__article}>Log files</p>
      <p className={styles.container__text}>
        Certain platforms utilize Log Files/GPS data to obtain and store
        specific information that your browser transmits when visiting a
        website. These server logs may contain, but are not restricted to,
        internet protocol addresses, browser type, internet service provider,
        referring/exit pages, operating system, date/time stamp, and clickstream
        data. We use this data, which does not reveal individual users'
        identities, for various purposes, such as trend analysis, administering
        the platforms, monitoring users' activity on the platforms, and
        gathering demographic data.
      </p>

      <p className={styles.container__article}>
        Your acceptance of these terms
      </p>
      <p className={styles.container__text}>
        By using this Site, you signify your acceptance of this policy. If you
        do not agree to this policy, please do not use our Site. Your continued
        use of the Site following the posting of changes to this policy will be
        deemed your acceptance of those changes.
      </p>

      <p className={styles.container__article}>
        How can you contact us about this policy?
      </p>
      <p className={styles.container__text}>
        If you have questions or comments about this policy, you may contact us
        by email or mail:
      </p>
      <p className={styles.container__contact}>
        Cove Creek Productions, LLC
      </p>
      <p className={styles.container__contact}>2390 E Camelback Rd</p>
      <p className={styles.container__contact}>Phoenix, AZ 85016</p>

      <a
        href="mailto:info@covecreekproductions.com"
        className={styles.container__link}
      >
        info@covecreekproductions.com
      </a>
      <p className={styles.container__contact}>
        This document was last revised on February 5, 2023
      </p>
    </section>
  );
}

export default Privacy;
