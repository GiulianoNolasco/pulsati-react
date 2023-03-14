import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAeroporto } from "../services/aeroportos";
import "./aeroportosver.css";

export function AeroportosVer() {
  const [aeroporto, setaeroporto] = useState<any>();

  const params = useParams();
  console.log(params);

  if (!aeroporto) {
    getAeroporto(parseInt(params.id || "", 10)).then((res) =>
      setaeroporto(res.data)
    );
  }

  return (
    <div className="divtabela">
      <div>
        <a className="tituloSpan">Aeroporto:</a>
        <div className="linha">
          <span>Código:</span>
          <input
            type="text"
            value={aeroporto?.codigo}
            className="inputnormal2"
          />
        </div>
        <div className="linha">
          <span>Nome:</span>
          <input type="text" value={aeroporto?.nome} className="inputnormal2" />
        </div>
        <div className="linha">
          <span>Capacidade:</span>
          <input
            type="text"
            value={aeroporto?.capacidade}
            className="inputnormal2"
          />
        </div>
        <a href="/aeroportos">
          <button>Voltar</button>
        </a>
      </div>
    </div>
  );
}
