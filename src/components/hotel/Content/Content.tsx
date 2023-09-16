import styles from "./Content.module.css";

export default function Content() {
  const { content, section, title, containerText } = styles;

  return (
    <article className={content}>
      <section className={section}>
        <h2 className={title}>Things To Know</h2>
        <div className={containerText}>
          <div>
            <h3>Check-in:</h3>
            <p>Check-in: 4:00 PM</p>
            <h3>Check-out:</h3>
            <p>Check-out: 10:00 AM</p>
            <h3>Check-in instructions:</h3>
            <p>Front desk staff will greet guests on arrival</p>
            <h3>Pets:</h3>
            <p>
              Pets not allowed (service animals are welcome, and are exempt from
              fees)
            </p>
            <h3>No parties or events</h3>
            <h3>No smoking</h3>
          </div>
          <div>
            <h3>Safety & property:</h3>
            <p>
              Avoid surprises by looking over these important details about your
              Host&apos;s property.
            </p>
            <h3>Safety devices:</h3>
            <p>Carbon monoxide alarm installed</p>
            <p>Smoke alarm installed</p>
          </div>
        </div>
      </section>
      <section className={section}>
        <h2 className={title}>Additional rules</h2>
        <div className={containerText}>
          <div>
            <p>
              We are timeshare owners and property owners at multiple resorts
              like this one. To compete with the rising cost of short-term
              rentals, we use our owner referral program to offer the cheapest
              rates possible to you, our guest.
            </p>
            <p>
              Therefore, to secure this fantastic deal with us, we must
              participate in a 120-minute courtesy breakfast or lunch buffet and
              a brief preview tour of our luxurious resort. As you know,
              participation is limited to singles or couples aged 28 years or
              older. However, you don&apos;t need to make any purchases during
              the tour.
            </p>
            <p>
              RESORT TAXES OF $45 PER NIGHT AND A $150 SECURITY DEPOSIT ARE DUE
              AT CHECK-IN. (DEPOSIT REFUNDED AT CHECK-OUT)
            </p>
            <p>
              To check-in, you must have a real ID and a Major Credit Card under
              your name (virtual or pre-paid cards are not accepted). Both
              participants must be fluent in English to participate in the
              resort&apos;s presentations.
            </p>
            <p>We only accept Service dogs free of charge.</p>
            <p>
              Requirements: Must have an ADA Form as proof that Emotional
              Support Dogs are not considered Service Dogs. NOT UNLESS THE GUEST
              HAS AN America Disability Association as proof.
            </p>
            <p>Smoking is allowed in smoking areas only.</p>
            <p>
              NOTE: Our special Low rates are for our resort units only
              (independent apartments). I&apos;D LIKE TO LET YOU KNOW THAT NO
              OTHER ACTIVITIES ARE INCLUDED AS THIS IS A DISCOUNTED RATE.
            </p>
            <p>
              -ALL OTHER AMENITIES MIGHT HAVE AN ADDITIONAL COST. PLEASE STOP BY
              THE FRONT DESK IF YOU ARE INTERESTED IN DOING EXTRA ACTIVITIES AT
              THE RESORT.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
