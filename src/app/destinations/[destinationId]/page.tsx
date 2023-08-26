import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import destinations from "../../../../assets/destinations";
import Hero from "<src>/components/destinations/Hero/Hero";
import Content from "<src>/components/destinations/Content/Content";

export default function DestinationPage() {
	return (
		<main
			style={{
				position: "relative",
			}}
		>
			<Header />
			<Hero destinations={destinations} />
			<Content destinations={destinations} />
			<Footer />
		</main>
	);
}
