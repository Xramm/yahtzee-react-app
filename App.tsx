import { StatusBar } from "expo-status-bar";
import MainContext from "./contexts/MainContext";
import Navigator from "./navigators/Navigator";

const App = () => {
  return (
    <MainContext.MainProvider>
      <Navigator></Navigator>
      <StatusBar style="auto" />
    </MainContext.MainProvider>
  );
};

export default App;
