import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Passageiros } from "./pages/passageiros";
import { PassageirosAtualizar } from "./pages/passageirosAtualizar";
import { PassageirosNovo } from "./pages/passageirosNovo";
import { PassageirosVer } from "./pages/passageirosVer";

function App() {
  return (
    <div className="App">
      <div>
        <a href="/home">Home|</a>
        <a href="/passageiros">Aeroportos</a>
      </div>
      <div className="router">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/passageiros" element={<Passageiros />} />
            <Route path="/passageiros/:id" element={<PassageirosVer />} />
            <Route
              path="/passageiros-atualizar/:id"
              element={<PassageirosAtualizar />}
            />
            <Route path="/passageiros-novo" element={<PassageirosNovo />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
