import styles from "./NavBar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface Link {
	href: string;
	label: string;
}

interface SocialLink {
	href: string;
	label: string;
	icon: JSX.Element;
}

interface Props {
	links: Link[];
	socialLinks: SocialLink[];
	handleMenuClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
	isMenuOpen: boolean;
}

export default function NavBar({
	links,
	socialLinks,
	handleMenuClick,
	isMenuOpen,
}: Props) {
	return (
		<nav className={styles.navBar}>
			<button onClick={handleMenuClick} className={styles.burgerMenu}>
				<FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
			</button>
			<section className={styles.links}>
				{links.map(({ href, label }) => {
					return (
						<Link key={label} href={href}>
							{label}
						</Link>
					);
				})}
			</section>
			<section className={styles.socialLinks}>
				{socialLinks.map(({ href, icon }) => {
					return (
						<a key={href} href={href} target="_blank">
							{icon}
						</a>
					);
				})}
			</section>
			<span className={styles.phone}>+14077575376</span>
		</nav>
	);
}
