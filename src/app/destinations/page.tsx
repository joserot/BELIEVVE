import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Hero from "<src>/components/destinations-page/Hero/Hero";
import Content from "<src>/components/destinations-page/Content/Content";

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
