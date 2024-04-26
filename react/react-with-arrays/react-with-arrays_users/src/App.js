import React from "react";
import "./styles.css";
import Card from "./components/Card.js";
import Title from "./components/Title.js";
import { USERS } from "./db.js";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
        {/* <Card user={USERS[0]} /> */}
      </div>
    </main>
  );
}
