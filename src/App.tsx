import { useState } from "react";
import Stars from "./components/stars/Stars";
import "./App.css";
import { Film } from "./types/types";

const films: Film[] = [
  { name: "Супермэн", price: 1299, imgUrl: "...", starsCount: 1 },
  { name: "Одинокий странник", price: 799, imgUrl: "...", starsCount: 2 },
  { name: "Пустошь", price: 1699, imgUrl: "...", starsCount: 0 },
];

function App() {
  return <Stars films={films} />;
}

export default App;
