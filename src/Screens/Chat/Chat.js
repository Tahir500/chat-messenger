import React, { Component } from "react";
import { Button } from "react-native";
class ChatScreen extends Component {
  static navigationOptions = {
    title: "Chat Screen"
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log("navigate....", navigate);
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate("Home", { name: "Tahir Home" })}
      />
    );
  }
}
export default ChatScreen;
