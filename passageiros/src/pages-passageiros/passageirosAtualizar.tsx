import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPassageiro, putPassageiro } from "../services/passageiros";

import "./passageirosAtualizar.css";

export function PassageirosAtualizar() {
  const [passageiro, setpassageiro] = useState<any>();

  const params = useParams();

  if (!passageiro) {
    getPassageiro(parseInt(params.id || "", 10)).then((res) =>
      setpassageiro(res.data)
    );
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putPassageiro({
      codigo: passageiro.codigo,
      nome: data.nome.toString(),
      codigoVoo: parseInt(data.codigoVoo.toString(), 10),
    });
    alert(
      `Passageiro Atualizado: Nome: ${data.nome.toString()}, Código Vôo: ${parseInt(
        data.codigoVoo.toString()
      )}, codigo ${passageiro.codigo}`
    );
  };

  return (
    <div className="divtabela">
      <form onSubmit={onSubmit}>
        <div className="linha">
          <span>Nome:</span>
          <input
            type="text"
            name="nome"
            defaultValue={passageiro?.nome}
            className="inputnormal"
          />
        </div>

        <div className="linha">
          <span>Código Vôo:</span>
          <input
            type="number"
            name="codigoVoo"
            defaultValue={passageiro?.codigoVoo}
            className="inputnormal"
          />
        </div>
        <div className="linha">
          <input type="submit" value="Atualizar" className="submitInput" />
        </div>
      </form>
      <a href="/passageiros">
        <button>Voltar</button>
      </a>
    </div>
  );
}
