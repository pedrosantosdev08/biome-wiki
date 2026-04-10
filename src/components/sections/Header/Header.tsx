import { useEffect, useState } from "react";
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full h-[9vh] flex items-center justify-around px-8 z-1000 transition-all duration-300 border-b
        ${scrolled 
          ? "bg-[#0a1914]/80 backdrop-blur-md border-white/5 shadow-2xl" 
          : "bg-background-green border-[#302518]/25"
        }`}
    >
      

      <Link className="text-[#F3F1E9] text-2xl font-sans" to="/">
      Enciclopédia <span className="font-title italic">de Biomas</span>
      </Link>
        
      

      <nav>
        <ul className="flex gap-10 list-none">
          {["Amazônia", "Pantanal", "Cerrado", "Mata Atlântica", "Caatinga", "Pampa"].map((name) => (
            <li key={name}>
              <Link
                className="text-[#cccccc]/70 uppercase text-sm no-underline transition-colors duration-300 hover:text-highlight-green font-sans"
                to={`/${name.toLowerCase().replace(" ", "")}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}