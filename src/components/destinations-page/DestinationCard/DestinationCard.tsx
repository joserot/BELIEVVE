import Image from "next/image";
import styles from "./DestinationCard.module.css";
import Link from "next/link";

export default function DestinationCard({
  name,
  description,
  imagePrimary,
  imageSecondary,
  imageTertiary,
  slug,
}: Destination) {
  const {
    card,
    containerImages,
    imageMain,
    imageOthers,
    link,
    containerImageMain,
    containerImageOthers,
  } = styles;

  return (
    <article className={card}>
      <h2>{name}</h2>
      <div className={containerImages}>
        <div className={containerImageOthers}>
          <Image
            className={imageOthers}
            src={imageTertiary}
            alt={name}
            width={500}
            height={500}
          />
        </div>
        <div className={containerImageMain}>
          <Image
            className={imageMain}
            src={imagePrimary}
            alt={name}
            width={500}
            height={500}
          />
        </div>
        <div className={containerImageOthers}>
          <Image
            className={imageOthers}
            src={imageSecondary}
            alt={name}
            width={500}
            height={500}
          />
        </div>
      </div>
      <Link className={link} href={`/destinations/${slug}`}>
        {name + " resorts"}
      </Link>
    </article>
  );
}
