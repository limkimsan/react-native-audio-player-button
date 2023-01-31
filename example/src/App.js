import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import AudioPlayerButton from 'react-native-audio-player-button';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [playingUuid, setPlayingUuid] = React.useState(null);
  
  return (
    <View style={styles.container}>
      <FeatherIcon name="search" size={20} color='black' style={{marginTop: 20, display: 'none'}} />
      <IonIcon name="search" size={20} color='black' style={{marginTop: 20, display: 'none'}} />
      <AudioPlayerButton
        audio={require('../assets/audios/hc_1_kh.mp3')}
        itemUuid='abcdef'
        hasShadow={true}
        iconSize={30}
        iconPrimaryColor="red"
        iconSecondaryColor='blue'
        isSpeakerIcon={true}
        playingUuid={playingUuid}
        updatePlayingUuid={(uuid) => setPlayingUuid(uuid)}
      />
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
