import { useEffect, useState } from "react";
import { Passageiro } from "../model/Passageiro";
import { buscarPassageiros, deletePassageiro } from "../services/passageiros";
import "./passageiros.css";

export function Passageiros() {
  const [passageiros, setpassageiros] = useState<any[]>();

  const loadData = async () => {
    const passageiros: Passageiro[] = await buscarPassageiros();
    setpassageiros(passageiros);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeletePassageiro = (id: number) => {
    deletePassageiro(id).then(() => loadData());
  };
  return (
    <div className="divtabela">
      <span className="tituloSpan">Tela Passageiros</span>
      <a href="/passageiros-novo">
        <button>Criar Passageiro</button>
      </a>
      <table className="tabela">
        <thead>
          <td>Id</td>
          <td>Nome</td>
          <td>Codigo Vôo</td>
        </thead>
        <tbody>
          {passageiros?.map((passageiro) => {
            return (
              <tr>
                <td>{passageiro.codigo}</td>
                <td>{passageiro.nome}</td>
                <td>{passageiro.codigoVoo}</td>
                <td>
                  <a href={`/passageiros/${passageiro.codigo}`}>Visualizar</a>
                </td>
                <td>
                  <a href={`/passageiros-atualizar/${passageiro.codigo}`}>
                    Atualizar
                  </a>
                </td>
                <td>
                  <button
                    onClick={() => onClickDeletePassageiro(passageiro.codigo)}
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
