import { useState } from "react";
import logo from "../src/assets/logo.png";
import { Contatos } from "./pages/contatos/Contatos";
import { Formulario } from "./pages/formulario/Formulario";
import { Home } from "./pages/home/Home";
import { Quemsomos } from "./pages/quemsomos/Quemsomos";
import { Saibamais } from "./pages/saibamais/Saibamais";

import "./Menu.css";
import { FormularioFinalizado } from "./pages/formularioFinalizado/FormularioFinalizado";

export function Menu() {
  const [opcao, setOpcao] = useState<number>(1);

  const verificaQualPagina = () => {
    if (opcao == 1) {
      return <Home setOpcao={setOpcao} />;
    } else if (opcao == 2) {
      return <Saibamais setOpcao={setOpcao} />;
    } else if (opcao == 3) {
      return <Quemsomos />;
    } else if (opcao == 4) {
      return <Contatos />;
    } else if (opcao == 5) {
      return <Formulario setOpcao={setOpcao} />;
    } else if (opcao == 6) {
      return <FormularioFinalizado />;
    }
  };
  return (
    <body>
      <header className="topo">
        <a onClick={() => setOpcao(1)}>
          <img src={logo} alt="" />
        </a>
        <a onClick={() => setOpcao(2)}>Saiba mais</a>
        <a onClick={() => setOpcao(3)}>Quem somos</a>
        <a onClick={() => setOpcao(4)}>Contatos</a>
      </header>
      {verificaQualPagina()}
    </body>
  );
}
