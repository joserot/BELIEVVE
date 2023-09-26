"use client";

import { log } from "console";
import Destination from "../Destination/Destination";

interface Props {
  destinations: Destination[];
}

export default function Content({ destinations }: Props) {
  return destinations.map((destination, index) => {
    const type = index % 2 === 0 ? "left" : "right";
    return (
      <Destination
        key={destination.slug}
        name={destination.name}
        description={destination.description}
        imagePrimary={destination.imagePrimary}
        imageSecondary={destination.imageSecondary}
        imageTertiary={destination.imageTertiary}
        slug={destination.slug}
        orientation={type}
      />
    );
  });
}
