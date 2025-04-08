"use client";
import Layout from "@/layouts/Layout";
import { motion } from "framer-motion";

export default function Servicios() {
  return (
    <Layout title="Servicios">
      <motion.section
        className="min-h-screen py-24 px-6 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-title text-atrevida-primary uppercase text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Servicios con power
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Branding",
              desc: "Tu marca, pero con carácter. Creamos identidades que se sienten y se recuerdan.",
            },
            {
              title: "UX / Web",
              desc: "Diseños rápidos, modernos y con sentido. Nada de plantillas aburridas.",
            },
            {
              title: "Contenido",
              desc: "Mensajes que enganchan. Estrategia, copywriting y contenido visual con intención.",
            },
            {
              title: "Campañas",
              desc: "Campañas digitales que conectan. Desde el concepto hasta el post viral.",
            },
          ].map((servicio, i) => (
            <motion.div
              key={servicio.title}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <h3 className="text-atrevida-primary font-title text-2xl uppercase mb-2">
                {servicio.title}
              </h3>
              <p className="text-[#333] font-body">{servicio.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Layout>
  );
}
