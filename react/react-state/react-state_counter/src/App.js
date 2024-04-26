import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let [count, setCount] = useState(0);
  function newCount() {
    setCount(count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            count--;
            newCount();
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            count++;
            newCount();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
