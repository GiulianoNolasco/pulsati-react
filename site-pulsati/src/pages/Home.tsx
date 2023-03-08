import "./home.css";

export function Home() {
  return (
    <div className="tudo">
      <main className="corpo">
        <div className="ladoEsquerdo">
          <h1>
            MULHERES
            <br />
            NA TECNOLOGIA
          </h1>
          <h2>
            Preparar e orientar mulheres <br />
            para carreiras na área <br />
            de tecnologia.
          </h2>
          <div className="botaodiv">
            <a href="pages/saibaMais.html">
              <button>Saiba Mais</button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
