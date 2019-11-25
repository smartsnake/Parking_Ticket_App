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
  DatePickerIOS
} from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

var options = {
  fields: {
    date: {
      mode: 'date' // display the Date field as a DatePickerAndroid
    },
    time:{
      mode: 'time'
    }
  }
};

const pointForm = t.struct({
  latitude: t.Number,
  longitude: t.Number,
  date: t.Date,
  time: t.Date
});

export default class InportForm extends Component {
  render() {
    return(
      // <form name="myForm" action="" onsubmit="" method="post">
      // latitude: <input type="text" name="latitude" value="latitude"><br>
      // longitude: <input type="text" name="longitude" value="longitude"><br>
      // date: <input type="date" name="date" value="date"><br>
      // time: <input type="time" name="time" value="time"><br>
      // <input type="submit" value="Submit">
      // </form>   
      <View>
        <Form type={pointForm} options={options} />
        
      </View>
    );
  }
}