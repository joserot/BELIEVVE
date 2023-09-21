"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import styles from "./ModalRoom.module.css";
import Link from "next/link";

interface Props {
  room: Room;
}

export default function ModalRoom({ room }: Props) {
  const { container, h2, imageEl, h3, section, col, reserve } = styles;

  return (
    <article className={container}>
      <h2 className={h2}>Room information</h2>
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          perMove: 1,
          autoplay: true,
          interval: 5000,
          pauseOnHover: false,
          pauseOnFocus: false,
          resetProgress: true,
          arrows: true,
          pagination: false,
          paginationKeyboard: true,
          width: "100%",
          height: "500px",
          lazyLoad: true,
        }}
        aria-label="Testimonials"
      >
        {room.images.map((image) => {
          return (
            <SplideSlide key={image}>
              <Image
                className={imageEl}
                src={image}
                width={1000}
                height={500}
                alt={"2 bedroom"}
              />
            </SplideSlide>
          );
        })}
      </Splide>
      <h3 className={h3}>{room.name}</h3>
      <section className={section}>
        <div className={col}>
          <p>{room.text1}</p>
          <p>{room.text2}</p>
          <p>{room.text3}</p>
        </div>
      </section>
      <section className={section}>
        <div className={col}>
          <h4>ROOM AMENITIES</h4>
          <h5>Bedroom</h5>
          <div dangerouslySetInnerHTML={{ __html: room.bedroom }}></div>

          <h4>Food and drink</h4>
          <div dangerouslySetInnerHTML={{ __html: room.foodAndDrink }}></div>
          <h4>Entertainment</h4>
          <div dangerouslySetInnerHTML={{ __html: room.entertainment }}></div>
        </div>
        <div className={col}>
          <h4>Bathroom</h4>
          <div dangerouslySetInnerHTML={{ __html: room.bathroom }}></div>
          <h4>More</h4>
          <div dangerouslySetInnerHTML={{ __html: room.more }}></div>
        </div>
      </section>
      <Link href={`/booking?id=${room.id}`} className={reserve}>
        Reserve
      </Link>
    </article>
  );
}
