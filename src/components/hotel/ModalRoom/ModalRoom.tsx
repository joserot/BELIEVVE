"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Image from "next/image";
import styles from "./ModalRoom.module.css";

const imagesList = [
  "/img/rooms/1.png",
  "/img/rooms/2.png",
  "/img/rooms/3.jpeg",
  "/img/rooms/4.png",
];

export default function ModalRoom() {
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
        {imagesList.map((image) => {
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
      <h3 className={h3}>2 bedroom</h3>
      <section className={section}>
        <div className={col}>
          <p>98 sq m</p>
          <p>Sleeps 6</p>
          <p>1 King Bed, 1 Queen Sofa Bed and 1 Queen Bed</p>
        </div>
      </section>
      <section className={section}>
        <div className={col}>
          <h4>ROOM AMENITIES</h4>
          <h5>Bedroom</h5>
          <ul>
            <li>Bed sheets</li>
            <li>Ceiling fan</li>
            <li>Climate-controlled air conditioning</li>
            <li>Free cribs/infant beds</li>
            <li>Pillowtop bed</li>
            <li>Premium bedding</li>
          </ul>

          <h4>Food and drink</h4>
          <ul>
            <li>Bed sheets</li>
            <li>Ceiling fan</li>
            <li>Climate-controlled air conditioning</li>
            <li>Free cribs/infant beds</li>
            <li>Pillowtop bed</li>
            <li>Premium bedding</li>
          </ul>
          <h4>Entertainment</h4>
          <ul>
            <li>Bed sheets</li>
            <li>Ceiling fan</li>
            <li>Climate-controlled air conditioning</li>
            <li>Free cribs/infant beds</li>
            <li>Pillowtop bed</li>
            <li>Premium bedding</li>
          </ul>
        </div>
        <div className={col}>
          <h4>Bathroom</h4>
          <ul>
            <li>Bed sheets</li>
            <li>Ceiling fan</li>
            <li>Climate-controlled air conditioning</li>
            <li>Free cribs/infant beds</li>
            <li>Pillowtop bed</li>
            <li>Premium bedding</li>
          </ul>
          <h4>More</h4>
          <ul>
            <li>Bed sheets</li>
            <li>Ceiling fan</li>
            <li>Climate-controlled air conditioning</li>
            <li>Free cribs/infant beds</li>
            <li>Pillowtop bed</li>
            <li>Premium bedding</li>
          </ul>
        </div>
      </section>
      <button className={reserve}>Reserve</button>
    </article>
  );
}
