import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Aeroportos } from "./pages/aeroportos";
import { AeroportosAtualizar } from "./pages/aeroportosAtualizar";
import { AeroportosNovo } from "./pages/aeroportosNovo";
import { AeroportosVer } from "./pages/aeroportosVer";

function App() {
  return (
    <div className="App">
      <div className="headerApp">
        <div>
          <a href="/home">Home</a>
        </div>
        <div>
          <a href="/aeroportos">Aeroportos</a>
        </div>
        <div>
          <a href="/aeroportos">Passageiros</a>
        </div>
      </div>
      <div className="router">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aeroportos" element={<Aeroportos />} />
            <Route path="/aeroportos/:id" element={<AeroportosVer />} />
            <Route
              path="/aeroportos-atualizar/:id"
              element={<AeroportosAtualizar />}
            />
            <Route path="/aeroportos-novo" element={<AeroportosNovo />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
