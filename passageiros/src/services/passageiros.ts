import axios from "axios";
import { Aeroporto } from "../model/Aeroporto";

export async function buscarAeroportos(): Promise<Aeroporto[]> {
  const { data } = await axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get("http://localhost:8000/aeroportos");
  return data;
}

export async function getAeroporto(id: number) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get(`http://localhost:8000/aeroportos/${id}`);
}

export async function postAeroporto(dados: Aeroporto) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .post(`http://localhost:8000/aeroportos`, dados);
}

export function deleteAeroporto(id: number) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .delete(`http://localhost:8000/aeroportos/${id}`);
}

export async function putAeroporto(dados: Aeroporto) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8000/aeroportos/${dados.codigo}`, dados);
}
