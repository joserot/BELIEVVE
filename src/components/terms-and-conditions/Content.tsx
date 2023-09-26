import styles from "./Content.module.css";

interface Props {
  terms: string;
}

export default function Content({ terms }: Props) {
  const { content } = styles;

  return (
    <article className={content}>
      <h1>Terms and Conditions</h1>

      <div dangerouslySetInnerHTML={{ __html: terms }}></div>
    </article>
  );
}
