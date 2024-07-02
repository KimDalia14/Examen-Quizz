import WelcomeImage from "../images/welcome2.png";
import "../styles/welcome.css";


function Welcome() {

  const handleClick = () => {
    window.location.href = '/rulesPage';
  };

  return (
    <main>
      <div className="container-welcome">
        <div className="image-container">
          <img src={WelcomeImage} alt="Welcome" />
        </div>
        <div className="text-container">
          <div className="title-style">
            <h1>¡Bienvenido al desafío del conocimiento!</h1>
            <span>¿Listo para poner a prueba tus conocimientos?<br/>¡Comienza ahora y diviértete aprendiendo!</span>
          </div>
          <div className="container-button">
            <button onClick={handleClick}>Iniciar</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Welcome;

  