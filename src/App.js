import React from "react";
import "./style.css";
import PlayerList from "./PlayerList";
import ScoreList from "./ScoreList";
import HOC from "./HOC";

const Players = HOC(PlayerList);

export default function App() {
  return (
    <div>
      <h1>React HOC Example</h1>
      <Players />
    </div>
  );
}
