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
  console.log(params);

  if (!passageiro) {
    getPassageiro(parseInt(params.id || "", 10)).then((res) =>
      setpassageiro(res.data)
    );
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putPassageiro(
      parseInt(passageiro.codigo),

      {
        nome: data.nome.toString(),
        capacidade: parseInt(data.capacidade.toString()),
        // codigo: passageiro.codigo,
      }
    );
    // alert(
    //   `Aeroporto Atualizado: Nome: ${typeof data.nome.toString()}, Capacidade: ${typeof parseInt(
    //     data.capacidade.toString()
    //   )}, ${typeof passageiro.codigo}`
    // );
  };

  return (
    <div className="divPassVer">
      <div className="borda">
        <span>Passageiro:</span>
        <div className="linha">
          <span>Código:</span>
          <input type="number" value={passageiro?.codigo} />
        </div>
        <div className="linha">
          <span>Nome:</span>
          <input type="text" value={passageiro?.nome} />
        </div>
        <div className="linha">
          <span>Capacidade:</span>
          <input type="number" value={passageiro?.capacidade} />
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div>
          <span>Nome</span>
          <input type="text" name="nome" />
        </div>

        <div>
          <span>Capacidade</span>
          <input type="number" name="capacidade" />
        </div>

        <input type="submit" value="Atualizar" />
      </form>
    </div>
  );
}
