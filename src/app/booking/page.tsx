import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Content from "<src>/components/booking/Content/Content";
import { client } from "<src>/lib/contentful";
import getRooms from "<src>/models/rooms";

async function getData() {
  const response = await Promise.all([
    client.getEntries({ content_type: "room" }),
  ]);

  return response;
}

export default async function Booking() {
  const [rooms] = await getData();

  const roomsData = getRooms(rooms);

  return (
    <>
      <Header />
      <Content />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
