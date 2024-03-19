import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { FiltersProvider } from "<src>/context/filtersContext";
import NextTopLoader from "nextjs-toploader";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vivevacationsoutlet",
  description: "BELIEVVE LIVVE & LOVVE IT, We make it possible",
  icons: ["/logo-2.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <FiltersProvider>
        <body className={montserrat.className}>
          <NextTopLoader color="#04d1f7" height={4} />
          {children}
        </body>
      </FiltersProvider>
    </html>
  );
}
