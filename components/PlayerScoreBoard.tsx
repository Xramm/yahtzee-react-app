import React from "react";
import { Button, Card, Input, Text } from "@rneui/themed";
import Player from "../interfaces/Player";
import { Dimensions, StyleSheet, View } from "react-native";
import ScoreTile from "../interfaces/ScoreTile";
import SelfAdjustText from "./SelfAdjustText";

const PlayerScoreBoard = (props: {
  player?: Player;
  tiles: ScoreTile[];
  boardWidth: number;
}) => {
  const player = props.player;
  const scoreBoardWidth = props.boardWidth;
  const tiles = props.tiles;

  // TODO: Use ScoreTile array instead!
  const tileArray = [
    "Name",
    "Ones",
    "Twos",
    "Threes",
    "Fours",
    "Fives",
    "Sixes",
    "MidSum",
    "Pair",
    "Two Pair",
    "Three Of Kind",
    "Four Of Kind",
    "Small Straight",
    "Big Straight",
    "Full House",
    "Random",
    "Yatzy",
    "Sum",
  ];

  const singleTileHeight = Dimensions.get("window").height / tileArray.length;

  // Returns the JSX element of the tile depending on its type
  const getTileElement = (tile: ScoreTile) => {
    if (tile.type === "name") {
      return <SelfAdjustText text={player?.name || ""} />;
    }

    if (tile.type === "title") {
      return <SelfAdjustText text={tile.name} />;
    }

    if (tile.type === "sum") {
      return <SelfAdjustText text={tile.currentScore.toString()} />;
    }

    // Return a normal custom score tile by default
    return <Button title={tile.name} />;
  };

  return (
    <View
      style={{
        height: "100%",
        width: scoreBoardWidth,
      }}
    >
      {tiles.map((scoreTile: ScoreTile, index: number) => (
        <View
          key={index}
          style={{
            height: "5.5%", // TODO: Calculate this smartly lol. This is hardcoded for now
            width: scoreBoardWidth,
            padding: 2,
          }}
        >
          <View style={{ flex: 1, backgroundColor: "white" }}>
            {getTileElement(scoreTile)}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
});

export default PlayerScoreBoard;
