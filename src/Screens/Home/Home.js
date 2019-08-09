import React from "react";
import { Button } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log("navigate home....", navigate);

    return (
      <Button
        title="Go to Tahir's Chat screen"
        onPress={() => navigate("Chat", { name: "Chat " })}
      />
    );
  }
}

export default HomeScreen;
