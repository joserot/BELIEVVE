"use client";

import { useState } from "react";
import styles from "./Message.module.css";

export default function Message() {
	const [message, setMessage] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const phone = "14077575376";
		const link = `https://wa.me/${phone}?text=${message}`;

		if (!message.length) return;

		window.open(link, "_blank");

		setMessage("");
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				onChange={handleChange}
				type="text"
				placeholder="Type a message"
			/>
			<button className={styles.button}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height={24}
					viewBox="0 -960 960 960"
					width={24}
				>
					<path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
				</svg>
			</button>
		</form>
	);
}
