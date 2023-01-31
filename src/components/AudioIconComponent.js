import React from 'react'

import color from '../constants/color_constant';
import {iconSize, primaryIconColor, secondaryIconColor} from '../constants/component_constant';
import audioIconHelper from '../helpers/audio_icon_helper';

const AudioIconComponent = (props) => {
  const getIconColor = () => {
    const primaryColor = props.iconPrimaryColor || primaryIconColor
    const secondaryColor = props.iconSecondaryColor || secondaryIconColor
    return props.isPlaying ? secondaryColor : primaryColor;
  }

  {/* CloneElement is used so we can pass different type of icon and still using the same configuration */}
  return (
    React.cloneElement(audioIconHelper.getIcon(props.customIcon, props.isSpeakerIcon), {
      name: audioIconHelper.getIconName(props.customIconSet, props.isSpeakerIcon, props.audio, props.isPlaying),
      size: props.iconSize || iconSize, color: !!props.audio ? getIconColor() : color.muted,
      style: [{ marginLeft: (props.isPlaying  && !props.isSpeakerIcon) ? -2 : 0 }, props.iconStyle]
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
  customIcon={Icon component}
  customIconSet={{play: '', pause: '', mute: ''}}
/>
*/}