


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
ActionSheetIOS,
PixelRatio,
} from 'react-native';

var App = React.createClass({
  render() {
    return (
      <View style = {styles.container}>
        <View style = {{borderWidth: 1,borderColor:'red',height:50,marginTop:100}}></View>
        <View style = {{borderWidth: 1/PixelRatio.get(),borderColor: 'blue',height:100}}></View>
      </View>

    );
  },
});


var styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:100,
  },
})


AppRegistry.registerComponent('AwesomeProject', () => App);
