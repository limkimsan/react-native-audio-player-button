import React from 'react'

import color from '../constants/color_constant';
import {defaultIconSize, primaryIconColor, secondaryIconColor} from '../constants/component_constant';
import audioIconHelper from '../helpers/audio_icon_helper';

const AudioIconComponent = (props) => {
  const getIconColor = () => {
    const primaryColor = props.iconPrimaryColor || primaryIconColor
    const secondaryColor = props.iconSecondaryColor || secondaryIconColor
    return props.isPlaying ? secondaryColor : primaryColor;
  }

  const iconSize = props.iconSize || defaultIconSize

  {/* CloneElement is used so we can pass different type of icon and still using the same configuration */}
  return (
    React.cloneElement(audioIconHelper.getIcon(props.customIcon, props.isSpeakerIcon), {
      name: audioIconHelper.getIconName(props.customIconSet, props.isSpeakerIcon, props.audio, props.isPlaying),
      size: iconSize, color: !!props.audio ? getIconColor() : color.muted,
      style: [props.iconStyle, { width: iconSize, marginLeft: (props.isPlaying  && !props.isSpeakerIcon) ? -2 : 0 }]
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