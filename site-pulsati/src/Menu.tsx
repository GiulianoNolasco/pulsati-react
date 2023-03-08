import { useState } from "react";
import { Home } from "./pages/Home";
import { Saibamais } from "./pages/Saibamais";
import { Quemsomos } from "./pages/Quemsomos";
import logo from "../src/assets/logo.png";

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
      return <Saibamais />;
    } else if (opcao == 5) {
      return <Saibamais />;
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

// opcao == 1 ? <Home /> : <Saibamais />
