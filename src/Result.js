import React from "react";

function Result() {
  return (
    <div className="text-center pt-3">
      <h5>Result</h5>
      <p>Your score is</p>
      <strong>5 / 7</strong>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-dark">Again</button>
      </div>
    </div>
  );
}

export default Result;
