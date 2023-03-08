import { useState } from "react";
import logo from "../src/assets/logo.png";
import { Contatos } from "./pages/contatos/Contatos";
import { Formulario } from "./pages/formulario/Formulario";
import { Home } from "./pages/home/Home";
import { Quemsomos } from "./pages/quemsomos/Quemsomos";
import { Saibamais } from "./pages/saibamais/Saibamais";

import "./Menu.css";

export function Menu() {
  const [opcao, setOpcao] = useState<number>(1);

  const pageMenu = () => {
    setOpcao(1);
  };
  const pageSaibamais = () => {
    setOpcao(2);
  };
  const quemSomos = () => {
    setOpcao(3);
  };
  const contatos = () => {
    setOpcao(4);
  };
  const formulario = () => {
    setOpcao(5);
  };
  const verificaQualPagina = () => {
    if (opcao == 1) {
      return <Home />;
    } else if (opcao == 2) {
      return <Saibamais />;
    } else if (opcao == 3) {
      return <Quemsomos />;
    } else if (opcao == 4) {
      return <Contatos />;
    } else if (opcao == 5) {
      return <Formulario />;
    }
  };
  return (
    <body>
      <header className="topo">
        <a onClick={pageMenu}>
          <img src={logo} alt="" />
        </a>
        <a onClick={pageSaibamais}>Saiba mais</a>
        <a onClick={quemSomos}>Quem somos</a>
        <a onClick={contatos}>Contatos</a>
        <a onClick={formulario}>Formulario</a>
      </header>
      {verificaQualPagina()}
    </body>
  );
}
