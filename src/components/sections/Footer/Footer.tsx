import { Link, useParams } from "react-router-dom";
import { BIOMAS_BR } from "../../../data/biomes";


export function Footer() {
  const currentYear = new Date().getFullYear();
  const { id } = useParams();

  const sugestoes = BIOMAS_BR.filter((bioma) => bioma.id !== id).slice(0, 2);

  return (
    <footer className="relative w-full min-h-[60vh] flex flex-col justify-center items-center py-16 px-8 text-center text-white
      bg-[linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://i.pinimg.com/1200x/a6/bd/4d/a6bd4db7ee7053689bd971b36cbcd1ef.jpg')] 
      bg-cover bg-center bg-fixed">
      
      <div className="max-w-200 mb-16">
        <h2 className="font-title text-[clamp(2.5rem,5vw,4rem)] font-medium mb-6">
          Continue a Jornada
        </h2>
        <p className="text-lg text-white/70 tracking-wide mb-12">
          Que tal explorar algo novo? Descubra outros biomas:
        </p>

        <nav className="flex gap-6 justify-center flex-wrap">
          {sugestoes.map((bioma) => (
            <Link
              key={bioma.id}
              to={`/${bioma.id}`}
              className="px-10 py-4 rounded-full border border-white/20 bg-background-green backdrop-blur-md transition-all duration-300 font-medium flex items-center gap-2 hover:bg-[#1a3a25] hover:border-green-400 hover:shadow-2xl"
            >
              Explorar {bioma.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="w-[90%] max-w-300 h-px bg-white/10 mb-8" aria-hidden="true" />

      <div className="w-[90%] max-w-300 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 gap-4">
        <p>© {currentYear} Biome Wiki. Todos os direitos reservados.</p>
        <div className="italic">
          Feito com 🌿 para a biodiversidade.
        </div>
      </div>
    </footer>
  );
}