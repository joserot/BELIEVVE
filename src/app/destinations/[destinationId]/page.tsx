import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import destinations from "../../../../assets/destinations";
import Title from "<src>/components/destinations/Title/Title";

export default function DestinationPage() {
	return (
		<main
			style={{
				position: "relative",
			}}
		>
			<Header />
			<Title destinations={destinations} />
			<Footer />
		</main>
	);
}
