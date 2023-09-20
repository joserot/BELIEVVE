import Header from "<src>/components/common/Header/Header";
import HeroHome from "<src>/components/home/Hero/Hero";
import Information from "<src>/components/home/Information/Information";
import About from "<src>/components/home/About/About";
import Testimonials from "<src>/components/home/Testimonials/Testimonials";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import { client } from "<src>/lib/contentful";
import Content from "<src>/components/home/Content/Content";
import getDestinations from "<src>/models/destinations";
import getTestimonials from "<src>/models/testimonials";

async function getData() {
  const response = await Promise.all([
    client.getEntries({ content_type: "testimonials" }),
    client.getEntries({ content_type: "destination" }),
  ]);

  return response;
}

export default async function Home() {
  const [testimonials, destination] = await getData();

  const destinationsData = await getDestinations(destination);
  const testimonialsData = await getTestimonials(testimonials);

  return (
    <main
      style={{
        position: "relative",
      }}
    >
      <Header />
      <HeroHome />
      <Information />
      <Content destinations={destinationsData} />
      <About />
      <Testimonials testimonials={testimonialsData} />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
