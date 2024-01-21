import "./Re.css";
import { useState } from "react";

function App() {
  const [nums, setNums] = useState(0);
  const [num, setNum] = useState(0);
  const [firstButtonTimes, setFirstButtonTimes] = useState("time")
  const [secondButtonTimes, setSecondButtonTimes] = useState("time")

  function firstButton() {
    setNums(nums + 1)
    if (nums >= 0) {
      setFirstButtonTimes("times")
    }
  }

  function secondButton() {
    setNum(num - 1);
    if (num <= 1) {
      setSecondButtonTimes("times")
    }
  }

  return (
    <div>
      <div className="btnContainer">
        <button className="btns" onClick={firstButton}>
          clicked {nums} {firstButtonTimes}
        </button>
        <button onClick={secondButton}>clicked {num} {secondButtonTimes}</button>
      </div>
    </div>
  );
}

export default App;
