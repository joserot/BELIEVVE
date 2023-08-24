import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<Link href="/terms-and-conditions" className={styles.terms}>
					Terms and Conditions
				</Link>
			</div>
		</footer>
	);
}
