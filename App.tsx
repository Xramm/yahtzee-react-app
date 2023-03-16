import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainContext from "./contexts/MainContext";

const App = () => {
  return (
    <MainContext.MainProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </MainContext.MainProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
