'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
  AppRegistry,
  CameraRoll,
  Image,
  Slider,
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableOpacity
} = ReactNative;

var Geolocation = require('Geolocation')

var App = React.createClass({
  render() {
    return (
      <View>
        <Text onPress = {this.vibration} style = {styles.btn} > </Text>
      </View>
    )
  },
  vibration() {
    Geolocation.getCurrentPosition(function(data){
      alert(JSON.stringify(data));
    }, function() {
      alert('get current postion');
    })
  }
});

var styles = StyleSheet.create({
  btn: {
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    height: 35,
    backgroundColor: '#3bc1ff',
    color: '#fff',
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign:'center'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => App);
