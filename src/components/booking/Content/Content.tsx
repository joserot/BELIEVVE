import Text from "../Text/Text";
import Form from "../Form/Form";
import styles from "./Content.module.css";

export default function Content() {
  const { container } = styles;

  return (
    <article className={container}>
      <Text />
      <Form />
    </article>
  );
}
