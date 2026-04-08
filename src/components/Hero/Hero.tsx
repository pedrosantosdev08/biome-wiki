import { BiomeCard } from "../BiomeCard/BiomeCard";
import { BIOMAS_BR } from "../../data/biomes";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero-container">
      <h2 className="hero-title">
        Enciclopédia Interativa <br />
        <span className="title-highlight">de Biomas</span>
      </h2>
      
      <p className="hero-description">
        Explore a rica biodiversidade do Brasil através de uma jornada imersiva
        pelos seis biomas que definem nossa identidade natural.
      </p>

      <p className="hero-cta">
        <span className="line-horizontal"></span>
        Escolha um bioma para explorar
        <span className="line-horizontal"></span>
      </p>

      <div className="biome-grid">
        {BIOMAS_BR.map((bioma, index) => (
          <BiomeCard
            key={bioma.id}
            index={index}
            title={bioma.title}
            description={bioma.description}
            imageUrl={bioma.imageUrl}
            buttonText="explorar"
          />
        ))}
      </div>
    </section>
  );
}