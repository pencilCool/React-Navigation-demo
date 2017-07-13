

import React from 'react';
import {
  AppRegistry,
  Text,View,Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {TabNavigator} from "react-navigation"

class HomeScreen extends React.Component {
    static navigationOptions = {
    title: 'Welcome in navation bar ',
  };
  render() {
    const { navigate } = this.props.navigation;

    return(
        <View>
        <Text>Hello, Chat APP!</Text>
        <Button onPress = {() => navigate('Chats',{ user: 'Lucy -pencilCool' })}
         title = "Chat with Lucy"
        />
        </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}




class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chats: { screen: ChatScreen },
});



AppRegistry.registerComponent('AwesomeProject', ()  => MainScreenNavigator);
