import styles from "./page.module.css";
import Header from "<src>/components/common/Header/Header";
import HeroHome from "<src>/components/home/Hero/Hero";
import Information from "<src>/components/home/Information/Information";
import Destination from "<src>/components/home/Destination/Destination";
import Testimonials from "<src>/components/home/Testimonials/Testimonials";
import Footer from "<src>/components/common/Footer/Footer";
import destinations from "../../assets/destinations";
import testimonials from "../../assets/testimonials";

export default function Home() {
	return (
		<main
			style={{
				position: "relative",
			}}
		>
			<Header />
			<HeroHome />
			<Information />
			{destinations.map((destination, index) => {
				const type = index % 2 === 0 ? "left" : "right";
				return (
					<Destination
						key={destination.id}
						name={destination.name}
						description={destination.description}
						imagePrimary={destination.imagePrimary}
						imageSecondary={destination.imageSecondary}
						imageTertiary={destination.imageTertiary}
						id={destination.id}
						hotels={destination.hotels}
						type={type}
					/>
				);
			})}
			<Testimonials testimonials={testimonials} />
			<Footer />
		</main>
	);
}
