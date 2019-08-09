/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
import ChatScreen from "./src/Screens/Chat/Chat";
import HomeScreen from "./src/Screens/Home/Home";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

const App = createAppContainer(MainNavigator);

export default App;
