import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Passageiro } from "../model/Passageiro";
import { buscarPassageiros, deletePassageiro } from "../services/passageiros";
import { getVoo } from "../services/voos";
import "./voosver.css";

export function VoosVer() {
  const [voo, setvoo] = useState<any>();

  const params = useParams();
  console.log(params);

  if (!voo) {
    getVoo(parseInt(params.id || "", 10)).then((res) => setvoo(res.data));
  }

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
      <div>
        <div>
          <a className="tituloSpan">Voo:</a>
          <div className="linha">
            <span>ID:</span>
            <input type="text" value={voo?.codigo} className="inputnormal2" />
          </div>
          <div className="linha">
            <span>Código Voo:</span>
            <input
              type="text"
              value={voo?.codigoVoo}
              className="inputnormal2"
            />
          </div>
          <div className="linha">
            <span>Código Aeroporto Origem:</span>
            <input
              type="text"
              value={voo?.codigoAeroportoOrigem}
              className="inputnormal2"
            />
          </div>
          <div className="linha">
            <span>Código Aeroporto Destino:</span>
            <input
              type="text"
              value={voo?.codigoAeroportoDestino}
              className="inputnormal2"
            />
          </div>
          <div className="linha">
            <span>Nome Empresa Aérea:</span>
            <input
              type="text"
              value={voo?.nomeEmpresaAerea}
              className="inputnormal2"
            />
          </div>
          <a href="/voos">
            <button>Voltar</button>
          </a>
        </div>
      </div>
      <div>
        <span className="tituloSpan">Passageiros do Voo</span>

        <table className="tabela">
          <thead>
            <td>Id</td>
            <td>Nome</td>
            <td>Codigo Vôo</td>
          </thead>
          <tbody>
            {passageiros?.map((passageiro) => {
              if (passageiro.codigoVoo == voo.codigoVoo) {
                return (
                  <tr>
                    <td>{passageiro.codigo}</td>
                    <td>{passageiro.nome}</td>
                    <td>{passageiro.codigoVoo}</td>
                    <td>
                      <a href={`/passageiros/${passageiro.codigo}`}>
                        Visualizar
                      </a>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
