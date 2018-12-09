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
    backgroundColor: "#4286f4",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 35,
    paddingBottom: 15,
    shadowColor: "#000",
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
};
export default Header;
