"use client";

import WhatsAppIcon from "../icons/WhatsApp";
import { useState } from "react";
import Message from "./Message/Message";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<article className={styles.container}>
			{isOpen && <Message />}
			<button className={styles.button} onClick={handleClick}>
				<WhatsAppIcon />
			</button>
		</article>
	);
}
