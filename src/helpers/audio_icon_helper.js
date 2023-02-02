import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {defaultAudioIconSet} from '../constants/icon_constant';

const audioIconHelper = (() => {
  return {
    getIcon,
    getIconName,
  }

  function getIcon(customIcon, isSpeakerIcon) {
    return customIcon ? customIcon : isSpeakerIcon ? <IonIcon/> : <FeatherIcon/>
  }

  function getIconName(customIconSet, isSpeakerIcon, audio, isPlaying) {
    const icon = customIconSet ? customIconSet : isSpeakerIcon ? defaultAudioIconSet['ion_icon'] : defaultAudioIconSet['feather'];
    if (!audio)
      return icon.mute;

    return isPlaying ? icon.pause : icon.play;
  }
})()

export default audioIconHelper