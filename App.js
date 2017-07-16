
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  TabBarIOS,
  Alert,
  WebView,
  Image,
} from 'react-native';

var Dimensions = require('Dimensions')
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;


var App = React.createClass({
  getInitialState() {
    return {
      tab:'message'
    };
  },
  select(tabName) {
    this.setState({
      tab:tabName
    })
  },
  render() {
      return (
        <View style = {styles.container}>
          <WebView
            injectedJavaScript = "alert('welcome')"
            bounces = {false}
            source={{uri: 'https://github.com/facebook/react-native'}}
            style = {{width: width, height,height}}>

          </WebView>
        </View>
      )
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flex:{
    flex:1,
  },
  message: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },

  message_title: {
    fontSize: 8,
    color : '#18b5ff',
    marginBottom: 5,
  },
  list: {
    height: 30,
    fontSize:15,
    marginLeft: 10,
    marginTop:10,
  },
  flexDirection: {
    flexDirection: 'row'
  },
  topStatus:{
    marginTop:25,
  },
  input: {
    height:45,
    borderWidth:1,
    marginLeft:5,
    paddingLeft:5,
    borderColor:'#ccc',
    borderRadius: 4
  },
  btns: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
  },

  btn:{
    width:60,
    height:30,
    borderColor :"#0089ff",
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    marginRight:20,
  },
  search: {
    color: '#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  image:{
    borderWidth:1,
    width:300,
    height:200,
    borderRadius: 5,
    borderColor:'#ccc',
    justifyContent:'center',
    alignItems:'center',
  },
  img: {
    height:150,
    width:200,
  }

});

AppRegistry.registerComponent('AwesomeProject',() => App)
