import Header from "<src>/components/common/Header/Header";
import Footer from "<src>/components/common/Footer/Footer";
import WhatsAppButton from "<src>/components/common/WhatsAppButton/WhatsAppButton";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Booking() {
  const { container, h1, btn } = styles;

  return (
    <>
      <Header />
      <main className={container}>
        <h1 className={h1}>
          congratulations, we will confirm your reservation by email
        </h1>
        <Link href="/" className={btn}>
          go back to home
        </Link>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
