import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Icon } from "@rneui/themed";
import React, { createRef } from "react";
import { StyleSheet } from "react-native";
import { mainColor } from "../utils/colors";
import Game from "../views/Game";
import Home from "../views/Home";
import Settings from "../views/Settings";

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "Yahtzee by Xramu",
          headerRight: () => (
            <Icon
              name="settings"
              onPress={() => console.log(navigation.navigate("Settings"))}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ title: "Game Scoreboard" }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackScreen></StackScreen>
    </NavigationContainer>
  );
};

export default Navigator;
