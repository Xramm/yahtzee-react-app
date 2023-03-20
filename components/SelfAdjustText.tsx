import { Text } from "@rneui/themed";
import React from "react";

const SelfAdjustText = (props: { text: string; backgroundColor: string }) => {
  return (
    <Text
      adjustsFontSizeToFit={true}
      numberOfLines={1}
      style={{
        backgroundColor: props.backgroundColor,
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
      }}
    >
      {props.text}
    </Text>
  );
};

export default SelfAdjustText;
