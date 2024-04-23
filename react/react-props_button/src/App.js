import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }
  return (
    <Button
      color={{ color: "red" }}
      disabled={false}
      text={"Hehehehehe"}
      doSomething={handleDoSomething}
      onClick={handleClick}
    />
  );
}

function handleDoSomething() {
  alert("You clicked me!");
}

function Button({ color, disabled, text, doSomething, onClick }) {
  return (
    <button onClick={onClick} style={color} disabled={disabled}>
      {text}
    </button>
  );
}
