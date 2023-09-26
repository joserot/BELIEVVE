"use client";

import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  room: Room;
  openModal: () => void;
  setRoomForModal: (room: Room) => void;
  destinationSlug: string;
}

export default function Card({
  room,
  openModal,
  setRoomForModal,
  destinationSlug,
}: Props) {
  const {
    card,
    container,
    h2,
    col1,
    col2,
    title,
    text,
    price,
    btnCta,
    btnResort,
  } = styles;

  const resort: any = room.resort;

  const resortName = resort.fields.name;
  const resortSlug = resort.fields.slug;

  return (
    <article className={card}>
      <h2 className={h2}>{resortName}</h2>
      <div className={container}>
        <div className={col1}>
          <Image
            src={room.images[0]}
            alt={room.name}
            width={300}
            height={300}
          />
        </div>
        <div className={col2}>
          <h3 className={title}>{room.name}</h3>
          <span className={text}>{room.text1}</span>
          <span className={text}>{room.text2}</span>
          <span className={text}>{room.text3}</span>
          <button
            onClick={() => {
              setRoomForModal(room);
              openModal();
            }}
            className={btnCta}
          >
            More details <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <span className={price}>{room.price1}</span>
          <span className={price}>{room.price2}</span>
        </div>
      </div>
      <Link
        href={`/destinations/${destinationSlug}/${resortSlug}`}
        className={btnResort}
      >
        Resort details <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </article>
  );
}
