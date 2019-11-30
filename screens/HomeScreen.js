import React, { Component } from "react";
import { Image, Text, View, Dimensions } from "react-native";

import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

export default class HomeScreen extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} loop={false}>
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
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
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
