import { BrowserRouter, Route,  Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Amazonia } from "./pages/amazonia/Amazonia";
import { Pantanal } from "./pages/pantanal/Pantanal";
import { Cerrado } from "./pages/cerrado/Cerrado";
import { Caatinga } from "./pages/caatinga/Caatinga";
import { Pampa } from "./pages/pampa/Pampa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amazonia" element={<Amazonia />} />
        <Route path="/pantanal" element={<Pantanal />} />
        <Route path="/cerrado" element={<Cerrado />} />
        <Route path="/caatinga" element={<Caatinga />} />
        <Route path="/pampa" element={<Pampa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
