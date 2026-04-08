import { useEffect, useState } from "react";
import "./Header.css";

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
            <a
              className="nav-item
                    "
              href="#amazonia"
            >
              Amazônia
            </a>
          </li>
          <li>
            <a
              className="nav-item
                    "
              href="#pantanal"
            >
              Pantanal
            </a>
          </li>
          <li>
            <a
              className="nav-item
                    "
              href="#cerrado"
            >
              Cerrado
            </a>
          </li>
          <li>
            <a
              className="nav-item
                    "
              href="#mataatlantica"
            >
              Mata Atlântica
            </a>
          </li>
          <li>
            <a
              className="nav-item
                    "
              href="#caatinga"
            >
              Caatinga
            </a>
          </li>
          <li>
            <a
              className="nav-item
                    "
              href="#pampa"
            >
              Pampa
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
