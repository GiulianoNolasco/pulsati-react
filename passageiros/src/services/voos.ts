import axios from "axios";
import { Voo } from "../model/Voo";

export async function buscarVoos(): Promise<Voo[]> {
  const { data } = await axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get("http://localhost:8000/voos");
  return data;
}

export async function getVoo(id: number) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get(`http://localhost:8000/voos/${id}`);
}

export async function postVoo(dados: Voo) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .post(`http://localhost:8000/voos`, dados);
}

export function deleteVoo(id: number) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .delete(`http://localhost:8000/voos/${id}`);
}

export async function putVoo(dados: Voo) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .put(`http://localhost:8000/voos/${dados.codigo}`, dados);
}
