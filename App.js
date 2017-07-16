


import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
View,
Image,
NavigatorIOS,
ScrollView,
AsyncStorage,
TouchableOpacity,
AlertIOS,
} from 'react-native';

var App = React.createClass({
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.item} onPress = {this.tip}>
          show dialog box
        </Text>
        <Text style = {styles.item} onPress = {this.input}>
          input diglog
        </Text>
      </View>
    );
  },

  tip() {
    AlertIOS.alert('warn','choose to study react-native ',[
      {
        text: 'cancel',
        onPress() {
          alert('you click the cancel button');
        }
      },
      {
        text:'confirm',
        onPress() {
          alert('you click the confirm button');
        }
      }
    ]);
  },

  input() {
    AlertIOS.prompt('warn','use react-native to create an app',[
      {
        text: 'cancel',
        onPress() {
          alert('you choose cancel button');
        }
      },
      {
        text:'confirm',
        onPress(e) {
          alert(e);
        }
      },
    ]);
  }

});


var styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:25,
  },
  item:{
    marginTop:10,
    marginLeft:5,
    marginRight: 5,
    height:30,
    borderWidth:1,
    padding:6,
    borderColor: '#ddd'
  }
})


AppRegistry.registerComponent('AwesomeProject', () => App);
