
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
  Image,
} from 'react-native';

var imgs = [
  'https://koenig-media.raywenderlich.com/uploads/2017/06/basic-annoyed-1-1.png',
  'https://koenig-media.raywenderlich.com/uploads/2017/04/starter.png',
  'https://koenig-media.raywenderlich.com/uploads/2017/05/zoom0-1.png',
];

var MyImage = React.createClass({
  getInitialState(){
    var imgs = this.props.imgs;
    return {
      imgs:imgs,
      count:0
    };
  },

  goNext() {
    var count = this.state.count;
    count ++ ;
    if(count < imgs.length) {
      this.setState({
          count: count
      })
    }
  },
  goPreView() {
    var count = this.state.count;
    count -- ;
    if (count >= 0) {
      this.setState({
        count: count
      });
    }
  },

  render() {
    return (
      <View style = {[styles.flex]}>
        <View style = {styles.image}>
          <Image style = {styles.img}
            source= {{url: this.state.imgs[this.state.count]}}
            resizeMode = "contain"
            />
        </View>
        <View style = {styles.btns}>
          <TouchableOpacity onPress = {this.goPreView}>
            <View style = {styles.btn}>
              <Text>preview page </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {this.goNext}>
            <View style = {styles.btn}>
              <Text>next page </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    )
  }

})
var App = React.createClass({

  show(text) {
    alert(text);
  },
  render() {
      return (
        <View style = {[styles.flex, {marginTop:40}]}>
          <MyImage imgs = {imgs}></MyImage>
        </View>
      )
  }
});


var styles = StyleSheet.create({
  flex:{
    flex:1,
    alignItems:'center'
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
