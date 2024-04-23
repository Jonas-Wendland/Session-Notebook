import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={4} valueB={8} />;
}
function Sum({ valueA, valueB }) {
  const Sum = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {Sum}
    </h1>
  );
}
