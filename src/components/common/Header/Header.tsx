import styles from "./Header.module.css";
import Link from "next/link";

const links = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/destinations",
		label: "Destinations",
	},
	{
		href: "/contact-us",
		label: "Contact Us",
	},
];

const socialLinks = [
	{
		href: "https://www.facebook.com/",
		label: "Facebook",
	},
	{
		href: "https://www.instagram.com/",
		label: "Instagram",
	},
	{
		href: "https://www.whatsapp.com/",
		label: "WhatsApp",
	},
];

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Link className={styles.logo} href="/">
					<span>Logo</span>
				</Link>
				<nav className={styles.navbar}>
					{links.map(({ href, label }) => {
						return (
							<Link key={label} href={href}>
								{label}
							</Link>
						);
					})}
				</nav>
				<div className={styles.socialLinks}>
					{socialLinks.map(({ href, label }) => {
						return (
							<a key={href} href={href} target="_blank">
								{label}
							</a>
						);
					})}
				</div>
			</div>
		</header>
	);
}
