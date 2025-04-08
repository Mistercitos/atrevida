"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="bg-atrevida-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src="/logos/logo-blanco.png"
            alt="Logo Atrevida"
            width={120}
            height={40}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Botón hamburguesa para mobile */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
            <div className="w-6 h-0.5 bg-white" />
          </div>
        </button>

        {/* Navegación desktop */}
        <nav className="hidden md:flex space-x-8 font-semibold tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Navegación mobile animada */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden bg-atrevida-primary text-white px-6 pb-8 pt-2 flex flex-col space-y-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
