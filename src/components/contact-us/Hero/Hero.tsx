import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<article className={styles.hero}>
			<h1>Contact us</h1>
			<h2>Get support right away.</h2>
			<p>With our online assistant, you&apos;ll get the following:</p>
			<ul>
				<li>Ideas to get the best vacations and low prices.</li>
				<li>
					We could answer your questions about our process and destinations.
				</li>
				<li>
					Get information about the different types of rooms that we have.
				</li>
				<li>The quickest way is to get your confirmation.</li>
			</ul>
		</article>
	);
}
