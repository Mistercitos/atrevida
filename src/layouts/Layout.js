"use client";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";

export default function Layout({ children, title = "ATREVIDA" }) {
  return (
    <>
      <Head>
        <title>{`${title} | Somos Atrevida`}</title>
        <meta name="description" content="Agencia Digital Atrevida" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Loader />

      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="bg-[#ebebeb] min-h-screen"
      >
        {children}
      </motion.main>

      <footer className="relative bg-black text-white text-center py-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/hero-texture.jpg')] bg-cover bg-fixed opacity-10"
          aria-hidden="true"
        ></div>
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-title mb-4">
            ¿Listx para hacer ruido?
          </h3>
          <p className="text-sm md:text-base max-w-xl mx-auto mb-6">
            Somos Atrevida, tu partner creativo. Disruptivos, honestos y full
            actitud.
          </p>
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} somosatrevida.cl - Hecho con cuática ✨
          </p>
        </div>
      </footer>
    </>
  );
}
