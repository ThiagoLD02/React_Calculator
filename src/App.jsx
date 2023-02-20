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

  return (
    <div className="App">
      <div className="CalculatorBox">
        <div className="Display">
          <p>6000/2+3227*2</p>
          <h3>=12,454</h3>
        </div>
        <div className="Keys">
          <div className="LeftGroup">
            <div className="Top">
              {keysLeftGroupTop.map((key) => {
                return <button className={key}>{key}</button>;
              })}
            </div>

            <div className="Bottom">
              {keysLeftGroupBottom.map((key) => {
                return <button className={key}>{key}</button>;
              })}
            </div>
          </div>
          <div className="RightGroup">
            {keysRightGroup.map((key) => {
              return <button className={key}>{key}</button>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
