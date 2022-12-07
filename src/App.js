import { useState } from "react";
import "./App.css";
import Question from "./Question";
import Result from "./Result";

function App() {
  return (
    <div className="App">
      <div className="App-quiz border rounded shadow p-4">
        <h1 className="text-center bg-dark p-2 rounded text-light">Quiz</h1>
        <Question />
        <Result />
      </div>
    </div>
  );
}

export default App;
