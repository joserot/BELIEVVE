"use client";

import styles from "./Hotel.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/splide/css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface orientation {
  orientation?: "left" | "right";
}

type Props = Hotel & orientation;

export default function Hotel({
  title,
  description,
  longDescription,
  images,
  slug,
  orientation = "left",
}: Props) {
  const pathname = usePathname();
  const destination = pathname.split("/destinations/")[1];

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
      <section className={styles.shortInformation}>
        <div className={styles.shortSection}>
          <h3>PARKING</h3>
          <p>Free Parking</p>
          <h3>Neighborhood description</h3>
          <p>2.7 mi to Disney&apos;s Animal KingDom</p>
          <p>3.1 mil to Disney&apos;s Blizzard Beach Water Park</p>
          <p>15.2 mil to Islands of Adventure</p>
          <p>6.3 mi to the Disney World</p>
          <p>6.1 mil to Magic KingDom</p>
          <p>15.1 mi to Volcano Bay</p>
        </div>
        <div className={styles.shortSection}>
          <h3>
            When you stay at this resort you will have access to a wide range of
            onsite amenities.
          </h3>
          <p>3 Heated Pools (9 AM- 11 PM Daily)</p>
          <p>Outdoor Hot Tub (9 AM- 11 PM Daily)</p>
          <p>Cabana Bar & Grill (9 AM- 11 PM Daily)</p>
          <p>Onsite Dining (11 AM - 10 PM)</p>
          <p>Mini Market Deli (7 AM- 10 PM Daily)( No Hot Food After 9 PM)</p>
          <p>Gift Shop (9 AM- 10 PM Daily)</p>
          <p>Sauna (9 AM- 9 PM Daily)</p>
          <p>Fitness Facility (9 AM- 9 PM Daily)</p>
        </div>
      </section>
      <Link href={`/${destination}/${slug}`} className={styles.moreInformation}>
        MORE INFORMATION
      </Link>
    </article>
  );
}
