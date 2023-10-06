"use client";

import styles from "./Content.module.css";
import Hotel from "../Hotel/Hotel";
import { usePathname } from "next/navigation";

interface Props {
  hotels: Hotel[];
  destinations: Destination[];
}

export default function Content({ hotels, destinations }: Props) {
  const pathname = usePathname();
  const idDestination = pathname.split("/destinations/")[1];
  const destination = destinations.find((d) => d.slug === idDestination);

  if (!destination || !hotels) return null;

  const filterHotelsByDestination = hotels.filter((h: any) => {
    return h.destination.fields.name === destination.name;
  });

  return (
    <article className={styles.content}>
      {filterHotelsByDestination && filterHotelsByDestination.length ? (
        filterHotelsByDestination.map((hotel, index) => {
          const orientation = index % 2 === 0 ? "right" : "left";
          return (
            <Hotel
              key={hotel.slug}
              name={hotel.name}
              description={hotel.description}
              images={hotel.images}
              orientation={orientation}
              slug={hotel.slug}
              text1={hotel.text1}
              text2={hotel.text2}
              things1={hotel.things1}
              things2={hotel.things2}
              additional={hotel.additional}
              destination={destination.slug}
              secretName={hotel.secretName}
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
