import React, { Component, PropTypes } from 'react';
import { View, Text, ListView } from 'react-native';

import TabListItem from "./TabListItem.js"

export default class TabView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource( {rowHasChanged: (r1, r2) => r1 !== r2} );
    this.state = {
      dataSource: ds.cloneWithRows([
        "Java", "Kotlin", "Scala", "Groovy",
        "C", "C++",
        "Swift", "Object-C",
        "JavaScript", "Python", "Lua",
        "PHP", "Go", "Node.js", "Ruby",
        "----------------------------",
        "Java", "Kotlin", "Scala", "Groovy",
        "C", "C++",
        "Swift", "Object-C",
        "JavaScript", "Python", "Lua",
        "PHP", "Go", "Node.js", "Ruby"
      ]),
    };  
  }

  render() {
    var listItem = ((rowData) =>
      <TabListItem 
        name={rowData}
        dateTime="- DataTime" 
        description="- Description"/>
    );

    return (
      <ListView
        style={{marginTop: 4}}
        dataSource={this.state.dataSource}
        renderRow={listItem}/>
    );
  }
}
