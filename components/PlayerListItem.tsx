import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import {
  Dialog,
  Input,
  Card,
  Button,
  Chip,
  ListItem,
  ButtonGroup,
} from "@rneui/themed";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import MainContext from "../contexts/MainContext";
import Player from "../interfaces/Player";

const PlayerListItem = (props: { player: Player }) => {
  const player = props.player;

  const { players, setPlayers, gameInProgress }: any = useContext(MainContext.MainContext);

  const [editDialogIsVisible, setEditDialogIsVisible] = useState(false);

  // Changed by the name input
  let playerEditName = "";

  // Toggles this player's editing dialog
  const toggleEditDialog = () => {
    setEditDialogIsVisible(!editDialogIsVisible);
  };

  // Called when this player's remove button has been pressed
  const onRemovePressed = () => {
    // Filter this player out of the list
    const playersCopy = players.filter((playerInstance: Player) => {
      if (playerInstance === player) {
        return false;
      }

      return true;
    });

    // Using map, reassign IDs to each player
    playersCopy.map((playerInstance: Player, index: number) => {
      playerInstance.id = index;
    });

    // Apply changes tothe player list
    setPlayers(playersCopy);

    // Toggle dialogue (off)
    toggleEditDialog();
  };

  // Called when the value of the name change input field is changed
  const onEditNameChangeText = (value: string) => {
    playerEditName = value;
  };

  // Called when the user presses save after editing this player's info
  const onSavePressed = () => {
    // Close the dialog and don't change anything if the name value wasn't changed
    if (playerEditName === "") {
      Alert.alert("No new name given.", "Name will not changed.", [
        { text: "Ok", onPress: toggleEditDialog },
      ]);
      return;
    }

    // Copy players list
    const playersCopy = [...players];

    // Find this player in the list and set its name to a new one
    playersCopy.map((playerInstance: Player) => {
      if (playerInstance === player) {
        playerInstance.name = playerEditName;
      }
    });

    // Reassign the players list
    setPlayers(playersCopy);

    // Toggle dialog (off)
    toggleEditDialog();
  };

  const movePlayerID = (amount: number) => {
    // Check if player is already at the bottom or top of the list
    if (player.id + amount >= players.length || player.id + amount < 0) {
      return;
    }

    //Copy players list
    const playersCopy = [...players];

    // Temp save the names for both players before swap
    const thisPlayerName = player.name;
    const targetPlayerName = playersCopy[player.id + amount].name;

    // Swap names
    playersCopy[player.id].name = targetPlayerName;
    playersCopy[player.id + amount].name = thisPlayerName;

    // Update the player list
    setPlayers(playersCopy);
  };

  // Called whenever one of the button group's buttons gets pressed
  const onPlayerButtonGroupPress = (index: number) => {
    switch (index) {
      case 0: {
        // Edit
        toggleEditDialog();
        break;
      }
      case 1: {
        // Down
        movePlayerID(1);
        break;
      }
      case 2: {
        //Up
        movePlayerID(-1);
        break;
      }
    }
  };

  return (
    <>
      <ListItem>
        <ListItem.Title>{player.name}</ListItem.Title>
        <ListItem.ButtonGroup
          buttons={["Edit", "Down", "Up"]}
          disabled={gameInProgress ? [1,2] : []}
          onPress={onPlayerButtonGroupPress}
        />
      </ListItem>

      <Card.Divider width={0} />

      <Dialog
        isVisible={editDialogIsVisible}
        onBackdropPress={toggleEditDialog}
      >
        <Dialog.Title title="Edit Player" />

        <Input
          placeholder={player.name}
          onSubmitEditing={onSavePressed}
          onChangeText={onEditNameChangeText}
        />

        <Button title="Remove" onPress={onRemovePressed} color="error" />

        <Card.Divider width={0} />

        <Button title="Save" onPress={onSavePressed} />
      </Dialog>
    </>
  );
};

export default PlayerListItem;
