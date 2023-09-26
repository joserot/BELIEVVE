import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import SearcherInput from "<src>/components/searcher/SearcherInput/SearcherInput";
import { client } from "<src>/lib/contentful";
import getDestinations from "<src>/models/destinations";
import getResorts from "<src>/models/resorts";
import getRooms from "<src>/models/rooms";
import Content from "<src>/components/searcher/Content/Content";

async function getData() {
  const response = await Promise.all([
    client.getEntries({ content_type: "destination" }),
    client.getEntries({ content_type: "resort" }),
    client.getEntries({ content_type: "room" }),
  ]);

  return response;
}

export default async function Home() {
  const [destination, resort, room] = await getData();

  const destinationsData = await getDestinations(destination);
  const resortsData = getResorts(resort);
  const roomsData = getRooms(room);

  return (
    <main
      style={{
        position: "relative",
      }}
    >
      <Header />
      <SearcherInput destinations={destinationsData} />
      <Content
        destinations={destinationsData}
        resorts={resortsData}
        rooms={roomsData}
      />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
