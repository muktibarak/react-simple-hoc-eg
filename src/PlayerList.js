import React from "react";
import { players } from "./Players";
import ScoreList from "./ScoreList";
import HOC from "./HOC";

const Scores = HOC(ScoreList);

function PlayerList() {
  return (
    <div>
      <h3>Name</h3>
      {players.map(player => (
        <div {...player.id}>{player.name}</div>
      ))}
      <h3>Score</h3>
      <Scores />
    </div>
  );
}
export default PlayerList;
