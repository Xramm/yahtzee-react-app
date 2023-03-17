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

const Home = ({ navigation }: any) => {
  const { players, setPlayers }: any = useContext(MainContext.MainContext);

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
    const newPlayer = { id: players.length, name: newPlayerName };

    // Create a copy of the players, add the new player into it and set it as the new player list
    const newPlayersList = [...players];
    newPlayersList.push(newPlayer);
    setPlayers(newPlayersList);

    // Toggle dialog (off)
    toggleAddPlayerDialogVisible();
  };

  return (
    <ScrollView>
      <Card>
        <CardTitle>Players</CardTitle>

        {players.map((player: Player) => (
          <PlayerListItem key={player.id} player={player} />
        ))}

        <Button title="Add Player" onPress={toggleAddPlayerDialogVisible} />
      </Card>

      <Card>
        <Button
          title={
            players.length > 0
              ? `Start ${players.length} Player Game`
              : "Add Players To Start"
          }
          disabled={players.length <= 0}
          onPress={() => {
            navigation.navigate("Game");
          }}
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
