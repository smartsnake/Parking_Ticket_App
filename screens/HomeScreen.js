import React, { Component } from "react";
import { Image, Text, View, Dimensions } from "react-native";

import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

export default class HomeScreen extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} loop={false}>
        <View style={styles.textSlide}>
          <Text style={styles.text}>
            Welcome to the UARK Parking Ticket App {"\n"} {"\n"}
            {"\n"}
            Use this app to make informed decisions when parking on campus
            {"\n"}
            {"\n"}
            {"\n"}
            The following images will {"\n"}give a brief overview {"\n"}of how
            to use this app to its fullest potential
          </Text>
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("./images/1.png")} />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require("./images/pleasework.png")}
          />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("./images/3.png")} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.image} source={require("./images/4.png")} />
        </View>
      </Swiper>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  textSlide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#163086"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: "white",
    fontSize: 20
  }
};
