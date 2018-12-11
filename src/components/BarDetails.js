import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const BarDetails = ({ bar }) => {
  const { name, categories, rating, url, image_url } = bar;
  return (
    <Card>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{name}</Text>
          <Text>{categories[0].alias}</Text>
          <Text>Rating: {rating}/5</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image_url }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>More Info</Button>
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
    fontSize: 18,
    textDecorationLine: "underline"
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default BarDetails;
