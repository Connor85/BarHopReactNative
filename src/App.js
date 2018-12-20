import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button } from "./common";
import LoginForm from "./components/LoginForm";
import Search from "./components/Search";

class App extends Component {
  state = { loggedIn: false };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCMpdfoaJUBvL1u5izLpIleG7KPToRtWzc",
      authDomain: "barhop-9623a.firebaseapp.com",
      databaseURL: "https://barhop-9623a.firebaseio.com",
      projectId: "barhop-9623a",
      storageBucket: "barhop-9623a.appspot.com",
      messagingSenderId: "963492737971"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderSearch() {
    if (this.state.loggedIn === true) {
      return <Search />;
    } else {
      return <LoginForm />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Bar Hop" />
        {this.renderSearch()}
      </View>
    );
  }
}

export default App;
