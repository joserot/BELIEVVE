import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <article className={styles.hero}>
      <Image
        className={styles.heroImage}
        src="/img/destinations/hero-destination.png"
        alt="Hero image"
        width={1920}
        height={700}
      />
      <div className={styles.heroContainer}>
        <h2>
          Are you looking for adventure? Explore new destinations with us!
        </h2>
        <h1> Vive vacations outlet welcomes you</h1>
        <h3>BELIVVE, LIVVE AND LOVVE IT THIS EXPERIENCE</h3>
        <p>
          Explore our diverse range of captivating destinations and exclusive
          resorts. Here, you&apos;ll uncover a world of thrilling entertainment,
          craft indelible memories, and, most significantly, seize the
          incredible savings and deals we offer. Allow us to curate your dream
          vacation, where each moment is a tapestry of joy and love – all
          without breaking the bank. Travel need not be extravagant; let us help
          you make the most of your budget, so you can focus on what truly
          matters: cherishing moments with your loved ones.
        </p>
      </div>
    </article>
  );
}
