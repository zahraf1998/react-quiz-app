import { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import { questions } from "./data";
import "./App.css";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const displayNext = (answer) => {
    if (answers[questionIndex]) {
      if (answer !== null) answers[questionIndex].answer = answer;
      setAnswers([...answers]);
    } else {
      setAnswers([
        ...answers,
        {
          answer,
          key: questions[questionIndex].key,
        },
      ]);
    }

    setQuestionIndex(questionIndex + 1);
  };

  const displayPrevious = () => setQuestionIndex(questionIndex - 1);

  const reset = () => {
    setQuestionIndex(0);
    setAnswers([]);
  };

  return (
    <div className="App rounded shadow p-4">
      <h1 className="text-center bg-dark p-2 rounded text-light">Quiz</h1>
      {questionIndex < questions.length ? (
        <>
          <Question
            question={questions[questionIndex]}
            answer={answers[questionIndex] ? answers[questionIndex] : null}
            displayNext={displayNext}
          />
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-dark m-3"
              onClick={() => displayNext(null)}
            >
              Skip
            </button>
            {questionIndex !== 0 ? (
              <button
                className="btn btn-light border m-3"
                onClick={displayPrevious}
              >
                Back
              </button>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <Result answers={answers} reset={reset} />
      )}
    </div>
  );
}

export default App;
