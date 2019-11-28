import React from 'react';

import {
  View,
  Text,
  Switch
} from 'react-native';

import { ExpoConfigView } from '@expo/samples';
import { Button } from 'react-native-elements';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.


   */

  
  
  
  return (
    <View>
      <Text>Settings Screen</Text>
      <Switch
        value={true}
        onValueChange={() => value = !this.value}
      />
    </View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
