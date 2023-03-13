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
    <div className="divPassVer">
      <div className="borda">
        <span>Passageiro:</span>
        <div className="linha">
          <span>Código:</span>
          <input type="text" value={passageiro?.codigo} />
        </div>
        <div className="linha">
          <span>Nome:</span>
          <input type="text" value={passageiro?.nome} />
        </div>
        <div className="linha">
          <span>Capacidade:</span>
          <input type="text" value={passageiro?.capacidade} />
        </div>
      </div>
    </div>
  );
}
