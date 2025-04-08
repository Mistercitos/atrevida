"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-atrevida-primary flex flex-col justify-center items-center text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.3, 0.9, 1],
              opacity: [0, 1],
              borderRadius: ["50%", "20%", "50%"],
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              times: [0, 0.4, 0.7, 1],
            }}
          >
            <Image
              src="/logos/logo-blanco.png"
              alt="Logo Atrevida"
              width={160}
              height={80}
              className="h-auto w-auto"
              priority
            />
          </motion.div>

          <motion.p
            className="mt-6 text-lg font-semibold tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Cargando actitud...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
