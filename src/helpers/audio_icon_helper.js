import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {defaultAudioIconSet} from '../constants/icon_constant';

const audioIconHelper = (() => {
  return {
    getIcon,
    getIconName,
    getIconMargin,
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

  function getIconMargin(isPlaying, isSpeakerIcon) {
    if (isPlaying && !isSpeakerIcon) return { marginLeft: -1 }
    return { marginLeft: 0 }
  }
})()

export default audioIconHelper