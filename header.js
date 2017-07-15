
import React, { Component } from 'react';

import {StyleSheet,View, Text } from 'react-native';


class MyHeader extends Component{
    render() {
      return (
        <View style = {styles.flex}>
          <Text style = {styles.font}>
            <Text style = {styles.font_1}>网易</Text>
            <Text style = {styles.font_2}>新闻</Text>
            <Text> attitude </Text>
          </Text>
        </View>
      );
    }
};



var styles = StyleSheet.create({
  flex:{
    marginTop:25,
    height:50,
    borderBottomWidth: 3,
    borderBottomColor:  '#EF2D36',
    alignItems: 'center'
  },
  font: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center'
  },
  font_1: {
    color:'#cd1d1c'
  },
  font_2: {
    color:'#fff',
    backgroundColor: '#cd1d1c',
  }
});

// export default MyHeader
module.exports = MyHeader;
