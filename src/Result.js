import React from "react";

function Result({ answers, reset }) {
  let score = 0;
  answers.forEach((answer) => {
    if (answer.answer === answer.key) score++;
  });

  return (
    <div className="text-center pt-3">
      <h5>Result</h5>
      <p>Your score is</p>
      <strong>
        {score} / {answers.length}
      </strong>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-dark" onClick={reset}>
          Again
        </button>
      </div>
    </div>
  );
}

export default Result;
