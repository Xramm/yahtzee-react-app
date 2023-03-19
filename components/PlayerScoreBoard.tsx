import React, { useState } from "react";
import { Button, Card, Dialog, Input, Text } from "@rneui/themed";
import Player from "../interfaces/Player";
import { Dimensions, StyleSheet, View } from "react-native";
import ScoreTile from "../interfaces/ScoreTile";
import SelfAdjustText from "./SelfAdjustText";
import { scoreTitleTiles } from "../utils/scoreTiles";

const PlayerScoreBoard = (props: {
  overrideTiles?: ScoreTile[];
  player?: Player;
  boardWidth: number;
  onTilePress?: Function;
}) => {
  const player = props.player;
  const scoreBoardWidth = props.boardWidth;

  const tiles = props.overrideTiles ? props.overrideTiles : player?.scoreTiles;

  if (!tiles) {
    console.error("ERROR: Playerscoreboard without tiles at all created!");
    return <></>;
  }

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].description = `${scoreTitleTiles[i].name} For ${player?.name}`;
  }

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
    // Return a normal score tile by default
    return (
      <Button
        title={tile.name}
        color={tile.name === "-" ? "warning" : "primary"}
        type={tile.name === "0" || tile.name === "-" ? "solid" : "outline"}
        onPress={() => {
          props.onTilePress?.(tile);
        }}
      />
    );
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
            height: "5.5%", // TODO: Calculate this automatically lol. This is hardcoded for now
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
