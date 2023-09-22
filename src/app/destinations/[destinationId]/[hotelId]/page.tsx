import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Main from "<src>/components/hotel/Main/Main";
import Content from "<src>/components/hotel/Content/Content";
import Rooms from "<src>/components/hotel/Rooms/Rooms";
import { client } from "<src>/lib/contentful";
import getRooms from "<src>/models/rooms";
import getResorts from "<src>/models/resorts";

async function getData() {
  const response = await Promise.all([
    client.getEntries({ content_type: "resort" }),
    client.getEntries({ content_type: "room" }),
  ]);

  return response;
}

export default async function HotelPage() {
  const [resort, room] = await getData();

  const resortData = await getResorts(resort);
  const roomsData = await getRooms(room);

  return (
    <main>
      <Header />
      <Main resorts={resortData} />
      <Rooms resorts={resortData} rooms={roomsData} />
      <Content resorts={resortData} />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
