import styles from "./About.module.css";

export default function About() {
  return (
    <article className={styles.about}>
      <h2>About us</h2>
      <p>
        We are timeshare owners and property owners at multiple resorts like
        this one. To compete with the rising cost of short-term rentals, we use
        our owner referral program to offer the cheapest rates possible to you,
        our guest.
      </p>
      <p>
        Therefore in order to secure this fantastic deal with us, it is
        necessary to participate in a 120-minute courtesy breakfast or lunch
        buffet and a brief preview tour of our luxurious resort. Please note
        that participation is limited to couples aged 28 years or older (30
        years for singles). However, there is no obligation to make any
        purchases during the tour.
      </p>
    </article>
  );
}
