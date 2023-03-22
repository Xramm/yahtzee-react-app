import { Button, Card, CheckBox, Input, Text } from "@rneui/themed";
import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import MainContext from "../contexts/MainContext";

const Settings = ({ navigation }: any) => {
  const {
    forceManualScoring,
    setForceManualScoring,
    maxDisplayedPlayers,
    setMaxDisplayedPlayers,
    bonusPointThreshold,
    setBonusPointThreshold,
    bonusPointAmount,
    setBonusPointAmount,
  }: any = useContext(MainContext.MainContext);

  let parsedNum: number = 0;

  const onChangeTextBonusScoreAmount = (value: string) => {
    parsedNum = +value;
  };

  const onConfirmBonusScoreAmount = () => {
    setBonusPointAmount(parsedNum);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Card>
        <View style={styles.rowStyle}>
          <CheckBox
            title="Scoring Assist Disabled"
            size={30}
            checked={forceManualScoring}
            onPress={() => {
              setForceManualScoring(!forceManualScoring);
            }}
          />
        </View>

        <Card.Divider />

        <Card.Title>Bonus Score Amount</Card.Title>

        <Input
          keyboardType="numeric"
          placeholder={bonusPointAmount.toString()}
          onSubmitEditing={onConfirmBonusScoreAmount}
          onChangeText={onChangeTextBonusScoreAmount}
        />

        <View style={styles.buttonRow}>
          <Button
            containerStyle={styles.rowButton}
            color="error"
            title="Reset"
            onPress={() => {
              setBonusPointAmount(50);
            }}
          />
          <Button
            containerStyle={styles.rowButton}
            title="Save"
            onPress={onConfirmBonusScoreAmount}
          />
        </View>

        <Card.Divider />

        <Card.Title>Max Amount of Players To Show</Card.Title>

        <View style={styles.rowStyle}>
          <Button
            size="lg"
            title="-1"
            disabled={maxDisplayedPlayers < 2}
            onPress={() => {
              setMaxDisplayedPlayers(maxDisplayedPlayers - 1);
            }}
          />
          <Text style={styles.centeredText}>{maxDisplayedPlayers}</Text>
          <Button
            size="lg"
            title="+1"
            disabled={maxDisplayedPlayers > 7}
            onPress={() => {
              setMaxDisplayedPlayers(maxDisplayedPlayers + 1);
            }}
          />
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  rowButton: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
  },
  centeredText: {
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default Settings;
