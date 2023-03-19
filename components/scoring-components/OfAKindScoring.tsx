import { Button, Card, Image } from "@rneui/themed";
import React from "react";
import { View, StyleSheet } from "react-native";
import ScoreTile from "../../interfaces/ScoreTile";

const OfAKindScoring = (props: {
  amountOfDice: number;
  tile: ScoreTile;
  onSubmitScore: Function;
}) => {
  const amountOfDice = props.amountOfDice;

  const dieImages = [
    require("../../assets/die1.png"),
    require("../../assets/die2.png"),
    require("../../assets/die3.png"),
    require("../../assets/die4.png"),
    require("../../assets/die5.png"),
    require("../../assets/die6.png"),
  ];

  const choiceArray = [
    amountOfDice,
    amountOfDice * 2,
    amountOfDice * 3,
    amountOfDice * 4,
    amountOfDice * 5,
    amountOfDice * 6,
  ];

  const getButtonForChoice = (headNumber: number) => {
    const score = choiceArray[headNumber - 1];

    return (
      <Button
        size="lg"
        containerStyle={styles.choiceButtonStyle}
        onPress={() => {
          props.onSubmitScore(props.tile, score, score.toString());
        }}
      >
        <Image style={styles.dieStyle} source={dieImages[headNumber - 1]} />
      </Button>
    );
  };

  return (
    <>
      <Card.Title>Which Face?</Card.Title>

      <View style={styles.rowStyle}>
        {getButtonForChoice(1)}
        {getButtonForChoice(2)}
      </View>
      <View style={styles.rowStyle}>
        {getButtonForChoice(3)}
        {getButtonForChoice(4)}
      </View>
      <View style={styles.rowStyle}>
        {getButtonForChoice(5)}
        {getButtonForChoice(6)}
      </View>
      <View style={styles.rowStyle}>
        <Button
          size="lg"
          color="error"
          containerStyle={styles.choiceButtonStyle}
          title={"Remove"}
          onPress={() => {
            props.onSubmitScore(props.tile, 0, "0");
          }}
        />
        <Button
          size="lg"
          color="warning"
          containerStyle={styles.choiceButtonStyle}
          title={"-"}
          onPress={() => {
            props.onSubmitScore(props.tile, 0, "-");
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "5%",
  },
  choiceButtonStyle: { flex: 1, marginLeft: "5%", marginRight: "5%" },
  dieStyle: { width: 60, height: 60, margin: 2 },
});

export default OfAKindScoring;
