import React from "react";

function Question() {
  return (
    <div>
      <h5 className="text-center mt-4">Question?</h5>
      <ul>
        <li className="mt-3 w-100 btn  btn-light">answer1</li>
        <li className="mt-3 w-100 btn  btn-light">answer1</li>
        <li className="mt-3 w-100 btn  btn-light">answer3</li>
        <li className="mt-3 w-100 btn  btn-light">answer4</li>
      </ul>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-dark">Skip</button>
      </div>
    </div>
  );
}

export default Question;
