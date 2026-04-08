import { Link, useParams } from "react-router-dom";
import { BIOMAS_BR } from "../../data/biomes";
import "./Footer.css";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { id } = useParams();

  const sugestoes = BIOMAS_BR.filter((bioma) => bioma.id !== id).slice(0, 2);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">Continue a Jornada</h2>
        <p className="footer-description">
          Que tal explorar algo novo? Descubra outros biomas:
        </p>

        <nav className="footer-nav">
          {sugestoes.map((bioma) => (
            <Link
              key={bioma.id}
              to={`/${bioma.id}`}
              className="footer-btn"
            >
              Explorar {bioma.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="footer-divider" aria-hidden="true"></div>

      <div className="footer-bottom">
        <p>© {currentYear} Biome Wiki. Todos os direitos reservados.</p>
        <div className="footer-credits">
          Feito com 🌿 para a biodiversidade.
        </div>
      </div>
    </footer>
  );
}
