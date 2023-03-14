import { useState } from "react";
import { useParams } from "react-router-dom";
import { getVoo } from "../services/voos";
import "./voosver.css";

export function VoosVer() {
  const [voo, setvoo] = useState<any>();

  const params = useParams();
  console.log(params);

  if (!voo) {
    getVoo(parseInt(params.id || "", 10)).then((res) => setvoo(res.data));
  }

  return (
    <div className="divtabela">
      <div>
        <a className="tituloSpan">Voo:</a>
        <div className="linha">
          <span>Código:</span>
          <input type="text" value={voo?.codigo} className="inputnormal2" />
        </div>
        <div className="linha">
          <span>Nome:</span>
          <input type="text" value={voo?.nome} className="inputnormal2" />
        </div>
        <div className="linha">
          <span>Capacidade:</span>
          <input type="text" value={voo?.capacidade} className="inputnormal2" />
        </div>
        <a href="/voos">
          <button>Voltar</button>
        </a>
      </div>
    </div>
  );
}
