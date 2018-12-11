import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const BarDetails = ({ bar }) => {
  const { name, categories, image_url } = bar;
  return (
    <Card>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{name}</Text>
          <Text>{categories[0].alias}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image_url }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default BarDetails;
