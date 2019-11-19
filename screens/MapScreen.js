import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button
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
          latitude: 52.5,  
          longitude: 19.2,  
          //Delta represents zoom
          latitudeDelta: 8.5,  
          longitudeDelta: 8.5  
        }}  
        style={{ 
          width: 400, height: 800,
          flex: 1
        }}  
        showsUserLocation={true}
        provider={"google"}
      > 
       {/* Default markers already put in place upon launch */ }
        <Marker coordinate={{ latitude: 52.0, longitude: 18.2 }} />  
        <Marker coordinate={{ latitude: 52.4, longitude: 18.7 }} />  
        <Marker coordinate={{ latitude: 52.1, longitude: 18.4 }} />  
        <Marker coordinate={{ latitude: 52.6, longitude: 18.3 }} />  
        <Marker coordinate={{ latitude: 51.6, longitude: 18.0 }} />  
        <Marker coordinate={{ latitude: 53.1, longitude: 18.8 }} />  
        <Marker coordinate={{ latitude: 52.9, longitude: 19.4 }} />  
        <Marker coordinate={{ latitude: 52.2, longitude: 21 }} />  
      </MapView>
      {/* Sibling View for button */}
      <View 
        style={{
          position: 'absolute',
          top: '50%',
          alignSelf: 'flex-end'
        }}
      >
        <Button title="+"/>
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
