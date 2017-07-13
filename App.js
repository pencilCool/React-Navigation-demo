

import React from 'react';
import {
  AppRegistry,
  Text,View,Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
    title: 'Welcome in navation bar ',
  };
  render() {
    const { navigate } = this.props.navigation;
    
    return(
        <View>
        <Text>Hello, CHAT APP!</Text>
        <Button onPress = {() => navigate('Chats')}
         title = "Chat with Lucy"    
        />
        </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chats: { screen: ChatScreen },
});

AppRegistry.registerComponent('AwesomeProject', ()  => SimpleApp);