"use client";

import styles from "./Contact.module.css";

import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <article className={styles.contact}>
      <h2>Please choose the best way to contact us.</h2>

      <div className={styles.container}>
        <div className={show ? styles.linksOpen : styles.linksClose}>
          <a className={styles.phone} href="tel:+14077575376" target="_blank">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a
            className={styles.whatsapp}
            href="https://api.whatsapp.com/send/?phone=14077575376"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            className={styles.email}
            href="mailto:vvoreservations6@gmail.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <button onClick={handleShow} className={styles.buttonMain}>
          <Image src={"/img/logo-2.png"} alt={"logo"} width={50} height={50} />
        </button>
      </div>
    </article>
  );
}
