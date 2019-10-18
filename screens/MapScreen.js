import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends Component<Props> {
  
  
  onRegionChange(region) {
    this.setState({ region });
  }


  render() {
      return (
        // <MapView
        //   region={{
        //     latitude: 37.78825,
        //     longitude: -122.4324,
        //     latitudeDelta: 0.0922,
        //     longitudeDelta: 0.0421,
        //   }}
        //   onRegionChange={this.onRegionChange}
        // />
        <MapView style={{flex: 1}}
        region={{latitude: 36.0694066,
                longitude: -94.1748312,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
        showsUserLocation={true}
        />
      );
    }
}

MapScreen.navigationOptions = {
  title: 'Maps',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
