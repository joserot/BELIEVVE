import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import Hero from "<src>/components/destinations/Hero/Hero";
import Content from "<src>/components/destinations/Content/Content";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import { client } from "<src>/lib/contentful";
import getDestinations from "<src>/models/destinations";
import getResorts from "<src>/models/resorts";

async function getData() {
  const response = await Promise.all([
    client.getEntries({ content_type: "resort" }),
    client.getEntries({ content_type: "destination" }),
  ]);

  return response;
}

export default async function DestinationPage() {
  const [resort, destination] = await getData();

  const destinationsData = await getDestinations(destination);
  const reseortsData = await getResorts(resort);

  return (
    <main
      style={{
        position: "relative",
      }}
    >
      <Header />
      <Hero destinations={destinationsData} />
      <Content hotels={reseortsData} destinations={destinationsData} />
      <WhatsAppButton />
      <Footer />
    </main>
  );
}
