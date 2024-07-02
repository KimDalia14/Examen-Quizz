import { useEffect, useState } from 'react';
import "../styles/quiz.css";
import axios from 'axios';

export default function Quiz() {
  
   //MIENTRAS QUE NO HAYA API XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
  const questions = [
    {
      id: 1,
      question: "¿Qué es un bucle for?",
      description: "Selecciona la opción correcta.",
      options: [
        { answer: "Una estructura de control que se repite un número determinado de veces.", correct: true },
        { answer: "Una función que no acepta parámetros.", correct: false },
        { answer: "Un operador utilizado para comparar valores.", correct: false },
        { answer: "Un tipo de dato en JavaScript.", correct: false }
      ]
    },
    {
      id: 2,
      question: "¿Qué es JSON?",
      description: "Elige la respuesta correcta.",
      options: [
        { answer: "Un lenguaje de programación orientado a objetos.", correct: false },
        { answer: "Un formato de intercambio de datos ligero.", correct: true },
        { answer: "Una función incorporada en JavaScript para manejar errores.", correct: false },
        { answer: "Un método de cifrado de datos en redes.", correct: false }
      ]
    },
    {
      id: 3,
      question: "¿Qué significa CSS en desarrollo web?",
      description: "Selecciona la respuesta correcta.",
      options: [
        { answer: "Cascading Style Sheets", correct: true },
        { answer: "Creative Style Sheets", correct: false },
        { answer: "Computer Style Sheets", correct: false },
        { answer: "Cascading System Sheets", correct: false }
      ]
    },
    {
      id: 4,
      question: "¿Qué significa CSS en desarrollo web?",
      description: "Selecciona la respuesta correcta.",
      options: [
        { answer: "Cascading Style Sheets", correct: true },
        { answer: "Creative Style Sheets", correct: false },
        { answer: "Computer Style Sheets", correct: false },
        { answer: "Cascading System Sheets", correct: false }
      ]
    },

  ];

  const [data, setData] = useState(null);

  const fetcData = () => {
    return axios.get("http://localhost:8080/api/preguntas")
    .then((response) => setData(response.data));
  }
  useEffect(()=>{
    fetcData();
  },[data])

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  };

  return (
    <div className="container">
      <h1>{data?.[currentQuestion]?.text}</h1>
      <hr />
      <ul>
        {data?.[currentQuestion]?.answers?.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(index)}>
            {option?.text}
            {selectedOption !== null && selectedOption === index && (
              option?.correcta ? <span className="correct">✔</span> : <span className="incorrect">❌</span>
            )}
          </li>
        ))}
      </ul>
      {currentQuestion < data?.length - 1 ? (
        <button onClick={handleNextQuestion}>Siguiente</button>
      ) : (
        <button>Terminar</button>
      )}
      <div className="index">{currentQuestion + 1}/{data?.length}</div>
    </div>
  );
}
