"use client";

import styles from "./Main.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/splide/css";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  resorts: Hotel[];
}

export default function Main({ resorts }: Props) {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const slugHotel = paths[paths.length - 1];
  const hotel = resorts.find((h) => h.slug === slugHotel);

  if (!hotel) return null;

  const { name, description, images, text1, text2 } = hotel;

  return (
    <article className={styles.hotel}>
      <h2>{name}</h2>

      <section className={styles.hotelContainerRight}>
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
    </article>
  );
}
