import Header from "<src>/components/common/Header/Header";
import HeroHome from "<src>/components/home/Hero/Hero";
import Information from "<src>/components/home/Information/Information";
import About from "<src>/components/home/About/About";
import Testimonials from "<src>/components/home/Testimonials/Testimonials";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import SearcherInput from "<src>/components/searcher/SearcherInput/SearcherInput";
import { client } from "<src>/lib/contentful";
import Content from "<src>/components/home/Content/Content";
import getDestinations from "<src>/models/destinations";
import getTestimonials from "<src>/models/testimonials";
import getAbout from "<src>/models/getAbout";

async function getData() {
  const response = await Promise.all([
    client.getEntries({ content_type: "testimonials" }),
    client.getEntries({ content_type: "destination" }),
    client.getEntries({ content_type: "about" }),
  ]);

  return response;
}

export default async function Home() {
  const [testimonials, destination, about] = await getData();

  const destinationsData = await getDestinations(destination);
  const testimonialsData = await getTestimonials(testimonials);
  const aboutData = await getAbout(about);

  return (
    <main
      style={{
        position: "relative",
      }}
    >
      <Header />
      <HeroHome />
      <Information />
      <SearcherInput destinations={destinationsData} />
      <Content destinations={destinationsData} />
      <About about={aboutData} />
      <Testimonials testimonials={testimonialsData} />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
