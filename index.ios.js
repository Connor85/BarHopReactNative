import React from "react";
import { AppRegistry, View, Text } from "react-native";
import Header from "./src/components/Header";
import BarList from "./src/components/BarList";

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={"Bar Hop"} />
    <BarList />
  </View>
);

AppRegistry.registerComponent("albums", () => App);
