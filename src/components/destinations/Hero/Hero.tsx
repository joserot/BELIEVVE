"use client";

import { usePathname } from "next/navigation";
import styles from "./Hero.module.css";

interface Props {
  destinations: Destination[];
}

export default function Hero({ destinations }: Props) {
  const pathname = usePathname();
  const idDestination = pathname.split("/destinations/")[1];
  const destination = destinations.find((d) => d.slug === idDestination);

  if (!destination) return null;

  return (
    <article className={styles.hero}>
      <div className={styles.heroContainer}>
        <h1>{destination.name}</h1>
        <h2>Resorts</h2>
        {destination.description && <p>{destination.description}</p>}
      </div>
    </article>
  );
}
