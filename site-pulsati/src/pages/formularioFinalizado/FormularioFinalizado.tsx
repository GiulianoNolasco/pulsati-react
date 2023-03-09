import "./FormularioFinalizado.css";

export function FormularioFinalizado() {
  return (
    <div className="corpo">
      <div className="mulheresdiv">
        <img
          className="mulheres"
          src="../assets/Captura de tela_20230227_135257.png"
          alt=""
        />
      </div>
      <div className="primeiraParte">
        <h2>Inscrição Concluída com sucesso!</h2>
      </div>

      <div className="primeiraParte">
        <h2>Agradecemos a participação.</h2>
      </div>

      <div className="logos">
        <img className="logo" src="../assets/pulsatiLogo2.png" alt="" />
        <img className="logo2" src="../assets/apex-logo-degrade.png" alt="" />
      </div>
    </div>
  );
}
