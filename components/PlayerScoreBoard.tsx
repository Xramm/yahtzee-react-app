import React from "react";
import { Button, Input, Text} from "@rneui/themed";
import Player from "../interfaces/Player";
import { Dimensions, StyleSheet, View } from "react-native";

const PlayerScoreBoard = (props: { player: Player; boardWidth: number }) => {
  const player = props.player;
  const scoreBoardWidth = props.boardWidth;

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

  const singleTileHeight =
    Dimensions.get("window").height / (tileArray.length);

  return (
    <View
      style={{
        height: Dimensions.get("window").height,
        width: scoreBoardWidth,
      }}
    >
      {tileArray.map((tileString: string) => (
        <View
          style={{
            height: singleTileHeight,
            width: scoreBoardWidth,
            padding: 2,
          }}
        >
          <View style={{flex: 1, backgroundColor: "white"}}>
            <Input placeholder={tileString}/>
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
