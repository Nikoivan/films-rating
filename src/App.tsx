import { useState } from "react";
import Stars from "./components/stars/Stars";
import "./App.css";
import { Films, Film } from "./types/types";

const arr: Films = [
  { name: "Супермэн", price: 1299, imgUrl: "...", starsCount: 1 },
  { name: "Одинокий странник", price: 1299, imgUrl: "...", starsCount: 2 },
];

function App() {
  return <Stars films={arr} />;
}

export default App;
