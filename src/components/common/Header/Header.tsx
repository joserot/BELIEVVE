"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import WhatsAppIcon from "../icons/WhatsApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Image from "next/image";

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
		icon: <FacebookIcon />,
	},
	{
		href: "https://www.instagram.com/",
		label: "Instagram",
		icon: <InstagramIcon />,
	},
	{
		href: "https://www.whatsapp.com/",
		label: "WhatsApp",
		icon: <WhatsAppIcon />,
	},
];

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
		event.preventDefault();

		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Link className={styles.logo} href="/">
					<Image src="/img/logo.png" alt="logo" width={150} height={50} />
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
					{socialLinks.map(({ href, icon }) => {
						return (
							<a key={href} href={href} target="_blank">
								{icon}
							</a>
						);
					})}
					<span className={styles.phone}>+14077575376</span>
				</div>
				<button onClick={handleMenuClick} className={styles.burgerMenu}>
					<FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
				</button>
			</div>
			{isMenuOpen && (
				<NavBar
					links={links}
					socialLinks={socialLinks}
					handleMenuClick={handleMenuClick}
					isMenuOpen={isMenuOpen}
				/>
			)}
		</header>
	);
}
