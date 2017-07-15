

import React, { Component } from 'react';
import { ScrollView,Text, View,StyleSheet,Slider,AppRegistry,NavigatorIOS } from 'react-native';

var List = React.createClass({

  render() {
    // const { navigate } = this.props.navigation;
    return(
      <ScrollView style = {styles.flex}>
        <Text style = {styles.list_item} onPress = {this.goTo} > pencilCool1 </Text>
        <Text style = {styles.list_item} onPress = {this.goTo} > pencilCool2 </Text>
        <Text style = {styles.list_item} onPress = {this.goTo} > pencilCool3 </Text>
      </ScrollView>
    )
  },

  goTo() {
    this.props.navigator.push({
        component: Detail,
        title: '游轮详情',
        rightButtonTitle: '购物',
        onRightButtonPress: function(){
          alert('进入我的购物车');
        }
    })
  }
});


var Detail = React.createClass({
  render(){
    return (
      <ScrollView>
        <Text> detail page </Text>
        <Text> few information </Text>
      </ScrollView>
    )
  }
})


export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: List,
          title: '游轮',
          passProps:{},

        }}
        style={{flex: 1}}
      />
    )
  }
}


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


AppRegistry.registerComponent('AwesomeProject', ()  => NavigatorIOSApp);
