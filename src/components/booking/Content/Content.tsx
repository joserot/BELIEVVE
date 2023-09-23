"use client";

import Text from "../Text/Text";
import Form from "../Form/Form";
import styles from "./Content.module.css";
import Card from "../Card/Card";
import { useSearchParams } from "next/navigation";

interface Props {
  rooms: Room[];
}

export default function Content({ rooms }: Props) {
  const { container, containerMain, containerCard } = styles;

  const searchParams = useSearchParams();

  const roomSlug = searchParams.get("room");
  const guests = searchParams.get("guests");
  const checkIn = searchParams.get("in");
  const checkOut = searchParams.get("out");

  const thisRoom = rooms.find((r) => {
    return r.slug === roomSlug;
  });

  return (
    <article className={container}>
      <div className={containerMain}>
        <Text />
        <Form
          room={thisRoom}
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
        />
      </div>
      <div className={containerCard}>
        <Card
          room={thisRoom}
          checkIn={checkIn}
          checkOut={checkOut}
          guests={guests}
        />
      </div>
    </article>
  );
}
