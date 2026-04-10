import { motion } from "framer-motion";
import { BIOMAS_BR } from "../../../data/biomes";
import { BiomeCard } from "../../ui/BiomeCard/BiomeCard";

export function Hero() {
  return (
    <section className="flex flex-col items-center min-h-screen py-30 px-10 bg-background-green">
      {/* Hero Title */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-[#F3F1E9] text-center text-title my-10 font-title leading-[1.05] font-bold"
      >
        Enciclopédia Interativa <br />
        <span className="text-highlight-green drop-shadow-[0_0_20px_rgba(0,139,82,0.2)]">
          de Biomas
        </span>
      </motion.h2>

      {/* Hero Description */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
        className="text-[#cccccc]/70 text-center text-[clamp(1.1rem,2vw,1.5rem)] max-w-225 mb-15 leading-[1.7] font-light"
      >
        Explore a rica biodiversidade do Brasil através de uma jornada imersiva
        pelos seis biomas que definem nossa identidade natural.
      </motion.p>

      {/* Hero CTA (Linhas e Texto) */}
      <div className="flex items-center justify-center my-15 mb-25 text-[#cccccc]/70 text-lg uppercase tracking-[6px] font-normal text-center">
        <span className="sm:inline-block w-25 h-px bg-highlight-green opacity-50 mx-7.5" />
        Escolha um bioma para explorar
        <span className="sm:inline-block w-25 h-px bg-highlight-green opacity-50 mx-7.5" />
      </div>

      {/* Biome Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-10 w-full max-w-325 mt-5">
        {BIOMAS_BR.map((bioma, index) => (
          <BiomeCard
            key={bioma.id}
            index={index}
            title={bioma.title}
            description={bioma.description}
            biomaImage={bioma.biomaImage}
            buttonText="explorar"
            path={`/${bioma.id}`}
          />
        ))}
      </div>
    </section>
  );
}
