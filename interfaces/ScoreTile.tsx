import React from "react";
import DicePattern from "./DicePattern";
import Player from "./Player";

interface ScoreTile {
  name: string;
  type: string;
  currentScore: number;
  description?: string;
}

export default ScoreTile;
