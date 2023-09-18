import styles from "./Hero.module.css";
import Image from "next/image";

export default function HeroHome() {
  return (
    <article className={styles.hero}>
      <Image
        src={"/img/home/hero.png"}
        alt="Believve"
        width={1900}
        height={700}
        className={styles.heroImage}
      />
      <h1>BELIEVVE LIVVE & LOVVE IT! </h1>
      <h2>We make it possible</h2>
    </article>
  );
}
