


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
} from 'react-native';

var App = React.createClass({
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.item} onPress = {this.tip}>
          showActionSheetWithOptions
        </Text>
        <Text style = {styles.item} onPress = {this.share}>
          showShareActionSheetWithOptions
        </Text>
      </View>
    );
  },

  tip() {
    ActionSheetIOS.showActionSheetWithOptions({
      options:[
        'make a call ',
        'send email',
        'send message',
        'cancel'
      ],
      cancelButtonIndex:3,
      destructiveButtonIndex: 0,
    },function(index){
      alert(index);
    });
  },

  share() {
      ActionSheetIOS.showShareActionSheetWithOptions({
        url:'https://code.facebook.com',
      },function(err){
        alert(err);
      },function(e){
        alert(e);
      });

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
