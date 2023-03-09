import { Contatos } from "./pages/contatos/Contatos";
import { Formulario } from "./pages/formulario/Formulario";
import { Home } from "./pages/home/Home";
import { Quemsomos } from "./pages/quemsomos/Quemsomos";
import { Saibamais } from "./pages/saibamais/Saibamais";
import { FormularioFinalizado } from "./pages/formularioFinalizado/FormularioFinalizado";
import { MenuItem } from "./MenuItem";
import "./Menu.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function Menu() {
  return (
    <body>
      <header className="topo">
        <MenuItem titulo="Home" path="/home" />
        <MenuItem titulo="Saiba mais" path="/saibamais" />
        <MenuItem titulo="Contatos" path="/contatos" />
      </header>

      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/saibamais" element={<Saibamais />} />
            <Route path="/quemsomos" element={<Quemsomos />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route
              path="/formulariofinalizado"
              element={<FormularioFinalizado />}
            />
          </Routes>
        </Router>
      </div>
    </body>
  );
}
