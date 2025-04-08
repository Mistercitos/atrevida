import Layout from "@/layouts/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Inicio">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-20 py-24 overflow-hidden">
        {/* Fondo de imagen */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-texture.jpg"
            alt="Textura de fondo"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-4xl" data-aos="fade-up">
          <h1 className="text-6xl md:text-8xl font-title tracking-tight text-atrevida-primary leading-tight mb-6 uppercase">
            Somos ATREVIDA
          </h1>
          <p className="text-xl font-body text-[#1a1a1a] mb-10 leading-relaxed">
            Diseñamos, creamos y sacamos del molde. Si no llama la atención, no
            sirve. Somos la agencia que te hace ruido — del bueno, po.
          </p>
          <Link href="/contacto">
            <button
              className="bg-atrevida-primary text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition transform"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Conversemos al tiro
            </button>
          </Link>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-white py-36 px-6 lg:px-20 text-left">
        <h2
          className="text-5xl md:text-6xl font-title text-atrevida-primary uppercase mb-20 text-center"
          data-aos="fade-up"
        >
          Lo que hacemos
          <br />
          <span className="text-[#1a1a1a] text-3xl font-light">
            (y lo hacemos con cuática)
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-20 max-w-7xl mx-auto">
          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="text-atrevida-primary font-title text-2xl uppercase">
              01. Branding
            </span>
            <p className="text-base font-body text-[#333] leading-relaxed">
              Armamos identidades que se notan. Desde el logo hasta cómo hablai.
              Tu marca queda pulenta, con personalidad propia.
            </p>
          </div>

          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-atrevida-primary font-title text-2xl uppercase">
              02. UX / Web
            </span>
            <p className="text-base font-body text-[#333] leading-relaxed">
              Páginas que se ven bacanes, cargan al toque y no marean. Porque tu
              web tiene que dejar la cagá (de la buena).
            </p>
          </div>

          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <span className="text-atrevida-primary font-title text-2xl uppercase">
              03. Estrategia
            </span>
            <p className="text-base font-body text-[#333] leading-relaxed">
              Campañas, contenido y medios con cabeza. Nada de hacer por hacer.
              Acá todo tiene sentido y pega justo donde tiene que pegar.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="bg-black text-white py-36 px-6 lg:px-20 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-5xl md:text-6xl font-title mb-8 uppercase tracking-tight">
          ¿Te atreves a hacer ruido?
        </h2>
        <p className="text-lg font-body max-w-xl mx-auto mb-12">
          Si cachai que tu marca puede dar más y no querís lo mismo de siempre,
          este es el momento de moverse.
        </p>
        <Link href="/contacto">
          <button className="bg-white text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition transform">
            Hablemos ahora
          </button>
        </Link>
      </section>
    </Layout>
  );
}
