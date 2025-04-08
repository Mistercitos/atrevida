import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Loader from "@/components/Loader"; // ⬅️ Importa el loader
import { Oswald, Montserrat } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600"],
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className={`${oswald.variable} ${montserrat.variable}`}>
      <Loader />
      <Component {...pageProps} />
    </main>
  );
}
