import Text from "../Text/Text";
import Form from "../Form/Form";
import styles from "./Content.module.css";
import Card from "../Card/Card";

export default function Content() {
  const { container, containerMain, containerCard } = styles;

  return (
    <article className={container}>
      <div className={containerMain}>
        <Text />
        <Form />
      </div>
      <div className={containerCard}>
        <Card />
      </div>
    </article>
  );
}
