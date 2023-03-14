import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAeroporto, putAeroporto } from "../services/aeroportos";

import "./aeroportosAtualizar.css";

export function AeroportosAtualizar() {
  const [aeroporto, setaeroporto] = useState<any>();

  const params = useParams();

  if (!aeroporto) {
    getAeroporto(parseInt(params.id || "", 10)).then((res) =>
      setaeroporto(res.data)
    );
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putAeroporto({
      codigo: aeroporto.codigo,
      nome: data.nome.toString(),
      capacidade: parseInt(data.capacidade.toString(), 10),
    });
    alert(
      `Aeroporto Atualizado: Nome: ${data.nome.toString()}, Capacidade: ${parseInt(
        data.capacidade.toString()
      )}, codigo ${aeroporto.codigo}`
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
            defaultValue={aeroporto?.nome}
            className="inputnormal"
          />
        </div>

        <div className="linha">
          <span>Capacidade:</span>
          <input
            type="number"
            name="capacidade"
            defaultValue={aeroporto?.capacidade}
            className="inputnormal"
          />
        </div>
        <div className="linha">
          <input type="submit" value="Atualizar" className="submitInput" />
        </div>
      </form>
      <a href="/aeroportos">
        <button>Voltar</button>
      </a>
    </div>
  );
}
