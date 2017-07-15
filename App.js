
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  View,
  TextInput, } from 'react-native';


var Search = React.createClass({
  render() {
    return (
      <View style = {[styles.flex, styles.flexDirection]}>
        <View style = {styles.flex}>
          <TextInput style = {styles.input} returnKeyType = "search"/>
        </View>
        <View style = {styles.btn}>
          <Text style = {styles.search}>Search</Text>
        </View>
      </View>
    )
  }
})

var App = React.createClass({
  render() {
      return (
        <View style = {[styles.flex,styles.topStatus]}>
          <Search> </Search>
        </View>
      )
  }
});

var styles = StyleSheet.create({
  flex:{
    flex:1
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
  btn:{
    width:55,
    marginLeft: -5,
    marginRight: 5,
    backgroundColor: '#23BEFF',
    height: 45,
    justifyContent:'center',
    alignItems: "center"
  },
  search: {
    color: '#fff',
    fontSize:15,
    fontWeight:'bold'
  }
});

AppRegistry.registerComponent('AwesomeProject',() => App)
