import React, { useState } from "react";

const MainContext = React.createContext({});

const MainProvider = (props: any) => {
  // String list of players in the current game
  const [players, setPlayers] = useState([]);

  return (
    <MainContext.Provider value={{ players, setPlayers }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default { MainContext, MainProvider };
