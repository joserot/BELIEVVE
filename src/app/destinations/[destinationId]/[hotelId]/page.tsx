import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Main from "<src>/components/hotel/Main/Main";
import destinations from "../../../../../assets/destinations";

export default function HotelPage() {
  return (
    <main>
      <Header />
      <Main destinations={destinations} />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
