import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPassageiro,
  postPassageiro,
  putPassageiro,
} from "../services/passageiros";
import "./passageirosver.css";

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
      capacidade: parseInt(data.capacidade.toString(), 10),
    });
    alert(
      `Aeroporto Atualizado: Nome: ${data.nome.toString()}, Capacidade: ${parseInt(
        data.capacidade.toString()
      )}, codigo ${passageiro.codigo}`
    );
  };

  return (
    <div className="divPassVer">
      <form onSubmit={onSubmit}>
        <div>
          <span>Nome</span>
          <input type="text" name="nome" defaultValue={passageiro?.nome} />
        </div>

        <div>
          <span>Capacidade</span>
          <input
            type="number"
            name="capacidade"
            defaultValue={passageiro?.capacidade}
          />
        </div>

        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
}
