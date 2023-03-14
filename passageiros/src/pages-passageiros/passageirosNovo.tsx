import { postPassageiro } from "../services/passageiros";
import "./passageirosNovo.css";

export function PassageirosNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    postPassageiro({
      nome: data.nome.toString(),
      codigoVoo: parseInt(data.codigoVoo.toString()),
    });
    alert(
      `Passageiro Criado: Nome: ${data.nome.toString()}, Código Vôo: ${parseInt(
        data.codigoVoo.toString()
      )}`
    );
  };

  return (
    <div className="divtabela">
      <form onSubmit={onSubmit}>
        <label>Criar novo Passageiro</label>
        <div className="linha">
          <span>Nome</span>
          <input type="text" name="nome" className="inputnormal" />
        </div>

        <div className="linha">
          <span>Código Vôo</span>
          <input type="number" name="codigoVoo" className="inputnormal" />
        </div>
        <div className="linha">
          <input type="submit" value="Salvar" className="inputsalvar" />
        </div>
      </form>
      <a href="/passageiros">
        <button>Voltar</button>
      </a>
    </div>
  );
}
