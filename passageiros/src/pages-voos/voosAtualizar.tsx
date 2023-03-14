import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Aeroporto } from "../model/Aeroporto";
import { buscarAeroportos } from "../services/aeroportos";
import { getVoo, putVoo } from "../services/voos";

import "./voosAtualizar.css";

export function VoosAtualizar() {
  const [voo, setvoo] = useState<any>();
  const [aeroportos, setCargos] = useState<Aeroporto[]>([]);

  const params = useParams();
  if (!voo) {
    getVoo(parseInt(params.id || "", 10)).then((res) => setvoo(res.data));
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    putVoo({
      codigo: parseInt(voo.codigo),
      codigoVoo: parseInt(data.codigoVoo.toString()),

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
      `Voo Alterado: \n
      codigoVoo: ${parseInt(data.codigoVoo.toString())}, \n
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
          <input
            type="number"
            name="codigoVoo"
            className="inputnormal"
            defaultValue={voo?.codigoVoo}
          />
        </div>

        <div className="linha">
          <span>Nome Emp Aérea</span>
          <input
            type="text"
            name="nomeEmpresaAerea"
            className="inputnormal"
            defaultValue={voo?.nomeEmpresaAerea}
          />
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
              return (
                <option
                  defaultValue={aeroporto.codigo}
                  value={aeroporto.codigo}
                >
                  {aeroporto.nome}
                </option>
              );
            })}
          </select>
        </div>

        <input type="submit" value="Salvar" className="inputsalvar" />
      </form>
    </div>
  );
}
