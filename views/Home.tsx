import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { Dialog, Input, Card, Button, Chip, Text } from "@rneui/themed";
import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Alert, ScrollView } from "react-native";
import PlayerListItem from "../components/PlayerListItem";
import MainContext from "../contexts/MainContext";
import Player from "../interfaces/Player";
import cloneDeep from "lodash/cloneDeep";
import { playerTiles } from "../utils/scoreTiles";

const Home = ({ navigation }: any) => {
  const { players, setPlayers, gameInProgress, setGameInProgress }: any =
    useContext(MainContext.MainContext);

  const [addPlayerDialogIsVisible, setAddPlayerDialogIsVisible] =
    useState(false);

  // Changed by the new player name input
  let newPlayerName = "";

  // Toggles the Add New Player dialog
  const toggleAddPlayerDialogVisible = () => {
    setAddPlayerDialogIsVisible(!addPlayerDialogIsVisible);
  };

  // Called when the value of the new player name input field gets changed
  const onNewPlayerNameTextChange = (value: string) => {
    newPlayerName = value;
  };

  // Called when a new player is being added into the player list
  const onAddPlayerSubmit = () => {
    // Deny new player if the name is null
    if (newPlayerName === "") {
      Alert.alert(
        "Player name is empty",
        "The player will not be added. Please enter a name to add a new player.",
        [{ text: "Ok", onPress: toggleAddPlayerDialogVisible }]
      );
      return;
    }

    // Create a new player object with the latest ID and the given name
    const newPlayer = {
      id: players.length,
      name: newPlayerName,
      scoreTiles: cloneDeep(playerTiles),
    };

    // Create a copy of the players, add the new player into it and set it as the new player list
    const newPlayersList = [...players];
    newPlayersList.push(newPlayer);
    setPlayers(newPlayersList);

    // Toggle dialog (off)
    toggleAddPlayerDialogVisible();
  };

  const onStartGamePressed = () => {
    setGameInProgress(true);
    navigation.navigate("Game");
  };

  const onResetGamePressed = () => {
    Alert.alert(
      "Reset Scores",
      "Are you sure you want to zero the current scoreboard?",
      [
        { text: "No" },
        {
          text: "Yes",
          onPress: () => {
            const playersCopy = cloneDeep(players);

            for (let i = 0; i < playersCopy.length; i++) {
              playersCopy[i].scoreTiles = cloneDeep(playerTiles);
            }

            setPlayers(playersCopy);

            setGameInProgress(false);
          },
        },
      ]
    );
  };

  return (
    <ScrollView>
      <Card>
        <CardTitle>Players</CardTitle>

        <Card.Divider />

        {players.map((player: Player) => (
          <PlayerListItem key={player.id} player={player} />
        ))}

        {!gameInProgress || (
          <>
            <CardTitle>Order Locked During Game</CardTitle>
            <Card.Divider />
          </>
        )}

        <Button title="Add Player" onPress={toggleAddPlayerDialogVisible} />
      </Card>

      <Card>
        {!gameInProgress || (
          <>
            <Button
              title="Reset Current Game"
              color="error"
              onPress={onResetGamePressed}
            />
            <Card.Divider />
          </>
        )}
        <Button
          size="lg"
          title={
            players.length > 0
              ? `${gameInProgress ? "Continue" : "Start"} ${
                  players.length
                } Player Game`
              : "Add Players To Start"
          }
          disabled={players.length <= 0}
          onPress={onStartGamePressed}
        />
      </Card>

      <Dialog
        isVisible={addPlayerDialogIsVisible}
        onBackdropPress={toggleAddPlayerDialogVisible}
      >
        <Dialog.Title title="Add New Player" />

        <Input
          placeholder="Player Name"
          onSubmitEditing={onAddPlayerSubmit}
          onChangeText={onNewPlayerNameTextChange}
        />

        <Button title="Add" onPress={onAddPlayerSubmit} />
      </Dialog>
    </ScrollView>
  );
};

export default Home;
