import "./Contatos.css";

export function Contatos() {
  return (
    <div>
      <div className="primeiraParte">
        <h1>Contatos</h1>
      </div>

      <div className="segundaParte">
        <div className="segtexto">
          <div className="h1segtexto">
            <h1>PULSATI</h1>
          </div>
          <div className="logos">
            <img
              className="logo"
              src="../assets/logobrancopulsati.png"
              alt=""
            />
          </div>
        </div>

        <div className="textosegparteh2">
          <h2>
            <i className="fa-brands fa-whatsapp"></i> - Whatsapp +55 47
            98829-8305
          </h2>
          <h2>
            <i className="fa-regular fa-envelope"></i> - E-mail
            comercial@pulsati.com.br
          </h2>
          <h2>
            <i className="fa-solid fa-location-dot"></i> -Endereço: XV de
            Novembro 759 12º Andar - Centro Blumenau/SC
          </h2>
          <h2>
            <i className="fa-solid fa-location-dot"></i> - Endereço: Alameda
            Rocha Azevedo, 38 Conj. 1204 - Cerqueira César São Paulo/SP
          </h2>
        </div>

        <div className="divbotao">
          <a href="https://pulsati.com.br">
            <button className="botaoInscrever">Acessar site</button>
          </a>
        </div>
      </div>

      <div className="segundaParte">
        <div className="segtexto">
          <div className="h1segtexto">
            <h1>APEX ENSINO</h1>
          </div>
          <div className="logos">
            <img className="logo" src="../assets/logo-apex-branco.png" alt="" />
          </div>
        </div>

        <div className="textosegparteh2">
          <h2>
            <i className="fa-brands fa-whatsapp"></i> - Whatsapp: (47) 9
            9760-0011
          </h2>
          <h2>
            <i className="fa-regular fa-envelope"></i> - E-mail: atendimento
            @apexensino.com.br
          </h2>
          <h2>
            <i className="fa-solid fa-location-dot"></i> - Endereço: Rua 2 de
            Setembro, número 3999 Bairro Itoupava Norte | Blumenau/SC
          </h2>
        </div>

        <div className="divbotao">
          <a href="https://apexensino.com.br/">
            <button className="botaoInscrever">Acessar site</button>
          </a>
        </div>
      </div>
    </div>
  );
}
