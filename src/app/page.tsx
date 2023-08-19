import styles from "./page.module.css";
import Header from "<src>/components/common/Header/Header";
import HeroHome from "<src>/components/home/Hero/Hero";

export default function Home() {
	return (
		<>
			<Header />
			<HeroHome />
			<main className={styles.main}></main>
		</>
	);
}
