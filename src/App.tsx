import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";

import { BiomeDetail } from "./pages/BiomeDetail/BiomeDetail";
 // Criaremos esta página

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Esta única linha substitui todas as outras de biomas */}
        <Route path="/:id" element={<BiomeDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;