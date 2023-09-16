import destinations from "../../../../assets/destinations";
import DestinationCard from "../DestinationCard/DestinationCard";
import styles from "./Content.module.css";

export default function Content() {
  return (
    <article className={styles.content}>
      <h1>LOCATIONS</h1>
      <div className={styles.cardsContainer}>
        {destinations.map(
          ({
            name,
            description,
            imagePrimary,
            imageSecondary,
            imageTertiary,
            slug,
            hotels,
          }) => {
            return (
              <DestinationCard
                key={slug}
                name={name}
                description={description}
                imagePrimary={imagePrimary}
                imageSecondary={imageSecondary}
                imageTertiary={imageTertiary}
                slug={slug}
                hotels={hotels}
              />
            );
          }
        )}
      </div>
    </article>
  );
}
