import { useParams } from "react-router-dom";
import { HeroBiome } from "../../components/sections/HeroBiome/HeroBiome";
import { BIOMAS_BR } from "../../data/biomes";
import { Footer } from "../../components/sections/Footer/Footer";
import { Header } from "../../components/sections/Header/Header";
import { motion } from "framer-motion";

export function BiomeDetail() {
  // 1. Captura o id da URL
  const { id } = useParams();

  // 2. Encontra o objeto do bioma correspondente no array de dados
  const bioma = BIOMAS_BR.find((item) => item.id === id);

  // 3. Caso o ID na URL não exista no data/biomes
  if (!bioma) {
    return (
      <div className="text-white text-center py-20">Bioma não encontrado.</div>
    );
  }

  return (
    <>
      <Header />
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <section>
        <HeroBiome
          biome={bioma.title}
          biomeDescription={bioma.description}
          biomaImageHero={bioma.biomaImageHero}
          heroBiomeDescription={`Vista panorâmica do bioma ${bioma.title}`}
        />
      </section>
      <Footer />
    </>
  );
}
