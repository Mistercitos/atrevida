"use client";
import Layout from "@/layouts/Layout";

export default function Contacto() {
  return (
    <Layout title="Contacto">
      <section className="min-h-screen py-32 px-6 text-center bg-white text-black">
        <h1 className="text-5xl md:text-7xl font-title mb-10 uppercase text-atrevida-primary">
          ¿Hablamos?
        </h1>
        <p className="max-w-2xl mx-auto text-lg font-body mb-8">
          Si querís que tu marca haga ruido, este es el primer paso. Rellena el
          formulario o escríbenos directo.
        </p>

        <form className="max-w-xl mx-auto flex flex-col gap-6 text-left">
          <input
            type="text"
            placeholder="Nombre"
            className="p-4 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Correo"
            className="p-4 rounded border border-gray-300"
          />
          <textarea
            placeholder="Cuéntanos tu idea"
            rows={5}
            className="p-4 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="bg-atrevida-primary text-white py-4 px-8 rounded-full font-bold hover:scale-105 transition transform"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </Layout>
  );
}
