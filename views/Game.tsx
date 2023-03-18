import { Card } from "@rneui/themed";
import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, View, Alert } from "react-native";
import PlayerScoreBoard from "../components/PlayerScoreBoard";
import MainContext from "../contexts/MainContext";
import Player from "../interfaces/Player";
import { playerTiles, scoreTitleTiles } from "../utils/scoreTiles";

const Game = () => {
  const { players, maxDisplayedPlayers }: any = useContext(
    MainContext.MainContext
  );

  const getSingleBoardWidth = () => {
    if (players.length < maxDisplayedPlayers) {
      return Dimensions.get("window").width / (players.length + 1);
    }

    return Dimensions.get("window").width / (maxDisplayedPlayers + 1);
  };

  return (
    <ScrollView bounces={false} horizontal={true}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PlayerScoreBoard
          tiles={scoreTitleTiles}
          boardWidth={getSingleBoardWidth()}
        />
        {players.map((player: Player) => (
          <PlayerScoreBoard
            player={player}
            tiles={playerTiles}
            key={player.id}
            boardWidth={getSingleBoardWidth()}
          />
        ))}
        {players.length > maxDisplayedPlayers ? (
          <PlayerScoreBoard
            tiles={scoreTitleTiles}
            boardWidth={getSingleBoardWidth()}
          />
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  );
};

export default Game;
