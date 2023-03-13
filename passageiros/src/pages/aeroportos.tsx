import { useEffect, useState } from "react";
import { Aeroporto } from "../model/Aeroporto";
import { buscarAeroportos, deleteAeroporto } from "../services/passageiros";
import "./aeroportos.css";

export function Aeroportos() {
  const [aeroportos, setaeroportos] = useState<any[]>();

  const loadData = async () => {
    const aeroportos: Aeroporto[] = await buscarAeroportos();
    setaeroportos(aeroportos);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteAeroporto = (id: number) => {
    deleteAeroporto(id).then(() => loadData());
  };
  return (
    <div className="divtabela">
      <span className="tituloSpan">Tela Aeroportos</span>
      <a href="/aeroportos-novo">
        <button>Criar Aeroporto</button>
      </a>
      <table className="tabela">
        <thead>
          <td>Id</td>
          <td>Nome</td>
          <td>Capacidade</td>
        </thead>
        <tbody>
          {aeroportos?.map((aeroporto) => {
            return (
              <tr>
                <td>{aeroporto.codigo}</td>
                <td>{aeroporto.nome}</td>
                <td>{aeroporto.capacidade}</td>
                <td>
                  <a href={`/aeroportos/${aeroporto.codigo}`}>Visualizar</a>
                </td>
                <td>
                  <a href={`/aeroportos-atualizar/${aeroporto.codigo}`}>
                    Atualizar
                  </a>
                </td>
                <td>
                  <button
                    onClick={() => onClickDeleteAeroporto(aeroporto.codigo)}
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
