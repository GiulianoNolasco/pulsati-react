import { useState } from "react";
import { Home } from "./pages/Home";
import { Saibamais } from "./pages/Saibamais";

// import logo from "../src/assets/logo.png";
// { <img src={logo} alt="" /> }

export function Menu() {
  const [opcao, setOpcao] = useState<number>(1);

  const pageMenu = () => {
    setOpcao(1);
    alert(opcao);
  };

  const pageSaibamais = () => {
    setOpcao(2);
    alert(opcao);
  };
  return (
    <body>
      <header className="topo">
        <a onClick={pageMenu}>Menu</a>
        <a onClick={pageSaibamais}>Saiba mais</a>
        <a>Quem somos</a>
        <a>Contatos</a>
      </header>

      {opcao == 1 ? <Home /> : <Saibamais />}
    </body>
  );
}
