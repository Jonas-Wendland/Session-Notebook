import { useState } from "react";
import "./styles.css";

export default function App() {
  const [activate, setActivate] = useState(false);

  function handleClick() {
    setActivate(!activate);
    // Check that the value changes correctly.
    console.log(activate);
  }

  return (
    <main>
      <div className={`box ${activate ? "box--active" : ""}`} />
      <button
        onClick={handleClick}
        className={`box ${activate ? "box--active" : ""}`}
      >
        Activate
      </button>
    </main>
  );
}
