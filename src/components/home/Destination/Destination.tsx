import styles from "./Destination.module.css";
import Image from "next/image";
import Link from "next/link";

interface orientation {
  orientation: "left" | "right";
}

type Props = Destination & orientation;

export default function Destination({
  name,
  description,
  imagePrimary,
  imageSecondary,
  imageTertiary,
  slug,
  orientation = "right",
}: Props) {
  return (
    <article className={styles.destination}>
      <Image
        className={styles.imagePrimary}
        src={imagePrimary}
        alt={name}
        width={1000}
        height={500}
      />
      <div
        className={
          orientation === "right" ? styles.containerRight : styles.containerLeft
        }
      >
        <section className={styles.col1}>
          <div className={styles.imagesContainer}>
            <Image
              className={styles.image1}
              src={imageSecondary}
              alt={name}
              width={300}
              height={300}
            />
            <Image
              className={
                orientation === "right" ? styles.image2Right : styles.image2Left
              }
              src={imageTertiary}
              alt={name}
              width={200}
              height={200}
            />
          </div>
        </section>
        <section className={styles.col2}>
          <h2>{name}</h2>
          <p>{description}</p>
          <Link href={`/destinations/${slug}`}>{name + " resorts"}</Link>
        </section>
      </div>
    </article>
  );
}
