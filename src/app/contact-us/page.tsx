import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Hero from "<src>/components/contact-us/Hero/Hero";

export default function contactUs() {
	return (
		<>
			<Header />
			<Hero />
			<WhatsAppButton />
			<Footer />
		</>
	);
}
