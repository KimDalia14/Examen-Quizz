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
            <h2>1. Solo tendrás 15 segundos para responder cada pregunta..</h2>
            <h2>2. Una vez que seleccionas tu respuesta, no se puede cambiar</h2>
            <h2>3. No puedes seleccionar ninguna opción una vez acabado el tiempo..</h2>
            <h2>4. No puedes salir del examen hasta que termines el tiempo</h2>
            <h2>5. Obtendrás tu resultado al final del examen.</h2>
          </div>
          <button className="start-button" onClick={handleClick}>Iniciar Examen</button>
        </div>
      </div>
    </main>
  );
}
