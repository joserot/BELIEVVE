import styles from "./page.module.css";
import Header from "<src>/components/common/Header/Header";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}></main>
		</>
	);
}
