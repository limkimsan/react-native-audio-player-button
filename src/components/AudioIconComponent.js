import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather';
import IonIcon from 'react-native-vector-icons/Ionicons';

import color from '../constants/color_constant';
import {iconSize} from '../constants/component_constant';

const iconSet = {
  'ion_icon': {
    play: 'volume-high-outline',
    pause: 'pause',
    mute: 'volume-mute-outline'
  },
  'feather': {
    play: 'play',
    pause: 'pause',
    mute: 'play'
  }
}

const AudioIconComponent = (props) => {
  const getIcon = () => {
    // const icon = props.isSpeakerIcon ? iconSet['ion_icon'] : iconSet['feather'];

    const icon = props.customIconSet ? props.customIconSet : props.isSpeakerIcon ? iconSet['ion_icon'] : iconSet['feather'];

    if (!props.audio)
      return icon.mute;

    return props.isPlaying ? icon.pause : icon.play;
  }

  const primaryColor = props.iconPrimaryColor || color.black
  const secondaryColor = props.iconSecondaryColor || color.gray
  const getIconColor = () => {
    return props.isPlaying ? secondaryColor : primaryColor;
  }

  const renderIcon = () => {
    if (props.customIcon) return props.customIcon

    return props.isSpeakerIcon ? <IonIcon/> : <FeatherIcon/>
  }

  {/* CloneElement is used so we can pass different type of icon and still using the same configuration */}
  return (
    React.cloneElement(renderIcon(), {
      name: getIcon(),
      size: props.iconSize || iconSize, color: !!props.audio ? getIconColor() : color.muted,
      style: [props.iconStyle, { marginLeft: (props.isPlaying  && !props.isSpeakerIcon) ? -2 : 0 }]
    })
  )
}

export default AudioIconComponent;

{/*
<AudioIconComponent
  isPlaying={boolean}
  audio={audio's object}
  isSpeakerIcon={boolean}
  iconStyle={{}}
  iconSize={number}
  primaryColor={}
  secondaryColor={}
/>
*/}