import { cards } from "../../constants/youvisittours";
import ContactComponent from "../ContactComponent";
import TourGrid from "../TourGrid";
import styles from "./style.module.scss";
import SmallHeading from "../SmallHeading";
import Container from "../Container";
import Button from "../Button";
import PAGES from "src/constants/pages";

function YouvisitTours() {
  return (
    <div className={styles.youvisit}>
      <section className={styles.top_section}>
        <SmallHeading as="h1">Cove Creek vs. YouVisit</SmallHeading>
        <h2 className={styles.title}>See what makes us stand out</h2>
        <Button variant={"transparent"} to={PAGES.Contact.path}>
          Schedule a Demo
        </Button>
        <TourGrid cards={cards} />
      </section>

      <section className={styles.youvisit__text}>
        <Container style={{ maxWidth: 960 }}>
          <div className={styles.youvisit__inner}>
            <SmallHeading>Unmatched Quality</SmallHeading>
            <p>
              Cove Creek is focused on creating the highest quality tour to
              showcase your school.
            </p>

            <SmallHeading>Attention To Detail</SmallHeading>
            <p>
              All aspects of production are finely tuned. Our owner is onsite
              for every project, ensuring your campus is captured to its full
              potential.
            </p>
            <SmallHeading>Custom Development</SmallHeading>
            <p>
              Your school will look unique, not the cookie cutter look of other
              schools. We integrate your brand into your tour.
            </p>
            <SmallHeading>Clean Design</SmallHeading>
            <p>We've spent 10 years creating a clean and intuitive interface</p>
            <SmallHeading>Price</SmallHeading>
            <p>
              Our tours are reasonably priced and our hosting fees are low.{" "}
            </p>
            <SmallHeading>You own the Content</SmallHeading>
            <p>When you partner with Cove Creek, you own the content. </p>
            <SmallHeading>No Multi-Year Contract</SmallHeading>
            <p>
              We do not believe in locking our clients into long term contracts.
            </p>
            <SmallHeading>Our Commitment</SmallHeading>
            <p>
              We are committed to delivering the very best in virtual reality.
              We are confident in our ability to showcase your school to its
              full potential.
            </p>
          </div>
        </Container>
      </section>
      <ContactComponent />
    </div>
  );
}

export default YouvisitTours;
