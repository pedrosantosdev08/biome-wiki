import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpeza do evento ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  return (
    <header className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <h1 className="header-title">
        Enciclopédia <span>de Biomas</span>
      </h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              className="nav-item
                    "
              to="/amazonia"
            >
              Amazônia
            </Link>
          </li>
          <li>
            <Link
              className="nav-item
                    "
              to="/pantanal"
            >
              Pantanal
            </Link>
          </li>
          <li>
            <Link
              className="nav-item
                    "
              to="/cerrado"
            >
              Cerrado
            </Link>
          </li>
          <li>
            <Link
              className="nav-item
                    "
              to="/mataatlantica"
            >
              Mata Atlântica
            </Link>
          </li>
          <li>
            <Link
              className="nav-item
                    "
              to="/caatinga"
            >
              Caatinga
            </Link>
          </li>
          <li>
            <Link
              className="nav-item
                    "
              to="/pampa"
            >
              Pampa
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
