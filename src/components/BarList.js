import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import axios from "axios";
import BarDetails from "./BarDetails";

const config = {
  headers: {
    Authorization:
      "Bearer -nwISs2S4HyFHv_H-F8y7bsbSMwUSCuB7fyLQ9hkfwFWVfB8unrDw4p-d4Rdz1CIUewI2J1_bohzbQzkZG6_kuvnDey8ZWftvfEUQBqsw7uxZMI7EexVHxMl8sYOXHYx"
  },
  params: {
    term: "bar",
    location: "98105",
    sort_by: "distance"
  }
};

class BarList extends Component {
  state = {
    bars: {}
  };

  constructor(props) {
    super(props);
    this.renderBars = this.renderBars.bind(this);
  }

  componentWillMount() {
    axios
      .get("https://api.yelp.com/v3/businesses/search", config)
      .then(response => this.setState({ bars: response.data }));
  }

  renderBars = () => {
    console.log(this.state.bars.businesses);
    if (this.state.bars.businesses) {
      return this.state.bars.businesses.map(bar => (
        <BarDetails key={bar.id} bar={bar} />
      ));
    }
  };

  render() {
    return (
      <ScrollView>
        <View>{this.renderBars()}</View>
      </ScrollView>
    );
  }
}

export default BarList;
