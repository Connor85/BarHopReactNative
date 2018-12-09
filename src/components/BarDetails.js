import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const BarDetails = ({ businesses }) => {
  const { name, rating, image_url } = businesses;

  return (
    <Card>
      <CardSection>
        <View>
          <Image style={styles.thumbnailStyle} source={{ uri: image_url }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{name}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default BarDetails;
