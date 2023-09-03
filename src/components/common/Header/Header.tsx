"use client";

import styles from "./Header.module.css";
import Link from "next/link";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import WhatsAppIcon from "../icons/WhatsApp";
import TikTokIcon from "../icons/TikTok";
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
		href: "https://www.facebook.com/vvoutlet.travelnow",
		label: "Facebook",
		icon: <FacebookIcon />,
	},
	{
		href: "https://www.instagram.com/vvoutlet.travelnow/",
		label: "Instagram",
		icon: <InstagramIcon />,
	},
	{
		href: "https://www.tiktok.com/@vvoutlet",
		label: "TikTok",
		icon: <TikTokIcon />,
	},
	{
		href: "https://api.whatsapp.com/send/?phone=14077575376",
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
							<a
								className={styles.social}
								key={href}
								href={href}
								target="_blank"
							>
								{icon}
							</a>
						);
					})}
					<a href="tel:+14077575376" target="_blank" className={styles.phone}>
						+14077575376
					</a>
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
