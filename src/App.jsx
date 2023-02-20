import { useState } from "react";
import "./App.css";

function App() {
  const keysLeftGroupTop = [
    "Ac",
    "Del",
    "/",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
  ];

  const keysLeftGroupBottom = ["0", "."];

  const keysRightGroup = ["*", "-", "+", "="];

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleButtonClick(key) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    switch (key) {
      case "Ac":
        setInput("");
        break;

      case "Del":
        setInput(input.slice(0, input.length - 1));
        break;

      case "=":
        if (numbers.includes(input[input.length - 1]))
          alert("Hora de calcular");
        break;

      case "/":
      case "*":
      case "+":
      case "-":
        if (numbers.includes(input[input.length - 1])) setInput(input + key);
        break;

      case ".":
        if (numbers.includes(input[input.length - 1])) setInput(input + key);
        break;

      default:
        setInput(input + key);
        break;
    }
  }

  function calculate(problem) {
    const splittedProblem = problem.split(/([+\-*/])/);
    let firstNumber = 0.0;
    let secondNumber = 0.0;

    let state = 0;

    for (let index = 0; index < splittedProblem.length; index++) {
      switch (state) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          break;
        case 7:
          break;
        case 8:
          break;
      }
    }
  }

  return (
    <div className="App">
      <div className="Blur" />
      <div className="CalculatorBox">
        <div className="Display">
          <p>{input}</p>
          <h3>{result}</h3>
        </div>
        <div className="Keys">
          <div className="LeftGroup">
            <div className="Top">
              {keysLeftGroupTop.map((key) => {
                return (
                  <button
                    onClick={() => handleButtonClick(key)}
                    key={key}
                    className={key}
                  >
                    {key}
                  </button>
                );
              })}
            </div>

            <div className="Bottom">
              {keysLeftGroupBottom.map((key) => {
                return (
                  <button
                    onClick={() => handleButtonClick(key)}
                    key={key}
                    className={key}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="RightGroup">
            {keysRightGroup.map((key) => {
              return (
                <button
                  onClick={() => handleButtonClick(key)}
                  key={key}
                  className={key}
                >
                  {key}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
