import { postAeroporto } from "../services/passageiros";
import "./aeroportosNovo.css";

export function AeroportosNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postAeroporto({
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
    <div className="divtabela">
      <form onSubmit={onSubmit}>
        <label>Criar novo Aeroporto</label>
        <div className="linha">
          <span>Nome</span>
          <input type="text" name="nome" className="inputnormal" />
        </div>

        <div className="linha">
          <span>Capacidade</span>
          <input type="number" name="capacidade" className="inputnormal" />
        </div>
        <div className="linha">
          <input type="submit" value="Salvar" className="inputsalvar" />
        </div>
      </form>
      <a href="/aeroportos">
        <button>Voltar</button>
      </a>
    </div>
  );
}
