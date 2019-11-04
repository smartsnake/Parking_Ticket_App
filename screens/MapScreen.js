import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

export default class MapScreen extends Component {
  
  
  onRegionChange(region) {
    this.setState({ region });
  }


  render() {
    
    return(
      <MapView  
        region={{  
          latitude: 52.5,  
          longitude: 19.2,  
          latitudeDelta: 8.5,  
          longitudeDelta: 8.5  
        }}  
        style={{ width: 400, height: 800 }}  
        showsUserLocation={true}
        provider={"google"}
      >  
        <Marker coordinate={{ latitude: 52.0, longitude: 18.2 }} />  
        <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />  
        <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />  
        <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />  
        <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />  
        <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />  
        <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />  
        <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />  
      </MapView>
    );
      // return (
      //   // <MapView
      //   //   region={{
      //   //     latitude: 37.78825,
      //   //     longitude: -122.4324,
      //   //     latitudeDelta: 0.0922,
      //   //     longitudeDelta: 0.0421,
      //   //   }}
      //   //   onRegionChange={this.onRegionChange}
      //   // />
      //   <MapView style={{flex: 1}}
      //   region={{latitude: 36.0694066,
      //           longitude: -94.1748312,
      //           latitudeDelta: 0.0922,
      //           longitudeDelta: 0.0421
      //         }}
      //   showsUserLocation={true}
      //   />
      // );
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
