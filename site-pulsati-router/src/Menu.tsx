import { useState } from "react";
import logo from "../src/assets/logo.png";
import { Contatos } from "./pages/contatos/Contatos";
import { Formulario } from "./pages/formulario/Formulario";
import { Home } from "./pages/home/Home";
import { Quemsomos } from "./pages/quemsomos/Quemsomos";
import { Saibamais } from "./pages/saibamais/Saibamais";

import "./Menu.css";
import { FormularioFinalizado } from "./pages/formularioFinalizado/FormularioFinalizado";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function Menu() {
  return (
    <body>
      <header className="topo">
        <a href="/home">
          <img src={logo} alt="" />
        </a>
        <a href="/saibamais">Saiba mais</a>
        <a href="/quemsomos">Quem somos</a>
        <a href="/contatos">Contatos</a>
      </header>
      <div>
        <Router>
          <Routes>
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
