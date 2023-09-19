import Image from "next/image";
import styles from "./Card.module.css";

export default function Card() {
  const { card, image } = styles;

  return (
    <article className={card}>
      <Image
        className={image}
        src={"/img/rooms/1.png"}
        width={300}
        height={300}
        alt="resort"
      />
      <h3>2 bedroom, 1 King Bed and 1 Queen Sofa Bed</h3>
      <p>
        <strong>Check in:</strong> 09/07/23
      </p>
      <p>
        <strong>Check out:</strong> 09/11/23
      </p>
      <p>3 nights stay</p>
      <p>
        <strong>Guest:</strong> 4
      </p>
    </article>
  );
}
