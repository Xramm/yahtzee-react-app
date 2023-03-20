import { Card, Dialog } from "@rneui/themed";
import { cloneDeep } from "lodash";
import React, { useContext, useState } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import PlayerScoreBoard from "../components/PlayerScoreBoard";
import ScoringComponentMaster from "../components/scoring-components/ScoringComponentMaster";
import MainContext from "../contexts/MainContext";
import Player from "../interfaces/Player";
import ScoreTile from "../interfaces/ScoreTile";
import { scoreTitleTiles } from "../utils/scoreTiles";

const Game = () => {
  const [scoreInputDialogIsVisible, setScoreInputDialogIsVisible] =
    useState(false);

  const [scoreInputElements, setScoreInputElements] = useState(<></>);

  const {
    players,
    setPlayers,
    maxDisplayedPlayers,
    bonusPointThreshold,
    bonusPointAmount,
    setGameInProgress,
  }: any = useContext(MainContext.MainContext);

  // Returns the width a single scoreboard column should be
  const getSingleBoardWidth = () => {
    if (players.length < maxDisplayedPlayers) {
      return Dimensions.get("window").width / (players.length + 1);
    }

    return Dimensions.get("window").width / (maxDisplayedPlayers + 1);
  };

  const updatePlayersTotalScores = () => {
    const playersCopy = cloneDeep(players);

    for (let i = 0; i < playersCopy.length; i++) {
      if (!playersCopy[i].scoreTiles) return;

      const tiles = playersCopy[i].scoreTiles;

      let sum = 0;

      for (let j = 0; j < tiles.length; j++) {
        if (tiles[j].type.toLowerCase() === "midsum") {
          //Sub sum
          // Add bonus points to this tile
          if (sum >= bonusPointThreshold) {
            tiles[j].currentScore = bonusPointAmount;
            sum += tiles[j].currentScore;
          }

          tiles[j].name = sum.toString();
        } else if (tiles[j].type.toLowerCase() === "sum") {
          //Total Sum
          tiles[j].currentScore = sum;
          tiles[j].name = sum.toString();
        } else {
          sum += tiles[j].currentScore;
        }
      }
    }

    setPlayers(playersCopy);
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

    //Update scores of the players (screw updating just the one player right?)
    updatePlayersTotalScores();

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
