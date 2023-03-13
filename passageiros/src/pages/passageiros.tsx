import { useState } from "react";
import { buscarPassageiros } from "../services/passageiros";
import "./passageiros.css";

export function Passageiros() {
  const [passageiros, setpassageiros] = useState<any[]>();
  if (!passageiros || passageiros.length == 0) {
    const passageirosReq: any = buscarPassageiros();
    passageirosReq.then((res: any) => {
      setpassageiros(res.data);
    });
  }
  return (
    <div className="divtabela">
      <span>Tela Passageiros</span>
      <table className="tabela">
        <thead>
          <td>Id</td>
          <td>Nome</td>
          <td>Capacidade</td>
        </thead>
        <tbody>
          {passageiros?.map((passageiro) => {
            return (
              <tr>
                <td>{passageiro.codigo}</td>
                <td>{passageiro.nome}</td>
                <td>{passageiro.capacidade}</td>
                <td>
                  <a href={`/passageiros/${passageiro.codigo}`}>Visualizar</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
