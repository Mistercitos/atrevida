"use client";
import Layout from "@/layouts/Layout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title="Inicio">
      {/* HERO */}
      <motion.section
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-20 py-24 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/hero-texture.jpg"
            alt="Textura de fondo"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-title tracking-tight text-atrevida-primary leading-tight mb-6 uppercase"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Somos ATREVIDA
          </motion.h1>
          <motion.p
            className="text-xl font-body text-[#1a1a1a] mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Diseñamos, creamos y sacamos del molde. Si no llama la atención, no
            sirve. Somos la agencia que te hace ruido — del bueno, po.
          </motion.p>
          <Link href="/contacto">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-atrevida-primary text-white font-bold px-8 py-4 rounded-full"
            >
              Conversemos al tiro
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* SERVICIOS */}
      <motion.section
        className="bg-white py-36 px-6 lg:px-20 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-title text-atrevida-primary uppercase mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Lo que hacemos
          <br />
          <span className="text-[#1a1a1a] text-3xl font-light">
            (y lo hacemos con actitud)
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-20 max-w-7xl mx-auto">
          {[
            {
              title: "01. Branding",
              text: "Armamos identidades que se notan. Desde el logo hasta cómo hablai. Tu marca queda pulenta, con personalidad propia.",
            },
            {
              title: "02. UX / Web",
              text: "Páginas que se ven bacanes, cargan al toque y no marean. Porque tu web tiene que dejar la cagá (de la buena).",
            },
            {
              title: "03. Estrategia",
              text: "Campañas, contenido y medios con cabeza. Nada de hacer por hacer. Acá todo tiene sentido y pega justo donde tiene que pegar.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
            >
              <span className="text-atrevida-primary font-title text-2xl uppercase">
                {item.title}
              </span>
              <p className="text-base font-body text-[#333] leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        className="bg-black text-white py-36 px-6 lg:px-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-title mb-8 uppercase tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ¿Te atreves a hacer ruido?
        </motion.h2>
        <motion.p
          className="text-lg font-body max-w-xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Si cachai que tu marca puede dar más y no querís lo mismo de siempre,
          este es el momento de moverse.
        </motion.p>
        <Link href="/contacto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black font-bold px-8 py-4 rounded-full"
          >
            Hablemos ahora
          </motion.button>
        </Link>
      </motion.section>
    </Layout>
  );
}
