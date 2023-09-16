"use client";

import styles from "./Content.module.css";
import Hotel from "../Hotel/Hotel";
import { usePathname } from "next/navigation";

interface Props {
  destinations: Destination[];
}

export default function Content({ destinations }: Props) {
  const pathname = usePathname();
  const idDestination = pathname.split("/destinations/")[1];
  const destination = destinations.find((d) => d.slug === idDestination);

  if (!destination) return null;

  return (
    <article className={styles.content}>
      {destination.hotels && destination.hotels.length ? (
        destination.hotels.map((hotel, index) => {
          const orientation = index % 2 === 0 ? "right" : "left";
          return (
            <Hotel
              key={hotel.slug}
              title={hotel.title}
              description={hotel.description}
              longDescription={hotel.longDescription}
              images={hotel.images}
              orientation={orientation}
              slug={hotel.slug}
            />
          );
        })
      ) : (
        <div className={styles.noHotels}>
          <p>No hotels found :(</p>
        </div>
      )}
    </article>
  );
}
