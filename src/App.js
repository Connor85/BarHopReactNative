import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header } from "./common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCMpdfoaJUBvL1u5izLpIleG7KPToRtWzc",
      authDomain: "barhop-9623a.firebaseapp.com",
      databaseURL: "https://barhop-9623a.firebaseio.com",
      projectId: "barhop-9623a",
      storageBucket: "barhop-9623a.appspot.com",
      messagingSenderId: "963492737971"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Bar Hop" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
