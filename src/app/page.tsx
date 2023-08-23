import styles from "./page.module.css";
import Header from "<src>/components/common/Header/Header";
import HeroHome from "<src>/components/home/Hero/Hero";
import Information from "<src>/components/home/Information/Information";

const orlando = {
	name: "Orlando",
	description: "Family Fun in the Heart of the Parks",
	imagePrimary: "",
	imageSecondary: "",
	imageTertiary: "",
};

export default function Home() {
	return (
		<main>
			<Header />
			<HeroHome />
			<Information />
		</main>
	);
}
