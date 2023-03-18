import React, { useState } from "react";

const MainContext = React.createContext({});

const MainProvider = (props: any) => {
  // String list of players in the current game
  const [players, setPlayers] = useState([{id: 0, name: "Matti"}, {id: 1, name: "Pekka"}, {id:2, name: "Teppo"}]);
  const [maxDisplayedPlayers, setMaxDisplayedPlayers] = useState(4);

  return (
    <MainContext.Provider value={{ players, setPlayers, maxDisplayedPlayers, setMaxDisplayedPlayers }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default { MainContext, MainProvider };
