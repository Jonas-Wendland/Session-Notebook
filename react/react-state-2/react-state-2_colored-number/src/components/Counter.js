import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
import ButtonContainer from "./ButtonContainer";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleAddCount() {
    setCount(count + 1);
  }
  function handleSubtractCount() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <ButtonContainer
        onAddCount={handleAddCount}
        onSubtractCount={handleSubtractCount}
      />
    </div>
  );
}
