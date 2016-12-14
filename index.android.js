/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator, // 和ProgressBar 什么区别?
  ListView,
  Image,
  DrawerLayoutAndroid,
  ViewPagerAndroid,
  ToolbarAndroid,
} from 'react-native';

import {NativeModules} from 'react-native';
import ActionButton from 'react-native-action-button';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import TabView from "./js/TabView.js"

export default class ReactTodo extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(["Java", "Kotlin", "JavaScript", "Swift", "HTML", "C", "C++", "Groovy", "Scala"])
    };
  }

  render() {
// ---- https://reactnative.cn/docs/0.39/drawerlayoutandroid.html#content
    // var navigationView = (
    //   <View style={{flex: 1, backgroundColor: '#fff'}}>
    //     <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
    //   </View>
    // );
    // return (
    //   <DrawerLayoutAndroid
    //     drawerWidth={300}
    //     drawerPosition={DrawerLayoutAndroid.positions.Right}
    //     renderNavigationView={() => navigationView}>
    //     <View style={{flex: 1, alignItems: 'center'}}>
    //       <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
    //       <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
    //     </View>
    //   </DrawerLayoutAndroid>
    // );
// -----
    
    // var navigationView = (
    //   <View>
    //     <Text>Hello, navigationLayout</Text>
    //   </View>
    // );

    var toolbarActions = [
      {title: "Hide completed", show: "never"},
      {title: "Sort by", show: "never"},
    ];

// <Image
//             source={require("./img/bg_img.jpg")}/>
    var navigationView = (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
      }}>
        <View style={{height: 160, backgroundColor: '#2196F3'}}>
          <View style={styles.avatar}/>
          <Text style={styles.account}>React Native</Text>
        </View>
        <View style={styles.divider}/>
        <Text style={{marginLeft: 10, marginBottom: 10, fontSize: 12}}>任务列表</Text>
        <Text style={styles.taskItem}>To Do</Text>
        <Text style={styles.taskItem}>To Do</Text>
        <Text style={styles.taskItem}>To Do</Text>
      </View>
    );
    
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      // </View>

      // <View>
      //   <TouchableHighlight
      //     onPress={function onPressIn() {
      //       NativeModules.SimpleToastAndroid.show('SimpleToastAndroid', NativeModules.SimpleToastAndroid.SHORT);
      //       // NativeModules.ToastAndroid.show("ToastAndroid", NativeModules.ToastAndroid.SHORT);
      //     }}>
      //     <Text style={styles.welcome}>Hello</Text>
      //   </TouchableHighlight>
      // </View>

      // <View>
      //   <ActivityIndicator/>
      // </View>

      // <DrawerLayoutAndroid
      //   renderNavigationView={() => navigationView}>
      //   <View>
      //     <Text>Hello World!</Text>
      //   </View>
      // </DrawerLayoutAndroid>
      
      // <View style={{flex: 1, backgroundColor: "gray"}}>
      //   <Text style={{height:50, backgroundColor: "blue", textAlign: "center", textAlignVertical: "center", color: "white"}}>ViewPagerAndroid</Text>
      //   <ViewPagerAndroid
      //     initialPage={0}
      //     style={{flex: 1, backgroundColor: "red"}}>
      //     <View style={{backgroundColor: "yellow", justifyContent: "center", alignItems: "center", }}>
      //       <Text textAlign="center">First page</Text>
      //     </View>
      //     <View style={{backgroundColor: "green", justifyContent: "center", alignItems: "center", }}>
      //       <Text alignItems="center">Second page</Text>
      //     </View>
      //   </ViewPagerAndroid>
      // </View>

      // <View style={{flex: 1}}>
      //   <ListView
      //     dataSource={this.state.dataSource}
      //     renderRow={(rowData) => <Text style={{height: 100, color: "red"}}>{rowData}</Text>}>
      //   </ListView>
      //   <ActionButton
      //     buttonColor="rgba(231,76,60,1)"
      //     onPress={() => { console.log("hi")}}/>
      // </View>

      // <ScrollableTabView
      //   style={{marginTop: 20, }}
      //   renderTabBar={() => <DefaultTabBar />}>
      //   <Text tabLabel='Tab #1'>My</Text>
      //   <Text tabLabel='Tab #2'>favorite</Text>
      //   <Text tabLabel='Tab #3'>project</Text>
      // </ScrollableTabView>

      // <TabView>
      // </TabView>

      <DrawerLayoutAndroid
        ref={ (drawer) => this.drawer = drawer }
        renderNavigationView={ () => navigationView }
        statusBarBackgroundColor="#1976D2"
        drawerWidth={300}>
        <ToolbarAndroid
            style={{height: 56, backgroundColor: "#2196F3"}}
            title="ToDo"
            titleColor="white"
            actions={toolbarActions}
            overflowIcon={require("./img/icon/ic_dots_vertical_white.png")}
            navIcon={require("./img/icon/ic_menu_white.png")}
            onIconClicked={ () => this.drawer.openDrawer() }/>
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar backgroundColor="#2196F3" style={{height: 30}}/>}
          tabBarActiveTextColor="white"
          tabBarInactiveTextColor="#BBDEFB"
          tabBarUnderlineStyle={{height: 2, backgroundColor: "#FF4081", borderColor: "transparent"}}
          tabBarTextStyle={{fontSize: 14}}>
          <TabView tabLabel="TODO1"/>
          <TabView tabLabel="TODO2"/>
          <TabView tabLabel="TODO3"/>
        </ScrollableTabView>
      </DrawerLayoutAndroid>

      // <View style={{
      //   flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'flex-start',
      //   alignItems: 'stretch'
      // }}>
      //   <View style={{height: 50, backgroundColor: 'powderblue'}} />
      //   <View style={{height: 50, backgroundColor: 'skyblue'}} />
      //   <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      // </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginTop: 10,
    marginBottom: 10,
  },
  taskItem: {
    marginLeft: 10, 
    fontSize: 14,
    color: "black",
    paddingTop: 10,
    paddingBottom: 10,
  },
  avatar: {
    height: 60, 
    width: 60, 
    marginTop: 40,
    marginLeft: 10,
    backgroundColor: '#1976D2', 
    borderWidth: 1, 
    borderRadius: 30,
    borderColor: "white",
  },
  account: {
    marginTop: 30,
    marginLeft: 10,
    color: "white",
    fontSize: 14
  },
});

AppRegistry.registerComponent('ReactTodo', () => ReactTodo);
