import React from "react";

function Question({ question, changeQuestion }) {
  return (
    <div>
      <h5 className="text-center mt-4">{question.question}</h5>
      <ul>
        {question.choices.map((choice, i) => {
          return (
            <li
              key={i}
              className="mt-3 w-100 btn  btn-light"
              onClick={() => changeQuestion(i)}
            >
              {choice}
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-dark" onClick={() => changeQuestion(null)}>
          Skip
        </button>
      </div>
    </div>
  );
}

export default Question;
