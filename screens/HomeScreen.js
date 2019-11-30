import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";

import { MonoText } from "../components/StyledText";
import MapScreen from "./MapScreen";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

export default class HomeScreen extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        //renderPagination={renderPagination}
        loop={false}
      >
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

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "grey" }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

//This is how styling is handled within React
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     top: '25%',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   welcomeText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//     top: '0%'
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
