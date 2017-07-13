

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
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}




class RecentChatsScreen extends React.Component {
  render() {
    return (
<View>
      <Text>List of recent chats</Text>
            <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Jane' })}
        title="Chat with Jane"
      />
      </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  render() {

    return (
        <View>
          <Text>List of all contacts</Text>
          <Button   onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
            title="Chat with Lucy"/>
        </View>
    )
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});



AppRegistry.registerComponent('AwesomeProject', ()  => SimpleApp);
