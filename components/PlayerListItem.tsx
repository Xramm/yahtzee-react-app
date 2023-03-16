import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { Dialog, Input, Card, Button, Chip } from "@rneui/themed";
import React, { useContext, useState } from "react";
import MainContext from "../contexts/MainContext";
import Player from "../interfaces/Player";
import { warningColor } from "../utils/colors";

const PlayerListItem = (props: { player: Player }) => {
  const player = props.player;

  const { players, setPlayers }: any = useContext(MainContext.MainContext);

  const [editDialogIsVisible, setEditDialogIsVisible] = useState(false);

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
    if (playerEditName === '') {
        toggleEditDialog();
        return;
    }
    
    const playersCopy = players;

    // Find this player in the list and set its name to a new one
    playersCopy.map((playerInstance: Player) => {
      if (playerInstance === player) {
        playerInstance.name = playerEditName;
      }
    });

    setPlayers(playersCopy);

    toggleEditDialog();
  };

  return (
    <>
      <Chip
        title={player.name + " " + player.id}
        onPress={toggleEditDialog}
      />

      <Card.Divider width={0} />

      <Dialog
        isVisible={editDialogIsVisible}
        onBackdropPress={toggleEditDialog}
      >
        <Dialog.Title title="Edit Player" />

        <Input placeholder={player.name} onChangeText={onEditNameChangeText} />

        <Button title="Remove" onPress={onRemovePressed} color={warningColor} />

        <Card.Divider width={0} />

        <Button title="Save" onPress={onSavePressed} />
      </Dialog>
    </>
  );
};

export default PlayerListItem;
