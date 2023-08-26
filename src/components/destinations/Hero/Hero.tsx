"use client";

import { usePathname } from "next/navigation";
import styles from "./Hero.module.css";

interface Props {
	destinations: Destination[];
}

export default function Hero({ destinations }: Props) {
	const pathname = usePathname();
	const idDestination = parseInt(pathname.split("/destinations/")[1]);
	const destination = destinations.find((d) => d.id === idDestination);

	if (!destination) return null;

	return (
		<article className={styles.hero}>
			<div className={styles.heroContainer}>
				<h1>{destination.name}</h1>
				<h2>Resorts</h2>
				{destination.longDescription && <p>{destination.longDescription}</p>}
			</div>
		</article>
	);
}
