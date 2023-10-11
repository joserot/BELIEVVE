"use client";

import styles from "./Hotel.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/splide/css";
import Image from "next/image";
import Link from "next/link";

interface orientation {
  orientation?: "left" | "right";
}

type Props = Hotel & orientation;

export default function Hotel({
  name,
  description,
  images,
  slug,
  text1,
  text2,
  things1,
  things2,
  additional,
  destination,
  orientation = "left",
}: Props) {
  return (
    <article className={styles.hotel}>
      <h2>{name}</h2>

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
                      width={700}
                      height={600}
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
      <section className={styles.shortInformation}>
        <div
          dangerouslySetInnerHTML={{ __html: text1 }}
          className={styles.shortSection}
        ></div>
        <div
          dangerouslySetInnerHTML={{ __html: text2 }}
          className={styles.shortSection}
        ></div>
      </section>
      <Link
        href={`/destinations/${destination}/${slug}`}
        className={styles.moreInformation}
      >
        MORE INFORMATION
      </Link>
    </article>
  );
}
