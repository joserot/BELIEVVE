import styles from "./page.module.css";
import Header from "<src>/components/common/Header/Header";
import HeroHome from "<src>/components/home/Hero/Hero";
import Information from "<src>/components/home/Information/Information";
import Destination from "<src>/components/home/Destination/Destination";
import Testimonials from "<src>/components/home/Testimonials/Testimonials";
import Footer from "<src>/components/common/Footer/Footer";

const orlando = {
	name: "Orlando",
	description: "Family Fun in the Heart of the Parks",
	imagePrimary:
		"https://images.unsplash.com/photo-1618945373370-7bde4f8dd9c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
	imageSecondary:
		"https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
	imageTertiary:
		"https://images.unsplash.com/photo-1588882929086-51acd6e39954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9ybGFuZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
};

const testimonials = [
	{
		name: "John Doe",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
	},
	{
		name: "Jose Rotchen",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
	},
	{
		name: "Frank",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		image:
			"https://images.unsplash.com/photo-1575089776834-8be34696ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
	},
];

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
			<Destination
				name={orlando.name}
				description={orlando.description}
				imagePrimary={orlando.imagePrimary}
				imageSecondary={orlando.imageSecondary}
				imageTertiary={orlando.imageTertiary}
				type="right"
			/>
			<Destination
				name={orlando.name}
				description={orlando.description}
				imagePrimary={orlando.imagePrimary}
				imageSecondary={orlando.imageSecondary}
				imageTertiary={orlando.imageTertiary}
				type="left"
			/>
			<Destination
				name={orlando.name}
				description={orlando.description}
				imagePrimary={orlando.imagePrimary}
				imageSecondary={orlando.imageSecondary}
				imageTertiary={orlando.imageTertiary}
				type="right"
			/>
			<Testimonials testimonials={testimonials} />
			<Footer />
		</main>
	);
}
