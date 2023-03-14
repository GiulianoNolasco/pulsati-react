import { useEffect, useState } from "react";
import { Voo } from "../model/Voo";
import { buscarVoos, deleteVoo } from "../services/voos";
import "./voos.css";

export function Voos() {
  const [voos, setvoos] = useState<any[]>();

  const loadData = async () => {
    const voos: Voo[] = await buscarVoos();
    setvoos(voos);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteVoos = (id: number) => {
    deleteVoo(id).then(() => loadData());
  };
  return (
    <div className="divtabela">
      <span className="tituloSpan">Tela Voos</span>
      <a href="/voos-novo">
        <button>Criar Voo</button>
      </a>
      <table className="tabela">
        <thead>
          <td>Id</td>
          <td>Código Voo</td>
          <td>Cd Aer Origem</td>
          <td>Cd Aer Destino</td>
          <td>Emp Aérea</td>
        </thead>
        <tbody>
          {voos?.map((voo) => {
            return (
              <tr>
                <td>{voo.codigo}</td>
                <td>{voo.codigoVoo}</td>
                <td>{voo.codigoAeroportoOrigem}</td>
                <td>{voo.codigoAeroportoDestino}</td>
                <td>{voo.nomeEmpresaAerea}</td>
                <td>
                  <a href={`/voos/${voo.codigo}`}>Visualizar</a>
                </td>
                <td>
                  <a href={`/voos-atualizar/${voo.codigo}`}>Atualizar</a>
                </td>
                <td>
                  <button onClick={() => onClickDeleteVoos(voo.codigo)}>
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
