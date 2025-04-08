import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-atrevida-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logos/logo-blanco.png"
            alt="Logo Atrevida"
            width={120}
            height={40}
            className="w-auto h-10"
            priority
          />
        </Link>

        <nav className="space-x-6 font-bold text-sm uppercase tracking-wide">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/nosotros" className="hover:underline">
            Nosotros
          </Link>
          <Link href="/servicios" className="hover:underline">
            Servicios
          </Link>
          <Link href="/contacto" className="hover:underline">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
