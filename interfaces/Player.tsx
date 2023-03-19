import React from "react";
import ScoreTile from "./ScoreTile";

interface Player {
  id: number;
  name: string;
  scoreTiles?: ScoreTile[]
}

export default Player;
