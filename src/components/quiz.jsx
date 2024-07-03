import { useEffect, useState, useRef } from 'react';
import "../styles/quiz.css";
import axios from 'axios';
const handleClick = () => {
  window.location.href = '/rulesPage';
};

export default function Quiz() {
  const [data, setData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timeUp, setTimeUp] = useState(false);
  const [score, setScore] = useState(0);
  const timerRef = useRef(null);

  const fetchData = () => {
    return axios.get("http://localhost:8080/api/preguntas")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []); 

  useEffect(() => {
    if (currentQuestion >= 10) return;

    if (timeLeft === 0) {
      setTimeUp(true);
      handleOptionClick(-1); 
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [timeLeft, currentQuestion]);

  const handleOptionClick = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
      clearInterval(timerRef.current); 
      if (index !== -1 && data[currentQuestion].answers[index].correcta) {
        setScore((prevScore) => prevScore + 1); 
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption(null);
      setTimeLeft(15);
      setTimeUp(false);
    } else {
      setCurrentQuestion(10);
      setTimeLeft(0);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setTimeLeft(15);
    setTimeUp(false);
    setScore(0);
  };

  const getResultMessage = () => {
    if (score === 10) return '¡Felicidades sacaste 10 de 10 aciertos has estudiado bien! 😊🥳';
    if (score === 9) return '¡Felicidades sacaste 9 de 10 aciertos has estudiado bien! 😊🥳';
    if (score >= 8) return '¡Sacaste 8 de 10 aciertos. Hay que mejorar un poquito, pero vas bien! ☺️';
    if (score >= 7) return '¡Sacaste 7 de 10 aciertos. Hay que mejorar un poquito, pero vas bien! ☺️';
    if (score >= 6) return '¡Sacaste 6 de 10 aciertos. Échale más ganas para la próxima 😅';
    if (score >= 5) return '¡Sacaste 5 de 10 aciertos. ¿Qué pasó? Hay que estudiar más 🙂';
    if (score >= 4) return '¡Sacaste 4 de 10 aciertos. ¿Qué pasó? Hay que estudiar más 🙂';
    if (score >= 3) return '¡Sacaste 3 de 10 aciertos. Muy mal, inténtalo de nuevo!! ☹️';
    if (score >= 2) return '¡Sacaste 2 de 10 aciertos. Muy mal, inténtalo de nuevo!! ☹️';
    return '¡Sacaste 1 de 10 aciertos. Muy mal, inténtalo de nuevo!! ☹️';
  };

  return (
    <div className="container">
      {currentQuestion < 10 ? (
        <>
          <h1>{data?.[currentQuestion]?.text}</h1>
          <hr />
          <ul>
            {data?.[currentQuestion]?.answers?.map((option, index) => (
             <li 
             key={index} 
             onClick={() => handleOptionClick(index)}
             className={
              selectedOption !== null && selectedOption === index 
              ? option?.correcta ? 'correct' : 'incorrect' : 'option' }
            >
            {option?.text}
            </li>
            ))}
          </ul>
          {(selectedOption !== null || timeUp) && (
            <button onClick={handleNextQuestion}>Siguiente</button>
          )}
          <div className="index">{currentQuestion + 1}/{data?.length}</div>
          <div className="timer">Tiempo restante: {timeLeft}s</div>
        </>
      ) : (
        <div>
          <h1>¡Has completado el cuestionario!</h1>
          <h2>Tu puntuación: {score} / 10</h2>
          <p>{getResultMessage()}</p>
          <div className='container-button'>
            <button onClick={handleRestartQuiz}>Repetir Quiz</button>
            <button onClick={handleClick}>Regresar</button>
        </div>
        </div>
      )}
    </div>
  );
}

