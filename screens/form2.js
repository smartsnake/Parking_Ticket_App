import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator
} from "react-native";

import { Button } from "react-native-elements";

import t from "tcomb-form-native";

const Form = t.form.Form;

var options = {
  fields: {
    date: {
      mode: "date" // display the Date field as a DatePickerAndroid
    },
    time: {
      mode: "time"
    }
  }
};

const pointForm = t.struct({
  latitude: t.Number,
  longitude: t.Number,
  date: t.Date,
  time: t.Date
});

export default class InportForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  render() {
    return (
      // <form name="myForm" action="" onsubmit="" method="post">
      // latitude: <input type="text" name="latitude" value="latitude"><br>
      // longitude: <input type="text" name="longitude" value="longitude"><br>
      // date: <input type="date" name="date" value="date"><br>
      // time: <input type="time" name="time" value="time"><br>
      // <input type="submit" value="Submit">
      // </form>

      <View style={{ paddingTop: 20 }}>
        <Form type={pointForm} options={options} />
        <Button
          title="Submit"
          type="solid"
          onPress={() => {
            fetch("http://maincomputer.myvnc.com:8081/point/", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              //lat currently does not work, is posting 0.0 to server
              //lon is hard coded as I can't type negative numbers in form
              //time is just set at 1 for testing, will work on converting to epoch
              //once I can figure out how to actually get data from form
              //testing point: 36.061141, -94.179373
              body: JSON.stringify({
                lat: pointForm.latitude,
                lon: -94.179311,
                time: 1
              })
            });
          }}
        />
      </View>
    );
  }
}
