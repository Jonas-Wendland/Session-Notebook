export default function ButtonContainer({ onAddCount, onSubtractCount }) {
  return (
    <div className="counter__buttons-container">
      <button
        type="button"
        className="counter__button"
        aria-label="increment count"
        onClick={onAddCount}
      >
        +
      </button>
      <button
        type="button"
        className="counter__button"
        aria-label="decrement count"
        onClick={onSubtractCount}
      >
        -
      </button>
    </div>
  );
}
