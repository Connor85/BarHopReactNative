import React from "react";
import { AppRegistry, View, Text } from "react-native";
import Header from "./src/common/Header";
import BarList from "./src/components/BarList";
import App from "./src/App";

// const App = () => (
//   <View style={{ flex: 1 }}>
//     <Header headerText={"Bar Hop"} />
//     <BarList />
//   </View>
// );

AppRegistry.registerComponent("albums", () => App);
