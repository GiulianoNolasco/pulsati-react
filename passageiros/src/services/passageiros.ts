import axios from "axios";
import { Aeroporto } from "../model/Aeroporto";

export async function buscarPassageiros(): Promise<Aeroporto[]> {
  const { data } = await axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get("http://localhost:8000/aeroportos");
  return data;
}

export async function getPassageiro(id: number) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get(`http://localhost:8000/aeroportos/${id}`);
}

export async function postPassageiro(dados: Aeroporto) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .post(`http://localhost:8000/aeroportos`, dados);
}

export function deletePassageiro(id: number) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .delete(`http://localhost:8000/aeroportos/${id}`);
}

export async function putPassageiro(dados: Aeroporto) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8000/aeroportos/${dados.codigo}`, dados);
}
