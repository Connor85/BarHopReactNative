import React, { Component } from "react";
import { ScrollView } from "react-native";
import axios from "axios";
import BarDetails from "./BarDetails";

const config = {
  headers: {
    Authorization:
      "htx0mJlJSr5cMCeV14i8G4Zg81Gl-fxCd2UibV5BSMt1PHpoDJKEjR49MXhQc2cAVNBVpGu6A-ApUkuHTUSfDWYxzbRR1hByDdGjnCeBnGYbIIiG7awrCLVSMeHHW3Yx"
  },
  params: {
    term: "600 1st Ave, Seattle, WA",
    location: "bar",
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
    return this.state.bars.businesses.map(bar => (
      <BarDetails key={bar.id} bar={bar} />
    ));
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
