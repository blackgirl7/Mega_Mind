import React, { useState } from "react";

const questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is 3 + 5?", answer: "8" }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleAnswer = () => {
    if (userAnswer === questions[currentQuestion].answer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Try Again");
    }
  };

  return (
    <div>
      <h2>Adaptive Quiz</h2>
      <p>{questions[currentQuestion].question}</p>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={handleAnswer}>Submit Answer</button>
      <p>{feedback}</p>
    </div>
  );
};

export default Quiz;
