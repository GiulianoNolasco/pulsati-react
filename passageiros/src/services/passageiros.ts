import axios from "axios";

export async function buscarPassageiros() {
  const passageiros = await axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get("http://localhost:8000/aeroportos");
  return passageiros;
}

export async function getPassageiro(id: number) {
  return axios
    .create({ headers: { "Content-Type": "application/json" } })
    .get(`http://localhost:8000/aeroportos/${id}`);
}
