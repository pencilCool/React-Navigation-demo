
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  AppRegistry,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';



var App = React.createClass({

  show(text) {
    alert(text);
  },
  render() {
      return (
        <View style = {[styles.flex]}>
          <View>

          <TouchableHighlight onPress = {this.show.bind(this, 'react-native-demo')}
          underlayColor = "#e1f6ff">
            <Text style = {styles.item}> React Native demo </Text>
          </TouchableHighlight>


          <TouchableHighlight onPress = {this.show.bind(this, 'pencilCool')}
          underlayColor = "#11f6ff">
            <Text style = {styles.item}> React Native demo </Text>
          </TouchableHighlight>

          <TouchableOpacity onPress = {this.show.bind(this,"test1")}>
            <Text style = {styles.item}> test 1</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {this.show.bind(this,"test1")}>
            <View style = {styles.btn}>
              <Text style = {{fontSize:25, color :'#fff'}}> test2 </Text>
            </View>

          </TouchableOpacity>

          </View>
        </View>
      )
  }
});









var styles = StyleSheet.create({
  flex:{
    flex:1,
    marginTop:25,
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
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#23BEFF',
    height:100,
    width:100,
    justifyContent:'center',
    alignItems: "center",
    borderRadius: 50,
  },
  search: {
    color: '#fff',
    fontSize:15,
    fontWeight:'bold'
  }
});

AppRegistry.registerComponent('AwesomeProject',() => App)
