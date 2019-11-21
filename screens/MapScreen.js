import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  Alert
} from 'react-native';

import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

export default class MapScreen extends Component {


  //onRegionChange tracks map position as the user scrolls and zooms
  onRegionChange(region) {
    this.setState({ region });
  }

  //This generates the UI itself, creating a MapView with a region centered 
  //around the latitude and longitude coordinates
  render() {
    return(
    <View style={{ flex: 1 }}>
      <MapView  
        //Initial Region, thinking about changing to initialRegion
        region={{  
          latitude: 36.0654,  
          longitude: -94.1723,  
          //Delta represents zoom
          latitudeDelta: 0.01,  
          longitudeDelta: 0.01  
        }}  
        style={{ 
          width: 400, height: 800,
          flex: 1
        }}  
        showsUserLocation={true} //need to add key in info.plist (idk what this is)
        followsUserLocation={true}
        provider={"google"}
        mapType="standard" //other values: hybrid, terrain (android only), standard, mutedStandard(ios 11+ only)
      > 
       {/* Default markers already put in place upon launch */ }
        <Marker coordinate={{ latitude: 36.0822, longitude: -94.2 }} /> 
        <Marker coordinate={{ latitude: 36.0654, longitude: -94.1723}} /> 
       {/* Test for clickable markers */}
       <MapView.Marker 
        coordinate={{ latitude:  36.07, longitude: -94.1655 }}
       />
      </MapView>
      {/* Sibling View for button */}
      <View 
        style={{
          position: 'absolute',
          top: '2.5%',
          alignSelf: 'flex-end'
        }}
      >
        <Button title="Button" color="#f194ff" backgroundColor="#0000FF"/>
      </View>
    </View>
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
