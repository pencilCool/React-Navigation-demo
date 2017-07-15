import React, { Component } from 'react';

import {StyleSheet,View, Text } from 'react-native';


class List extends Component{
    render() {
      return (
        <View style = {styles.list_item}>
          <Text style  = {styles.list_item_font}>
          { this.props.title}
          </Text>
        </View>
      );
    }
};

var styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  list_item: {
    height:40,
    marginLeft:50,
    marginRight: 40,
    borderBottomWidth:4,
    borderBottomColor: '#dddd',
    justifyContent:'center'
  },
  list_item_font: {
    fontSize:18,
  }
});
module.exports = List
