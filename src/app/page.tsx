import styles from "./page.module.css";
import Header from "<src>/components/common/Header/Header";
import HeroHome from "<src>/components/home/Hero/Hero";
import Information from "<src>/components/home/Information/Information";
import Destination from "<src>/components/home/Destination/Destination";
import About from "<src>/components/home/About/About";
import Testimonials from "<src>/components/home/Testimonials/Testimonials";
import Footer from "<src>/components/common/Footer/Footer";
import destinations from "../../assets/destinations";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import { client } from "<src>/lib/contentful";

async function getData() {
  const response = await client.getEntries({ content_type: "testimonials" });

  return response;
}

export default async function Home() {
  const testimonials = await getData();

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
            key={destination.slug}
            name={destination.name}
            description={destination.description}
            imagePrimary={destination.imagePrimary}
            imageSecondary={destination.imageSecondary}
            imageTertiary={destination.imageTertiary}
            slug={destination.slug}
            hotels={destination.hotels}
            type={type}
          />
        );
      })}
      <About />
      <Testimonials testimonials={testimonials.items} />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
