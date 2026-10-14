
import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
        setCount((previous) => previous + Number(step));
    };

    const decrement = () => {
        setCount((previous) => previous - Number(step));
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="container">
            <div className="counter-card">
                <div className="icon">🔢</div>

                <h1>Counter App</h1>
                <p className="subtitle">
                    Count up, count down, and start again!
                </p>

                <div className="count-display">
                    <span>{count}</span>
                </div>

                <p className="message">
                    {count > 0
                        ? "Great! The count is positive."
                        : count < 0
                        ? "The count is negative."
                        : "Your counter is at zero."}
                </p>

                <label htmlFor="step">Choose increment step</label>
                <select
                    id="step"
                    value={step}
                    onChange={(e) => setStep(e.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>

                <div className="buttons">
                    <button className="increase" onClick={increment}>
                        + Increment
                    </button>

                    <button className="decrease" onClick={decrement}>
                        − Decrement
                    </button>

                    <button className="reset" onClick={reset}>
                        ↻ Reset
                    </button>
                </div>

                <p className="footer">Built with React useState</p>
            </div>
        </div>
    );
}

export default App;
