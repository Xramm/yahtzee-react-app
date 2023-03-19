import { CardImage } from "@rneui/base/dist/Card/Card.Image";
import { Button, Card, Chip } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";

const ScoreChoiceButton = (props: {
  headNumbers: number[];
  sumOverride?: number;
}) => {
  const headNumbers = props.headNumbers;

  const dieImages = [
    require("../assets/die1.png"),
    require("../assets/die2.png"),
    require("../assets/die3.png"),
    require("../assets/die4.png"),
    require("../assets/die5.png"),
    require("../assets/die6.png"),
  ];

  let sum = 0;

  // Use sum override or calcualte head number total sum
  if (props.sumOverride) {
    sum = props.sumOverride;
  } else {
    for (let i = 0; i < headNumbers.length; i++) {
      sum += headNumbers[i];
    }
  }

  return <Chip title={sum.toString()} />;
  /*
  return (
    <Button>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {headNumbers.map((headNum: number, index: number) => (
          <CardImage
            key={index}
            style={styles.dieStyle}
            source={dieImages[headNum - 1]}
          />
        ))}
      </View>
    </Button>
  );*/
};

const styles = StyleSheet.create({
  dieStyle: { width: 50, height: 50, margin: 2 },
});

export default ScoreChoiceButton;
