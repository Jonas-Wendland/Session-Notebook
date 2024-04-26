import "./styles.css";

export default function App() {
  return <Greeting name="Jonas" />;
}
function Greeting({ name }) {
  if (name === "Dominik") {
    return <h1>Hello, Coach</h1>;
  } else {
    return <h1>Hello, {name}</h1>;
  }
}
