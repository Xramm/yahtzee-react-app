import React, { useContext } from "react";
import { Dimensions, ScrollView, View } from "react-native";
import PlayerScoreBoard from "../components/PlayerScoreBoard";
import MainContext from "../contexts/MainContext";
import Player from "../interfaces/Player";

const Game = () => {
  const { players }: any = useContext(MainContext.MainContext);

  const singleBoardWidth = Dimensions.get("window").width / players.length;

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {players.map((player: Player) => (
          <PlayerScoreBoard
            key={player.id}
            player={player}
            boardWidth={singleBoardWidth}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Game;
