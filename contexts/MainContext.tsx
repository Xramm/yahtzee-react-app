import React, { useState } from "react";

const MainContext = React.createContext({});

const MainProvider = (props: any) => {
  // String list of players in the current game
  const [players, setPlayers] = useState([]);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [maxDisplayedPlayers, setMaxDisplayedPlayers] = useState(4);
  const [bonusPointThreshold, setBonusPointThreshold] = useState(63);
  const [bonusPointAmount, setBonusPointAmount] = useState(50);
  const [forceManualScoring, setForceManualScoring] = useState(false);

  return (
    <MainContext.Provider
      value={{
        players,
        setPlayers,
        maxDisplayedPlayers,
        setMaxDisplayedPlayers,
        bonusPointThreshold,
        setBonusPointThreshold,
        bonusPointAmount,
        setBonusPointAmount,
        gameInProgress,
        setGameInProgress,
        forceManualScoring,
        setForceManualScoring,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default { MainContext, MainProvider };
