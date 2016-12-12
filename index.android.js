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
  DrawerLayoutAndroid
} from 'react-native';

import {NativeModules} from 'react-native';

export default class ReactTodo extends Component {
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
    
    var navigationView = (
      <View>
        <Text>Hello, navigationLayout</Text>
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
      
      <DrawerLayoutAndroid
        renderNavigationView={() => navigationView}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </DrawerLayoutAndroid>
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
});

AppRegistry.registerComponent('ReactTodo', () => ReactTodo);
