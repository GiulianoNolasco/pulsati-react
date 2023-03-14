import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPassageiro } from "../services/passageiros";
import "./passageirosver.css";

export function PassageirosVer() {
  const [passageiro, setpassageiro] = useState<any>();

  const params = useParams();
  console.log(params);

  if (!passageiro) {
    getPassageiro(parseInt(params.id || "", 10)).then((res) =>
      setpassageiro(res.data)
    );
  }

  return (
    <div className="divtabela">
      <div>
        <a className="tituloSpan">Passageiro:</a>
        <div className="linha">
          <span>Código:</span>
          <input
            type="text"
            value={passageiro?.codigo}
            className="inputnormal2"
          />
        </div>
        <div className="linha">
          <span>Nome:</span>
          <input
            type="text"
            value={passageiro?.nome}
            className="inputnormal2"
          />
        </div>
        <div className="linha">
          <span>Código Vôo:</span>
          <input
            type="text"
            value={passageiro?.codigoVoo}
            className="inputnormal2"
          />
        </div>
        <a href="/passageiros">
          <button>Voltar</button>
        </a>
      </div>
    </div>
  );
}
