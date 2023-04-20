import React from 'react'
import {View} from 'react-native'

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

  const renderStrikeLine = () => {
    return <View style={{height: 3, width: iconSize, transform: [{rotate: '45deg'}], backgroundColor: 'white', justifyContent: 'center', position: 'absolute', top: iconSize / 2.4, left: -2, zIndex: 10}}>
              <View style={{height: 1.5, backgroundColor: color.muted}} />
           </View>
  }

  {/* CloneElement is used so we can pass different type of icon and still using the same configuration */}
  return (
    <View>
      {(!props.audio && !props.isSpeakerIcon && !props.customIcon) && renderStrikeLine()}
      {
        React.cloneElement(audioIconHelper.getIcon(props.customIcon, props.isSpeakerIcon), {
          name: audioIconHelper.getIconName(props.customIconSet, props.isSpeakerIcon, props.audio, props.isPlaying),
          size: iconSize, color: !!props.audio ? getIconColor() : color.muted,
          style: [{ width: iconSize }, audioIconHelper.getIconMargin(props.isPlaying, props.isSpeakerIcon, !!props.customIcon), props.iconStyle]
        })
      }
    </View>
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