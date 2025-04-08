import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Layout({ children, title = "ATREVIDA" }) {
  return (
    <>
      <Head>
        <title>{`${title} | Somos Atrevida`}</title>

        <meta name="description" content="Agencia Digital Atrevida" />
      </Head>

      <Navbar />

      <main className="p-8 bg-atrevida-background min-h-screen">
        {children}
      </main>

      <footer className="bg-[#1a1a1a] text-white text-center p-4">
        © {new Date().getFullYear()} Somos Atrevida
      </footer>
    </>
  );
}
