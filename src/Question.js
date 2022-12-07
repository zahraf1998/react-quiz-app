import React from "react";

function Question({ question, answer, displayNext }) {
  return (
    <div>
      <h5 className="text-center mt-4">{question.question}</h5>
      <ul>
        {question.options.map((option, i) => {
          return (
            <li
              key={i}
              className={`mt-3 w-100 btn  
              ${answer && answer.answer === i ? "btn-secondary" : "btn-light"}`}
              onClick={() => displayNext(i)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
