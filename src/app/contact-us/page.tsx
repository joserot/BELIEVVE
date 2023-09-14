import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Hero from "<src>/components/contact-us/Hero/Hero";
import About from "<src>/components/contact-us/About/About";
import Contact from "<src>/components/contact-us/Contact/Contact";

export default function contactUs() {
  return (
    <>
      <Header />
      <Hero />
      <Contact />
      <About />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
