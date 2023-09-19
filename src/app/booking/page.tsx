import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Content from "<src>/components/booking/Content/Content";

export default function Booking() {
  return (
    <>
      <Header />
      <Content />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
