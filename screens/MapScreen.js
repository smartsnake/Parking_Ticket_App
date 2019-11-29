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
} from "react-native";

import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import t from "tcomb-form-native";
import { objectMethod } from "@babel/types";

//import InportForm from "./form2";

const Form = t.form.Form;

var options = {
  fields: {
    datetime: {
      mode: "datetime"
    }
  }
};

const pointForm = t.struct({
  latitude: t.String,
  longitude: t.String,
  "date time": t.Date
});

export default class MapScreen extends Component {
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  //onRegionChange tracks map position as the user scrolls and zooms
  onRegionChange(region) {
    this.setState({ region });
  }

  constructor(props) {
    super(props);
    this.state = { isLoading: true, modalVisible: false, uniqueValue: 1 };
  }

  forceRemount() {
    var uv = this.state.uniqueValue;
    this.setState({ uniqueValue: uv + 1 });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    return fetch("http://maincomputer.myvnc.com:8081/points/")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  fetchMarkers() {
    return fetch("http://maincomputer.myvnc.com:8081/points/")
      .then(response => response.json())
      .then(responseJson => {
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
    const { navigate } = this.props.navigation;
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
                onPress={() => {
                  var date = new Date(obj.time * 1000);
                  alert(
                    "Parking Ticket Information\nLocation: (" +
                      obj.lat +
                      ", " +
                      obj.lon +
                      ")\nDate and Time: " +
                      date
                  );
                }}
              />
            );
          })}
        </MapView>

        <View style={{ marginTop: 22 }}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={{ marginTop: 22 }}>
              <View>
                <View style={{ paddingTop: 20 }}>
                  <Form type={pointForm} options={options} ref="form" />
                  <Button
                    title="Submit"
                    type="solid"
                    onPress={() => {
                      console.log(
                        JSON.stringify({
                          lat: parseFloat(
                            this.refs.form.getComponent("latitude").getValue(),
                            10
                          ),
                          lon: parseFloat(
                            this.refs.form.getComponent("longitude").getValue(),
                            10
                          ),
                          time:
                            Date.parse(
                              this.refs.form
                                .getComponent("date time")
                                .getValue()
                            ) / 1000
                        })
                      );

                      console.log(
                        "date and time: " +
                          this.refs.form.getComponent("date time").getValue()
                      );

                      console.log(
                        "unix time: " +
                          Date.parse(
                            this.refs.form.getComponent("date time").getValue()
                          ) /
                            1000
                      );

                      fetch("http://maincomputer.myvnc.com:8081/point/", {
                        method: "POST",
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          lat: parseFloat(
                            this.refs.form.getComponent("latitude").getValue(),
                            10
                          ),
                          lon: parseFloat(
                            this.refs.form.getComponent("longitude").getValue(),
                            10
                          ),
                          time:
                            Date.parse(
                              this.refs.form
                                .getComponent("date time")
                                .getValue()
                            ) / 1000
                        })
                      }).then(response =>
                        console.log("Server Responce Code: " + response.status)
                      );
                      this.setModalVisible(!this.state.modalVisible); //on submission of form go back to map
                      return (
                        <Marker
                          coordinate={{
                            latitude: parseFloat(
                              this.refs.form
                                .getComponent("latitude")
                                .getValue(),
                              10
                            ),
                            longitude: parseFloat(
                              this.refs.form
                                .getComponent("longitude")
                                .getValue(),
                              10
                            )
                          }}
                          onPress={() => {
                            alert(
                              "Parking Ticket Information\nLocation: (" +
                                parseFloat(
                                  this.refs.form
                                    .getComponent("latitude")
                                    .getValue(),
                                  10
                                ) +
                                ", " +
                                parseFloat(
                                  this.refs.form
                                    .getComponent("longitude")
                                    .getValue(),
                                  10
                                ) +
                                ")\nDate and Time: " +
                                this.refs.form
                                  .getComponent("date time")
                                  .getValue()
                            );
                          }}
                        />
                      );
                    }}
                  />
                </View>

                <TouchableHighlight
                  style={{ paddingLeft: 10 }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <Text>Cancel</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: "2.5%",
            right: "2.5%",
            alignSelf: "flex-end"
          }}
        >
          <Button
            type="clear"
            icon={<Icon name="plus-circle" size={35} color="#ffffff" />}
            style={{
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              alignItems: "center",
              justifyContent: "center",
              width: 50,
              height: 50,
              backgroundColor: "#2f95dc",
              borderRadius: 25
            }}
            onPress={() => this.setModalVisible(true)}
          />
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
