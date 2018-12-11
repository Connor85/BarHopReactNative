import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#007aff",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 50,
    paddingBottom: 15,
    shadowColor: "#000",
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "700"
  }
};
export default Header;
