import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 1. Importar o hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

interface BiomeCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  buttonText: string;
  index: number;
  path: string;
}

export function BiomeCard({
  title,
  description,
  imageUrl,
  buttonText,
  index,
  path,
}: BiomeCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      className="group relative w-full h-100 rounded-3xl flex flex-col justify-end p-6 overflow-hidden border border-white/10 bg-card-bg cursor-pointer"
      onClick={() => navigate(path)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Imagem com Hover (Efeito da classe .biome-image) */}
      <div className="absolute inset-0 z-1">
        <img
          src={
            imageUrl ||
            "https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5"
          }
          alt={title}
          className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110"
        />
        {/* Overlay (Efeito da classe .biome-overlay) */}
        <div className="absolute inset-0 z-2 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* Conteúdo (Efeito da classe .biome-content) */}
      <div className="relative z-3 flex flex-col gap-2">
        <h3 className="font-title text-2xl text-[#ffffff] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
          {title}
        </h3>

        <p className="text-sm text-white/70 line-clamp-3 uppercase leading-relaxed">
          {description}
        </p>

        <button className="flex items-center gap-2 mt-4 text-green-400 font-medium uppercase text-sm transition-all">
          {buttonText}
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            <FontAwesomeIcon icon={faRightLong} />
          </span>
        </button>
      </div>
    </motion.div>
  );
}
