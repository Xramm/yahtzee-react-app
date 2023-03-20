import { Button, Card } from "@rneui/themed";
import React from "react";
import { View, StyleSheet } from "react-native";
import ScoreTile from "../../interfaces/ScoreTile";

const CheckScoring = (props: {
  scoreAmount: number;
  tile: ScoreTile;
  onSubmitScore: Function;
}) => {
  return (
    <>
      <View style={styles.rowStyle}>
        <Button
          size="lg"
          containerStyle={styles.choiceButtonStyle}
          title={`Add ${props.scoreAmount} Points`}
          onPress={() => {
            props.onSubmitScore(
              props.tile,
              props.scoreAmount,
              props.scoreAmount.toString()
            );
          }}
        />
      </View>

      <Card.Divider />

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

export default CheckScoring;
