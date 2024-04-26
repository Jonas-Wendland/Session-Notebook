import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "Apple",
      color: "green",
    },
    {
      id: 3,
      name: "Orange",
      color: "orange",
    },
    {
      id: 4,
      name: "grapes",
      color: "green",
    },
    {
      id: 5,
      name: "strawberry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <Card key={fruit.id} name={fruit.name} color={fruit.color}></Card>
        );
      })}
    </div>
  );
}
