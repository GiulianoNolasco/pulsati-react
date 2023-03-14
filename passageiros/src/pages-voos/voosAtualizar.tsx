import { useState } from "react";
import { useParams } from "react-router-dom";
import { getVoo, putVoo } from "../services/voos";

import "./voosAtualizar.css";

export function VoosAtualizar() {
  const [voo, setvoo] = useState<any>();

  const params = useParams();

  if (!voo) {
    getVoo(parseInt(params.id || "", 10)).then((res) => setvoo(res.data));
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    // putVoo({
    //   codigo: voo.codigo,
    //   nome: data.nome.toString(),
    //   capacidade: parseInt(data.capacidade.toString(), 10),
    // });
    alert(
      `Voo Atualizado: Nome: ${data.nome.toString()}, Capacidade: ${parseInt(
        data.capacidade.toString()
      )}, codigo ${voo.codigo}`
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
            defaultValue={voo?.nome}
            className="inputnormal"
          />
        </div>

        <div className="linha">
          <span>Capacidade:</span>
          <input
            type="number"
            name="capacidade"
            defaultValue={voo?.capacidade}
            className="inputnormal"
          />
        </div>
        <div className="linha">
          <input type="submit" value="Atualizar" className="submitInput" />
        </div>
      </form>
      <a href="/voos">
        <button>Voltar</button>
      </a>
    </div>
  );
}
