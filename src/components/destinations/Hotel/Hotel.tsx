"use client";

import styles from "./Hotel.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/splide/css";
import Image from "next/image";

interface orientation {
  orientation?: "left" | "right";
}

type Props = Hotel & orientation;

export default function Hotel({
  title,
  description,
  longDescription,
  parking,
  images,
  orientation = "left",
}: Props) {
  return (
    <article className={styles.hotel}>
      <h2>{title}</h2>

      <section
        className={
          orientation === "right"
            ? styles.hotelContainerRight
            : styles.hotelContainerLeft
        }
      >
        {images && images.length ? (
          <div className={styles.hotelImages}>
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                arrows: true,
                paginationKeyboard: true,
                width: "100%",
                height: "500px",
                lazyLoad: true,
              }}
              aria-label="Images"
            >
              {images.map((image) => {
                return (
                  <SplideSlide key={image}>
                    <Image
                      className={styles.image}
                      src={image}
                      alt={"Hotel"}
                      width={300}
                      height={300}
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        ) : null}
        <div className={styles.description}>
          <p>{description}</p>
        </div>
      </section>
      <button className={styles.moreInformation}>MORE INFORMATION</button>
    </article>
  );
}
