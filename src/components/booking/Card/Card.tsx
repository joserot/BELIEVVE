import Image from "next/image";
import styles from "./Card.module.css";

interface Props {
  room: any;
  checkIn: any;
  checkOut: any;
  guests: any;
}

export default function Card({ room, checkIn, checkOut, guests }: Props) {
  const { card, image } = styles;

  return (
    <article className={card}>
      <Image
        className={image}
        src={room.images[0]}
        width={250}
        height={250}
        alt="resort"
      />
      <h3>{room.name}</h3>
      <p>
        <strong>Check in:</strong> {checkIn}
      </p>
      <p>
        <strong>Check out:</strong> {checkOut}
      </p>
      <p>
        <strong>Guest:</strong> {guests}
      </p>
    </article>
  );
}
