"use client";

import { usePathname } from "next/navigation";
import styles from "./Content.module.css";

interface Props {
  resorts: Hotel[];
}

export default function Content({ resorts }: Props) {
  const { content, section, title, containerText } = styles;

  const pathname = usePathname();
  const paths = pathname.split("/");
  const slugHotel = paths[paths.length - 1];
  const hotel = resorts.find((h) => h.slug === slugHotel);

  if (!hotel) return null;

  const { things1, things2, additional } = hotel;

  return (
    <article className={content}>
      <section className={section}>
        <h2 className={title}>Things To Know</h2>
        <div className={containerText}>
          <div dangerouslySetInnerHTML={{ __html: things1 }}></div>
          <div dangerouslySetInnerHTML={{ __html: things2 }}></div>
        </div>
      </section>
      <section className={section}>
        <h2 className={title}>Additional rules</h2>
        <div className={containerText}>
          <div dangerouslySetInnerHTML={{ __html: additional }}></div>
        </div>
      </section>
    </article>
  );
}
