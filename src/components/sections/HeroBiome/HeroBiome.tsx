import { motion } from "framer-motion";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

interface HeroBiomeProps {
  biome: string;
  biomeDescription: string;
  biomaImageHero: string;
  heroBiomeDescription: string;
}

export function HeroBiome({
  biome,
  biomeDescription,
  biomaImageHero,
  heroBiomeDescription,
}: HeroBiomeProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <section 
      key={biome} 
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Imagem de Fundo com Zoom de Entrada */}
      <motion.img
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={biomaImageHero}
        alt={heroBiomeDescription}
        className="absolute inset-0 w-full h-full object-cover -z-20 brightness-[0.4]"
      />

      {/* 2. Overlay Dinâmico (Efeito de Vidro no Scroll) */}
      <div 
        className={`absolute inset-0 -z-10 transition-all duration-700 ease-in-out ${
          scrolled 
            ? "bg-[#070D06]/80 backdrop-blur-md" 
            : "bg-transparent"
        }`}
      />

      {/* 3. Título com Revelação de Baixo para Cima */}
      <motion.h2 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="font-title text-title text-white font-extrabold uppercase tracking-title [word-spacing:2rem] text-center px-4"
      >
        {biome}
      </motion.h2>

      {/* 4. Descrição com Fade-in Suave */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-2xl text-center text-[#F3F1E9]/80 px-6 mt-4"
      >
        {biomeDescription}
      </motion.p>

      {/* 5. Indicador de Scroll (Soma ao rolar) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 pointer-events-none"
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-gray-500 animate-bounce text-xl"
        />
        <p className="uppercase text-gray-500 text-[10px] tracking-[0.4em] font-medium">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}