import React from "react";
import { Text } from "react-native";
import { Button, Card, CardSection, Input } from "./../common";

const Search = () => {
  return (
    <Card>
      <CardSection>
        <Text>Search For Bars Near You</Text>
        <Input placeholder="Search Here" />
        <Button>Search</Button>
      </CardSection>
    </Card>
  );
};

export default Search;
