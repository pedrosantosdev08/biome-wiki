import { BiomeCard } from "../BiomeCard/BiomeCard";
import { BIOMAS_BR } from "../../data/biomes";

export function Hero() {
  return (
    <section className="flex flex-col items-center min-h-screen py-30 px-10 bg-background-green">
      
      {/* Hero Title */}
      <h2 className="text-[#F3F1E9] text-center text-[clamp(50px,10vw,100px)] mb-10 font-title leading-[1.05] font-bold">
        Enciclopédia Interativa <br />
        <span className="text-highlight-green drop-shadow-[0_0_20px_rgba(0,139,82,0.2)]">
          de Biomas
        </span>
      </h2>

      {/* Hero Description */}
      <p className="text-[#cccccc]/70 text-center text-[clamp(1.1rem,2vw,1.5rem)] max-w-225 mb-15 leading-[1.7] font-light">
        Explore a rica biodiversidade do Brasil através de uma jornada imersiva
        pelos seis biomas que definem nossa identidade natural.
      </p>

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
            imageUrl={bioma.imageUrl}
            buttonText="explorar"
            path={`/${bioma.id}`}
          />
        ))}
      </div>
    </section>
  );
}