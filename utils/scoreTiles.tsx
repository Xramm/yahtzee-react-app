import { useContext } from "react";
import MainContext from "../contexts/MainContext";
import ScoreTile from "../interfaces/ScoreTile";

const playerTiles: ScoreTile[] = [
  {
    name: "",
    type: "name",
    currentScore: 0,
  },
  {
    name: "0",
    type: "aces",
    currentScore: 0,
  },
  {
    name: "0",
    type: "twos",
    currentScore: 0,
  },
  {
    name: "0",
    type: "threes",
    currentScore: 0,
  },
  {
    name: "0",
    type: "fours",
    currentScore: 0,
  },
  {
    name: "0",
    type: "fives",
    currentScore: 0,
  },
  {
    name: "0",
    type: "sixes",
    currentScore: 0,
  },
  {
    name: "0",
    type: "midsum",
    currentScore: 0,
  },
  {
    name: "0",
    type: "pair",
    currentScore: 0,
  },
  {
    name: "0",
    type: "two pairs",
    currentScore: 0,
  },
  {
    name: "0",
    type: "3 of a kind",
    currentScore: 0,
  },
  {
    name: "0",
    type: "4 of a kind",
    currentScore: 0,
  },
  {
    name: "0",
    type: "sm. straight",
    currentScore: 0,
  },
  {
    name: "0",
    type: "lg. straight",
    currentScore: 0,
  },
  {
    name: "0",
    type: "full house",
    currentScore: 0,
  },
  {
    name: "0",
    type: "chance",
    currentScore: 0,
  },
  {
    name: "0",
    type: "yahtzee",
    currentScore: 0,
  },
  {
    name: "0",
    type: "sum",
    currentScore: 0,
  },
];

const scoreTitleTiles: ScoreTile[] = [
  {
    name: "Name",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Aces",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Twos",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Threes",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Fours",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Fives",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Sixes",
    type: "title",
    currentScore: 0,
  },
  {
    name: "TOTAL",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Pair",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Two Pairs",
    type: "title",
    currentScore: 0,
  },
  {
    name: "3 of a Kind",
    type: "title",
    currentScore: 0,
  },
  {
    name: "4 of a Kind",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Sm. Straight",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Lg. Straight",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Full House",
    type: "title",
    currentScore: 0,
  },
  {
    name: "Chance",
    type: "title",
    currentScore: 0,
  },
  {
    name: "YAHTZEE",
    type: "title",
    currentScore: 0,
  },
  {
    name: "TOTAL",
    type: "title",
    currentScore: 0,
  },
];

export { playerTiles, scoreTitleTiles };
