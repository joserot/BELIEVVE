import styles from "./About.module.css";

interface Props {
  about: About;
}

export default function About({ about }: Props) {
  return (
    <article className={styles.about}>
      <h2>About us</h2>
      <p>{about.text1}</p>
      <p>{about.text2}</p>
    </article>
  );
}
