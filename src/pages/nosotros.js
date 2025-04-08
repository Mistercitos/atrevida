"use client";
import Layout from "@/layouts/Layout";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <Layout title="Nosotros">
      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-20 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-title text-atrevida-primary uppercase mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Quiénes somos
        </motion.h1>

        <motion.p
          className="text-lg font-body max-w-3xl text-[#1a1a1a] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Somos un equipo creativo y profesional que rompe esquemas. Nos gusta
          lo disruptivo, lo auténtico, lo que no pasa piola. Acá se diseña con
          actitud y estrategia.
        </motion.p>
      </motion.section>
    </Layout>
  );
}
