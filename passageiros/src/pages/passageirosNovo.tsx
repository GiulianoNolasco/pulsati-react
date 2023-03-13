import { postPassageiro } from "../services/passageiros";
import "./passageirosNovo.css";

export function PassageirosNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postPassageiro({
      nome: data.nome.toString(),
      capacidade: parseInt(data.capacidade.toString()),
    });
    alert(
      `Aeroporto Criado: Nome: ${data.nome.toString()}, Capacidade: ${parseInt(
        data.capacidade.toString()
      )}`
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Nome</span>
        <input type="text" name="nome" />
      </div>

      <div>
        <span>Capacidade</span>
        <input type="number" name="capacidade" />
      </div>

      <input type="submit" value="Salvar" />
    </form>
  );
}
