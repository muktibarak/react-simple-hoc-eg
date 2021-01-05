import React from "react";
import { scores } from "./Score";

function ScoreList() {
  return (
    <div>
      {scores.map(score => (
        <div>{score.point}</div>
      ))}
    </div>
  );
}
export default ScoreList;
