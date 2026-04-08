import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 1. Importar o hook
import "./BiomeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

interface BiomeCardProps {
    title: string;
    description: string;
    imageUrl?: string; 
    buttonText: string;
    index: number;
    path: string; // 2. Nova prop para o destino da rota
}

export function BiomeCard({ title, description, imageUrl, buttonText, index, path }: BiomeCardProps) {
    const navigate = useNavigate(); // 3. Inicializar o hook

    const handleNavigation = () => {
        navigate(path); // 4. Função de navegação
    };

    return (
        <motion.div 
            className="biome-card"
            onClick={handleNavigation} 
            style={{ cursor: 'pointer' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
            }}
        >
            <div className="biome-image-container">
                <img 
                    src={imageUrl || "https://images.unsplash.com/photo-1518173946687-a4c8a9b746f5"} 
                    alt={title} 
                    className="biome-image" 
                />
                <div className="biome-overlay" /> 
            </div>
            
            <div className="biome-content">
                <h3 className="biome-title">{title}</h3>
                <p className="biome-description">{description}</p>
                <button 
                    className="biome-button"
                    onClick={(e) => {
                        e.stopPropagation(); // Evita disparar o onClick do card pai duas vezes
                        handleNavigation();
                    }}
                >
                    {buttonText} 
                    <span className="right-arrow">
                        <FontAwesomeIcon icon={faRightLong} />
                    </span>
                </button>
            </div>
        </motion.div>
    );
}