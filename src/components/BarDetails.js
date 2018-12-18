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

      <CardSection>
        <Button
          onPress={() =>
            Linking.openURL(
                "lyft://ridetype?id=db8N2laMWUdp&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&destination[latitude]=37.7763592&destination[longitude]=-122.4242038"
              // `https://m.uber.com/?action=setPickup&client_id=R4Z0unqZkY6s47MwU3eRB1AE0tHjJWSG&pickup=my_location&dropoff[formatted_address]=4827%20Northeast%2043rd%20Street%2C%20Seattle%2C%20WA%2C%20USA&dropoff[latitude]=47.659624&dropoff[longitude]=-122.275396`
            )
          }
        >
          Request Uber
        </Button>
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
