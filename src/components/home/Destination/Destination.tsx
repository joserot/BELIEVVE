import styles from "./Destination.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Destination({
	name,
	description,
	imagePrimary,
	imageSecondary,
	imageTertiary,
	id,
	type = "right",
}: Destination) {
	return (
		<article
			style={{
				backgroundImage: `linear-gradient(to right, #ffffff9e, #ffffff9e),  url(${imagePrimary})`,
			}}
			className={styles.destination}
		>
			<div
				className={
					type === "right" ? styles.containerRight : styles.containerLeft
				}
			>
				<section className={styles.col1}>
					<div className={styles.imagesContainer}>
						<Image
							className={styles.image1}
							src={imageSecondary}
							alt={name}
							width={500}
							height={500}
						/>
						<Image
							className={
								type === "right" ? styles.image2Right : styles.image2Left
							}
							src={imageTertiary}
							alt={name}
							width={400}
							height={400}
						/>
					</div>
				</section>
				<section className={styles.col2}>
					<h2>{name}</h2>
					<p>{description}</p>
					<Link href={`/destinations/${id}`}>{name + " resorts"}</Link>
				</section>
			</div>
		</article>
	);
}
