import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
  Alert,
  Modal
} from 'react-native';

import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class MapScreen extends Component {

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  //onRegionChange tracks map position as the user scrolls and zooms
  onRegionChange(region) {
    this.setState({ region });
  }

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch("http://maincomputer.myvnc.com:8081/points/")
      .then(response => response.json())
      .then(responseJson => {
        //alert(responseJson); //test to show I am fetching the right information, still don't know how to get lat, long from responseJson to put into markers
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
      <MapView
        region={{
          latitude: 36.05,
          longitude: -94.172,
          latitudeDelta: 0.20,
          longitudeDelta: 0.20
        }}
        style={{ width: 400, height: 800 }}
        showsUserLocation={true}
        provider={"google"}
      >
        {this.state.dataSource.map(obj => {
          return (
            <Marker
              key={obj}
              coordinate={{ latitude: obj.lat, longitude: obj.lon }}
            />
          );
        })}
      </MapView>
      <View 
        style={{
          position: 'absolute',
          top: '2.5%',
          alignSelf: 'flex-end'
        }}
      >
        <Button title="Button" color="#f194ff" backgroundColor="#0000FF" 
                onPress={()=> {
                  this.setModalVisible(!this.state.modalVisible);
                }}
        />
        <Modal 
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <View
            style={{
              top: '5%',
              alignSelf: 'flex-end'
            }}>
            <Text>Hello World!</Text>
            <Button 
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              title="Hide Modal"
            />
          </View>
        </Modal>
          
      
      </View>
      </View>
    );
  }
}


MapScreen.navigationOptions = {
  title: "Maps"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
