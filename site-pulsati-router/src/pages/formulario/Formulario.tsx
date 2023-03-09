import "./Formulario.css";

export function Formulario() {
  return (
    <div>
      <div className="mulheresdiv">
        <h1>
          MULHERES
          <br />
          NA TECNOLOGIA
        </h1>
      </div>
      <div className="primeiraParte">
        <h1>Inscrição</h1>
      </div>

      <div className="segundaParte">
        <div className="textosegparteh2">
          <label>Nome completo:</label>
          <input type="text" />

          <label>E-mail:</label>
          <input type="email" />

          <label>Telefone:</label>
          <input type="tel" />
        </div>

        <div className="divbotao">
          <a href="/formularioFinalizado">
            <button>Inscrever-se</button>
          </a>
        </div>
      </div>
    </div>
  );
}
