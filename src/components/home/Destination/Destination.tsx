import styles from "./Destination.module.css";
import Image from "next/image";

interface Props {
	name: string;
	description: string;
	imagePrimary: string;
	imageSecondary: string;
	imageTertiary: string;
}

export default function Destination({
	name,
	description,
	imagePrimary,
	imageSecondary,
	imageTertiary,
}: Props) {
	return (
		<article
			style={{
				backgroundImage: `linear-gradient(to right, #ffffff9e, #ffffff9e),  url(${imagePrimary})`,
			}}
			className={styles.destination}
		>
			<div className={styles.container}>
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
							className={styles.image2}
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
					<button>{name + " resorts"}</button>
				</section>
			</div>
		</article>
	);
}
