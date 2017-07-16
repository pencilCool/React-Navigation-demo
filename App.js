
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
  Image,
} from 'react-native';

var Dimensions = require('Dimensions')
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height - 70;


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
        <TabBarIOS style = {styles.flex}>
          <TabBarIOS.Item title = "消息"
          //  icon = {require("http://vczero.github.io/ctrip/message.png")}
            onPress = {this.select.bind(this,'message')}
            selected = {this.state.tab === 'message'}>
            <ScrollView>
              <View style = {styles.message}>
                <Text style = {styles.message_title}>south mountain</Text>
                <Text>
                  【我给那些因为在近旁而极响的爆竹声惊醒，看见豆一般大的黄色的灯火光，
                  接着又听得毕毕剥剥的鞭炮，是四叔家正在“祝福”了；知道已是五更将近时候。
                  我在蒙胧中，又隐约听到远处的爆竹声联绵不断，似乎合成一天音响的浓云，
                  夹着团团飞舞的雪花，拥抱了全市镇。我在这繁响的拥抱中，也懒散而且舒适，
                  从白天以至初夜的疑虑，全给祝福的空气一扫而空了，只觉得天地圣众歆享了牲醴和香烟，
                  都醉醺醺的在空中蹒跚，豫备给鲁镇的人们以无限的幸福。】
                </Text>
              </View>
            </ScrollView>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = "联系人"
            // icon = {require("http://vczero.github.io/ctrip/phone.png")}
            onPress = {this.select.bind(this,'phonelist')}
            selected = {this.state.tab === 'phonelist'}>
            <ScrollView>
              <Text style = {styles.list}>
                <Text>tang san zang </Text>
                <Text>1845877845</Text>
              </Text>
              <Text style = {styles.list}>
                <Text>sun wu kong </Text>
                <Text>7894561235</Text>
              </Text>
              <Text style = {styles.list}>
                <Text>sha seng  </Text>
                <Text>7894541235</Text>
              </Text>
            </ScrollView>
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title = "动态"
            // icon = {require("http://vczero.github.io/ctrip/star.png")}
            onPress = {this.select.bind(this,'star')}
            selected = {this.state.tab === 'star' }>
            <ScrollView style = {styles.flex}>
              <Image style = {{width:width, height: height}}
                source = {{uri:'http://vczero.github.io/ctrip/star.png'}}/>
            </ScrollView>
          </TabBarIOS.Item>
        </TabBarIOS>
      )
  }
});


var styles = StyleSheet.create({
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
