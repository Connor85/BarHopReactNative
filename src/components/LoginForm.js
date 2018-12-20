import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";
import { Button, CardSection, Card, Input, Spinner } from "./../common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false, signUp: false };

  onLoginPress() {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this));
  }

  onSignUpPress() {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.onSuccess.bind(this))
      .catch(this.onFail.bind(this));
  }

  onFail() {
    this.setState({ error: "Authentication Fails", loading: false });
  }

  onSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
  }

  renderLoginButton() {
    if (this.state.loading === true) {
      return <Spinner size="small" />;
    } else {
      return <Button onPress={this.onLoginPress.bind(this)}>Login</Button>;
    }
  }

  renderSignUpButton() {
    if (this.state.loading === true) {
      return <Spinner size="small" />;
    } else {
      return <Button onPress={this.onSignUpPress.bind(this)}>Sign Up</Button>;
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password123"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderLoginButton()}</CardSection>
        <CardSection>{this.renderSignUpButton()}</CardSection>
      </Card>
    );
  }
}

styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
