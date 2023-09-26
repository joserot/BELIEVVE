import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import Content from "<src>/components/terms-and-conditions/Content";
import getTermsAndConditions from "<src>/models/getTermsAndConditions";
import { client } from "<src>/lib/contentful";

async function getData() {
  const response = await Promise.all([
    client.getEntries({ content_type: "termsAndConditions" }),
  ]);

  return response;
}

export default async function termsAndConditions() {
  const [termsAndConditions] = await getData();

  const termsAndConditionsData = getTermsAndConditions(termsAndConditions);

  return (
    <>
      <Header />
      <Content terms={termsAndConditionsData} />
      <WhatsAppButton />
      <Footer />
    </>
  );
}
