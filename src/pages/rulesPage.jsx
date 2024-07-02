import "../styles/rules-page.css";

export default function RulesPage() {
    const handleClick = () => {
      window.location.href = '/examPage';
    };
  return (
    <main>
      <div className="container-rules">
        <div className="card">
          <div className="title-category">
            <h2>Reglas</h2>
          </div>
          <hr />
          <div className="text-rules">
            <span>1. Solo tendrás 15 segundos para responder cada pregunta.</span><br/>
            <span>2. Una vez que seleccionas tu respuesta, no se puede cambiar.</span><br/>
            <span>3. No puedes seleccionar ninguna opción una vez acabado el tiempo.</span><br/>
            <span>4. No puedes salir del examen hasta que termines el tiempo.</span><br/>
            <span>5. Obtendrás tu resultado al final del examen.</span>
          </div>
          <button className="start-button" onClick={handleClick}>Iniciar Examen</button>
        </div>
      </div>
    </main>
  );
}
