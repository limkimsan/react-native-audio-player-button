import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AudioPlayerButton from 'react-native-audio-player-button';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>

      <FeatherIcon name="search" size={20} color='black' style={{marginTop: 20, display: 'none'}} />
      <IonIcon name="search" size={20} color='black' style={{marginTop: 20, display: 'none'}} />
      <AudioPlayerButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
