import { Button, Card, Image, Input } from "@rneui/themed";
import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import ScoreTile from "../../interfaces/ScoreTile";

const ManualScoring = (props: {
  maxPoints: number;
  tile: ScoreTile;
  onSubmitScore: Function;
}) => {
  const [inputString, setInputString] = useState(props.tile.currentScore != 0 ? props.tile.currentScore.toString() : '');

  const submitScore = () => {
    let parsedScore: number = +inputString;

    if (parsedScore > props.maxPoints) {
      parsedScore = props.maxPoints;
    } else if (parsedScore <= 0) {
      props.onSubmitScore(props.tile, props.tile.currentScore, props.tile.name);
      return;
    }

    props.onSubmitScore(props.tile, parsedScore, parsedScore.toString());
  };

  const getNumericButtonFor = (num: number) => {
    return (
      <Button
        size="lg"
        containerStyle={styles.choiceButtonStyle}
        title={num.toString()}
        onPress={() => {
          setInputString(inputString + num.toString());
        }}
      />
    );
  };

  return (
    <>
      <Input
        value={inputString}
        keyboardType="numeric"
        onChangeText={(text: string) => {
          setInputString(text);
        }}
        placeholder="Input Manual Score"
      />

      <View style={styles.rowStyle}>
        {getNumericButtonFor(1)}
        {getNumericButtonFor(2)}
        {getNumericButtonFor(3)}
      </View>
      <View style={styles.rowStyle}>
        {getNumericButtonFor(4)}
        {getNumericButtonFor(5)}
        {getNumericButtonFor(6)}
      </View>
      <View style={styles.rowStyle}>
        {getNumericButtonFor(7)}
        {getNumericButtonFor(8)}
        {getNumericButtonFor(9)}
      </View>
      <View style={styles.rowStyle}>
        <Button
          size="lg"
          containerStyle={styles.choiceButtonStyle}
          title={"Undo"}
          onPress={() => {
            setInputString(inputString.slice(0, -1));
          }}
        />
        {getNumericButtonFor(0)}
      </View>

      <Card.Divider />

      <View style={styles.rowStyle}>
        <Button
          size="lg"
          containerStyle={styles.choiceButtonStyle}
          title={"Submit"}
          onPress={submitScore}
        />
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

export default ManualScoring;
