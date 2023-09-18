import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Modal.module.css";

interface Props {
  children: JSX.Element;
  isOpen: boolean;
  closeModal: () => void;
}

export default function Modal({ children, isOpen, closeModal }: Props) {
  const { container, containerOpen, modal, button, content } = styles;

  return (
    <article className={`${container} ${isOpen && containerOpen}`}>
      <div className={modal}>
        <button className={button} onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={content}>{children}</div>
      </div>
    </article>
  );
}
