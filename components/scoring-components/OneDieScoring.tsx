import { Button, Card } from "@rneui/themed";
import React from "react";
import { View, StyleSheet } from "react-native";
import ScoreTile from "../../interfaces/ScoreTile";

const OneDieScoring = (props: {
  headNumber: number;
  tile: ScoreTile;
  onSubmitScore: Function;
}) => {
  const headNumber = props.headNumber;

  const choiceArray = [
    headNumber,
    headNumber * 2,
    headNumber * 3,
    headNumber * 4,
    headNumber * 5,
    headNumber * 6,
  ];

  const getButtonForChoice = (scoreChoice: number) => {
    return (
      <Button
        size="lg"
        containerStyle={styles.choiceButtonStyle}
        title={scoreChoice.toString()}
        onPress={() => {
          props.onSubmitScore(props.tile, scoreChoice, scoreChoice.toString());
        }}
      />
    );
  };

  return (
    <>
      <View style={styles.rowStyle}>
        {getButtonForChoice(choiceArray[0])}
        {getButtonForChoice(choiceArray[1])}
      </View>
      <View style={styles.rowStyle}>
        {getButtonForChoice(choiceArray[2])}
        {getButtonForChoice(choiceArray[3])}
      </View>
      <View style={styles.rowStyle}>
        {getButtonForChoice(choiceArray[4])}
        {getButtonForChoice(choiceArray[5])}
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
});

export default OneDieScoring;
