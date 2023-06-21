import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handlePlusStep() {
    if (step >= 1) setStep((s) => s + 1);
  }
  function handleMinusStep() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleMinusCount() {
    setCount((c) => c - step);
  }
  function handlePlusCount() {
    setCount((c) => c + step);
  }
  return (
    <>
      <div>
        <button onClick={handleMinusStep}> - </button>
        <span>Step: {step}</span>
        <button onClick={handlePlusStep}> + </button>
      </div>
      <div>
        <button onClick={handleMinusCount}> - </button>
        <span> Count: {count}</span>
        <button onClick={handlePlusCount}> + </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
