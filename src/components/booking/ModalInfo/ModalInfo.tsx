import styles from "./ModalInfo.module.css";

export default function ModalInfo() {
  const { modal } = styles;

  return (
    <article className={modal}>
      <p>This field is optional, complete it to win prizes</p>
    </article>
  );
}
