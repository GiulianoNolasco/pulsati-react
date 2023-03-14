import { useEffect, useState } from "react";
import { Aeroporto } from "../model/Aeroporto";
import { buscarAeroportos } from "../services/aeroportos";
import { postVoo } from "../services/voos";
import "./voosNovo.css";

export function VoosNovo() {
  const [aeroportos, setCargos] = useState<Aeroporto[]>([]);

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    console.log(formData);

    const data = Object.fromEntries(formData);
    postVoo({
      codigoVoo: parseInt(data.codigovoo.toString()),
      codigoAeroportoOrigem: parseInt(
        data.codigo_codigoAeroportoOrigem.toString(),
        10
      ),
      codigoAeroportoDestino: parseInt(
        data.codigo_codigoAeroportoDestino.toString(),
        10
      ),
      nomeEmpresaAerea: data.nomeEmpresaAerea.toString(),
    });
    alert(
      `Voo Criado: \n
      codigoVoo: ${parseInt(data.codigovoo.toString())}, \n
      codigoAeroportoOrigem: ${parseInt(
        data.codigo_codigoAeroportoOrigem.toString(),
        10
      )},\n
      codigoAeroportoDestino: ${parseInt(
        data.codigo_codigoAeroportoDestino.toString(),
        10
      )},\n
      nomeEmpresaAerea: ${data.nomeEmpresaAerea.toString()}
      `
    );
  };

  const loadCargos = async () => {
    const aeroportos = await buscarAeroportos();
    setCargos(aeroportos);
  };

  useEffect(() => {
    loadCargos();
  }, []);

  return (
    <div className="divtabela">
      <form onSubmit={onSubmit}>
        <div className="linha">
          <span>Código Voo</span>
          <input type="number" name="codigovoo" className="inputnormal" />
        </div>

        <div className="linha">
          <span>Cd Aer Origem</span>
          <select name="codigo_codigoAeroportoOrigem" className="inputnormal">
            {aeroportos.map((aeroporto) => {
              return <option value={aeroporto.codigo}>{aeroporto.nome}</option>;
            })}
          </select>
        </div>

        <div className="linha">
          <span>Cd Aer Destino</span>
          <select name="codigo_codigoAeroportoDestino" className="inputnormal">
            {aeroportos.map((aeroporto) => {
              return <option value={aeroporto.codigo}>{aeroporto.nome}</option>;
            })}
          </select>
        </div>

        <div className="linha">
          <span>Nome Emp Aérea</span>
          <input type="text" name="nomeEmpresaAerea" className="inputnormal" />
        </div>

        <input type="submit" value="Salvar" className="inputsalvar" />
      </form>
    </div>
  );
}
