import DestinationCard from "../DestinationCard/DestinationCard";
import styles from "./Content.module.css";
import { client } from "<src>/lib/contentful";
import getDestinations from "<src>/models/destinations";

async function getData() {
  const response = await client.getEntries({ content_type: "destination" });

  return response;
}

export default async function Content() {
  const response = await getData();

  const destinationsData = await getDestinations(response);

  return (
    <article className={styles.content}>
      <h1>LOCATIONS</h1>
      <div className={styles.cardsContainer}>
        {destinationsData.map(
          ({
            name,
            description,
            imagePrimary,
            imageSecondary,
            imageTertiary,
            slug,
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
              />
            );
          }
        )}
      </div>
    </article>
  );
}
