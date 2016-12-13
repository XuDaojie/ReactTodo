import React, { Component, PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import CheckBox from 'react-native-check-box';

export default class TabListItem extends Component {
  
  static propTypes = {
    name: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  render() {
    return (
      <View>
        <View style={{flexDirection: "row"}}>
          <View style={{width: 4, height: 60, backgroundColor: "red"}} />
          <View style={{justifyContent: "center", marginLeft: 8}}>
            <CheckBox
              checkedImage={<Image source={require('../img/icon/checkbox-marked.png')} />}
              unCheckedImage={<Image source={require('../img/icon/checkbox-blank-outline.png')} />}
              onClick={() => console.log("CheckBox onClick")}/>
          </View>
          <View style={{marginLeft: 8, justifyContent: "center"}}>
            <Text style={{fontSize: 14, fontWeight: "bold", textDecorationLine: "line-through"}}>{this.props.name}</Text>
            <Text style={{fontSize: 12, }}>{this.props.dateTime}</Text>
            <Text style={{fontSize: 12, }}>{this.props.description}</Text>
          </View>
        </View>
        <View style={{height: 1, marginTop: 4, marginBottom: 2, backgroundColor: "lightgray"}} />
      </View>
    );
  }
}
