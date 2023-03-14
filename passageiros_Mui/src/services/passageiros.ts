import axios from "axios";
import { Passageiro } from "../model/Passageiro";

export async function buscarPassageiros(): Promise<Passageiro[]> {
  const { data } = await axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get("http://localhost:8000/passageiros");
  return data;
}

export async function getPassageiro(id: number) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get(`http://localhost:8000/passageiros/${id}`);
}

export async function postPassageiro(dados: Passageiro) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .post(`http://localhost:8000/passageiros`, dados);
}

export function deletePassageiro(id: number) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .delete(`http://localhost:8000/passageiros/${id}`);
}

export async function putPassageiro(dados: Passageiro) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8000/passageiros/${dados.codigo}`, dados);
}
