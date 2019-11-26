import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Alert,
  Modal,
  TouchableHighlight
} from 'react-native';

import MapView from 'react-native-map-clustering';
import { Marker } from 'react-native-maps';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import InportForm from './form2';

export default class MapScreen extends Component {

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  //onRegionChange tracks map position as the user scrolls and zooms
  onRegionChange(region) {
    this.setState({ region });
  }

  constructor(props) {
    super(props);
    this.state = { isLoading: true,
    modalVisible: false };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
      <MapView
        region={{
          latitude: 36.063,
          longitude: -94.1743,
          latitudeDelta: 0.012,
          longitudeDelta: 0.012
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

      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          presentationStyle="formSheet"
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              
              <InportForm/>

              <TouchableHighlight
              style={{paddingLeft: 10}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>

        <View 
          style={{
            position: 'absolute',
            bottom: '2.5%',
            right: '2.5%',
            alignSelf: 'flex-end'
          }}
        >
          <Button
          type="clear" 
          icon={
            <Icon
              name= "plus-circle"
              size= {35}
              color= "#ffffff"
            />
            }
            style={{
              borderWidth:1,
              borderColor:'rgba(0,0,0,0.2)',
              alignItems:'center',
              justifyContent:'center',
              width:50,
              height:50,
              backgroundColor:'#2f95dc',
              borderRadius:25,
            }}
            onPress = {() => this.setModalVisible(!this.state.modalVisible)}/>
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
