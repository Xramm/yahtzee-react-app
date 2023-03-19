import { cloneDeep } from "lodash";
import React, { useState } from "react";
import { playerTiles } from "../utils/scoreTiles";

const MainContext = React.createContext({});

const MainProvider = (props: any) => {
  // String list of players in the current game
  const [players, setPlayers] = useState([{id: 0, name: "Matti", scoreTiles: cloneDeep(playerTiles)}, {id: 1, name: "Pekka", scoreTiles: cloneDeep(playerTiles)}, {id:2, name: "Teppo", scoreTiles: cloneDeep(playerTiles)}]);
  const [maxDisplayedPlayers, setMaxDisplayedPlayers] = useState(4);

  return (
    <MainContext.Provider value={{ players, setPlayers, maxDisplayedPlayers, setMaxDisplayedPlayers }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default { MainContext, MainProvider };
