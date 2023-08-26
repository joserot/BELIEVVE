import styles from "./Hero.module.css";
import Image from "next/image";

export default function HeroHome() {
	return (
		<article className={styles.hero}>
			<Image
				src={
					"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
				}
				alt="Believve"
				width={1920}
				height={700}
				className={styles.heroImage}
			/>
			<h1>BELIEVVE LIVVE & LOVVE IT! </h1>
			<h2>We make it possible</h2>
		</article>
	);
}
