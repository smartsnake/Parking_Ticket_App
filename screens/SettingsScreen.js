import React, {Component} from 'react';

import {
  View,
  Text,
  Switch,
  StyleSheet,
} from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import { Button } from 'react-native-elements';
import { MapScreen } from './MapScreen'

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
    };
  }

  toggleSwitch = (value) => {
    this.setState({switchValue: value})
    if (value == true) {
      MapScreen.setState({
        mapType: "satellite"
      })
    } else {
      MapScreen.setState({
        mapType: "standard"
      })
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Settings Screen</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={this.toggleSwitch}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         alignItems: 'center',  
         //justifyContent: 'center',  
     },  
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
        color: '#344953'  
    }  
})  

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

