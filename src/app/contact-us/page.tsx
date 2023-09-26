import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Hero from "<src>/components/contact-us/Hero/Hero";
import About from "<src>/components/contact-us/About/About";
import Contact from "<src>/components/contact-us/Contact/Contact";
import { client } from "<src>/lib/contentful";
import getAbout from "<src>/models/getAbout";

async function getData() {
  const response = await Promise.all([
    client.getEntries({ content_type: "about" }),
  ]);

  return response;
}

export default async function contactUs() {
  const [about] = await getData();

  const aboutData = await getAbout(about);

  return (
    <>
      <Header />
      <Hero />
      <Contact />
      <About about={aboutData} />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
