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
            id,
            hotels,
          }) => {
            return (
              <DestinationCard
                key={id}
                name={name}
                description={description}
                imagePrimary={imagePrimary}
                imageSecondary={imageSecondary}
                imageTertiary={imageTertiary}
                id={id}
                hotels={hotels}
              />
            );
          }
        )}
      </div>
    </article>
  );
}
