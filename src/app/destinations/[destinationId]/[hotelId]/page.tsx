import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Main from "<src>/components/hotel/Main/Main";
import Content from "<src>/components/hotel/Content/Content";
import destinations from "../../../../../assets/destinations";
import Rooms from "<src>/components/hotel/Rooms/Rooms";

export default function HotelPage() {
  return (
    <main>
      <Header />
      <Main destinations={destinations} />
      <Rooms />
      <Content />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
