import { useEffect, useState } from "react";
import { Aeroporto } from "../model/Aeroporto";
import { buscarPassageiros, deletePassageiro } from "../services/passageiros";
import "./passageiros.css";

export function Passageiros() {
  const [passageiros, setpassageiros] = useState<any[]>();

  const loadData = async () => {
    const aeroportos: Aeroporto[] = await buscarPassageiros();
    setpassageiros(aeroportos);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteAeroporto = (id: number) => {
    deletePassageiro(id).then(() => loadData());
  };
  return (
    <div className="divtabela">
      <span>Tela Passageiros</span>
      <a href="/passageiros-novo">Criar Aeroporto</a>
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
                <td>
                  <a href={`/passageiros-atualizar/${passageiro.codigo}`}>
                    Atualizar
                  </a>
                </td>
                <td>
                  <button
                    onClick={() => onClickDeleteAeroporto(passageiro.codigo)}
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
