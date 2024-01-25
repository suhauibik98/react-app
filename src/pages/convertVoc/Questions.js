// import React from 'react'

// const Questions = () => {
//   return (
//     <div>
//       qusu
      
//     </div>
//   )
// }

// export default Questions
import React, { useState } from 'react';

const Questions = () => {
  const questions = [
    {
      question: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green', 'Yellow'],
      correctAnswer: 2,
    },
    {
      question: 'How old are you?',
      options: ['Under 18', '18-24', '25-34', '35+'],
      correctAnswer: 2,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
    checkAnswer(index);
  };

  const checkAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      alert('Correct Answer!');
    } else {
      alert('Incorrect Answer!');
      setShowResult(true);
    }
  };

  const reloadQuestion = () => {
    setShowResult(false);
  };

  return (
    <div className="w-full  mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">
        {questions[currentQuestionIndex].question}
      </h1>
      <ul className="mb-4">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li key={index} className="mb-2">
            <input
              type="radio"
              id={index}
              name="answerOptions"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => handleAnswerSelection(index)}
              className="mr-2"
            />
            <label htmlFor={index}>{option}</label>
          </li>
        ))}
      </ul>
      {showResult ? (
        <div>
          <p className="text-red-500 mb-2">
            Incorrect Answer! Try again or proceed to the next question.
          </p>
          <button
            onClick={reloadQuestion}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Reload Question
          </button>
        </div>
      ) : (
        <div>
          {currentQuestionIndex < questions.length - 1 && (
            <button
              onClick={handleNextQuestion}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Questions;