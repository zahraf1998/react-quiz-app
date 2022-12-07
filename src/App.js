import { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import { questions } from "./data";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);

  const changeQuestion = (answer) => {
    if (answer === questions[question].key) setScore(score + 1);
    setQuestion(question + 1);
  };

  const reset = () => {
    setQuestion(0);
    setScore(0);
  };

  return (
    <div className="App rounded shadow p-4">
      <h1 className="text-center bg-dark p-2 rounded text-light">Quiz</h1>
      {question === questions.length ? (
        <Result score={score} total={questions.length} reset={reset} />
      ) : (
        <Question
          question={questions[question]}
          changeQuestion={changeQuestion}
        />
      )}
    </div>
  );
}

export default App;
