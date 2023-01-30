import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AudioPlayerButton from 'react-native-audio-player-button';

export default function App() {
  return (
    <View style={styles.container}>
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
