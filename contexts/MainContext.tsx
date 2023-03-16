import React, { useState } from "react";

const MainContext = React.createContext({});

const MainProvider = (props: any) => {
  const [players, setPlayers] = useState([]);

  return (
    <MainContext.Provider value={[players, setPlayers]}>
      {props.children}
    </MainContext.Provider>
  );
};

export default { MainContext, MainProvider };
