import { useEffect, useState } from "react";
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
  const [clearInput, setClearInput] = useState(false);

  function eraseInput() {}

  function handleButtonClick(key) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (clearInput) {
      if (numbers.includes(key)) {
        setInput(key);
        setClearInput(false);
        return;
      } else if (key !== "=" && key !== "Ac" && key !== "Del") {
        setInput(result + key);
        setClearInput(false);
        return;
      } else if (key == "Del") {
        return;
      }
    }

    switch (key) {
      case "Ac":
        setInput("");
        setResult("");
        break;

      case "Del":
        setInput(input.slice(0, input.length - 1));
        break;

      case "=":
        if (numbers.includes(input[input.length - 1])) {
          setResult(calculate(input));
          setClearInput(true);
        }
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
    let firstOperator = "";
    let secondNumber = 0.0;
    let secondOperator = "";

    let state = 1;
    let index = 0;
    let finished = false;
    while (!finished) {
      switch (state) {
        case 1:
          firstNumber = parseFloat(splittedProblem[index++]);
          state = 2;
          break;
        case 2:
          if (index === splittedProblem.length) {
            state = 8;
            break;
          }
          firstOperator = splittedProblem[index++];
          if (firstOperator === "/" || firstOperator === "*") state = 3;
          else state = 4;
          break;
        case 3:
          secondNumber = parseFloat(splittedProblem[index++]);
          if (firstOperator === "/") firstNumber = firstNumber / secondNumber;
          else firstNumber = firstNumber * secondNumber;
          secondNumber = 0.0;
          firstOperator = "";
          state = 2;
          break;
        case 4:
          secondNumber = parseFloat(splittedProblem[index++]);
          state = 5;
          break;
        case 5:
          if (index === splittedProblem.length) {
            state = 8;
            break;
          }
          secondOperator = splittedProblem[index++];
          if (secondOperator === "/" || secondOperator === "*") state = 7;
          else state = 6;
          break;
        case 6:
          if (firstOperator === "+") firstNumber = firstNumber + secondNumber;
          else firstNumber = firstNumber - secondNumber;
          secondNumber = 0.0;
          firstOperator = secondOperator;
          secondOperator = "";
          if (firstOperator === "/" || firstOperator === "*") state = 3;
          else state = 4;
          break;
        case 7:
          const aux = parseFloat(splittedProblem[index++]);
          if (secondOperator === "/") secondNumber = secondNumber / aux;
          else secondNumber = secondNumber * aux;
          state = 5;
          break;
        case 8:
          if (firstOperator === "/") firstNumber = firstNumber / secondNumber;
          if (firstOperator === "*") firstNumber = firstNumber * secondNumber;
          if (firstOperator === "+") firstNumber = firstNumber + secondNumber;
          if (firstOperator === "-") firstNumber = firstNumber - secondNumber;
          finished = true;

          break;
      }
    }
    return firstNumber;
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
                  <button onClick={() => handleButtonClick(key)} key={key}>
                    {key}
                  </button>
                );
              })}
            </div>

            <div className="Bottom">
              {keysLeftGroupBottom.map((key) => {
                return (
                  <button onClick={() => handleButtonClick(key)} key={key}>
                    {key}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="RightGroup">
            {keysRightGroup.map((key) => {
              return (
                <button onClick={() => handleButtonClick(key)} key={key}>
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
