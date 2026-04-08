import { motion } from "framer-motion";
import "./BiomeCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

interface BiomeCardProps {
    title: string;
    description: string;
    imageUrl?: string; 
    buttonText: string;
    index: number; 
}

export function BiomeCard({ title, description, imageUrl, buttonText, index }: BiomeCardProps) {
    return (
        <motion.div 
            className="biome-card"
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
                <button className="biome-button">{buttonText} <span className="right-arrow">
                    <FontAwesomeIcon icon={faRightLong} />
                </span></button>
            </div>
        </motion.div>
    );
}