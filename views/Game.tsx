import { CardImage } from "@rneui/base/dist/Card/Card.Image";
import { Button, Card, Dialog, Divider, Input, Overlay } from "@rneui/themed";
import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { Dimensions, ScrollView, View, Alert, StyleSheet } from "react-native";
import PlayerScoreBoard from "../components/PlayerScoreBoard";
import ScoreChoiceButton from "../components/ScoreChoiceButton";
import OneDieScoring from "../components/scoring-components/OneDieScoring";
import ScoringComponentMaster from "../components/scoring-components/ScoringComponentMaster";
import MainContext from "../contexts/MainContext";
import DicePattern from "../interfaces/DicePattern";
import Player from "../interfaces/Player";
import ScoreTile from "../interfaces/ScoreTile";
import { playerTiles, scoreTitleTiles } from "../utils/scoreTiles";

const Game = () => {
  const [scoreInputDialogIsVisible, setScoreInputDialogIsVisible] =
    useState(false);

  const [scoreInputElements, setScoreInputElements] = useState(<></>);

  const { players, maxDisplayedPlayers }: any = useContext(
    MainContext.MainContext
  );

  // Returns the width a single scoreboard column should be
  const getSingleBoardWidth = () => {
    if (players.length < maxDisplayedPlayers) {
      return Dimensions.get("window").width / (players.length + 1);
    }

    return Dimensions.get("window").width / (maxDisplayedPlayers + 1);
  };

  // Toggles the visibility of the dialog allowing score input
  const toggleScoreInputDialogIsVisible = () => {
    setScoreInputDialogIsVisible(!scoreInputDialogIsVisible);
  };

  const onSaveScorePressed = (
    tile: ScoreTile,
    score: number,
    tileText: string
  ) => {
    tile.currentScore = score;
    tile.name = tileText;
    setScoreInputDialogIsVisible(false);
  };

  // Pops up the input for a single tile in the dialog
  const showScoreInputForTile = (tile: ScoreTile) => {
    setScoreInputElements(
      <>
        <Card.Title>{tile.description}</Card.Title>

        <Card.Divider />

        <ScoringComponentMaster
          tile={tile}
          onSubmitScore={onSaveScorePressed}
        />
      </>
    );

    toggleScoreInputDialogIsVisible();
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
          boardWidth={getSingleBoardWidth()}
          overrideTiles={scoreTitleTiles}
        />
        {players.map((player: Player) => (
          <PlayerScoreBoard
            player={player}
            key={player.id}
            boardWidth={getSingleBoardWidth()}
            onTilePress={showScoreInputForTile}
          />
        ))}
        {players.length > maxDisplayedPlayers ? (
          <PlayerScoreBoard
            boardWidth={getSingleBoardWidth()}
            overrideTiles={scoreTitleTiles}
          />
        ) : (
          <></>
        )}
      </View>
      <Dialog
        isVisible={scoreInputDialogIsVisible}
        onBackdropPress={toggleScoreInputDialogIsVisible}
      >
        {scoreInputElements}
      </Dialog>
    </ScrollView>
  );
};

export default Game;
