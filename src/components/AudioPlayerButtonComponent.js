import React from 'react'
import {TouchableOpacity} from 'react-native'

import AudioIconComponent from './AudioIconComponent';
import {mdPressableItemSize, lgPressabelItemSize} from '../constants/component_constant'
import {isLowPixelDensityDevice} from '../utils/responsive_util'
import color from '../constants/color_constant';

const btnSize = isLowPixelDensityDevice() ? mdPressableItemSize : lgPressabelItemSize

const AudioPlayerButtonComponent = (props) => {
  const btnStyle = {
    alignItems: 'center',
    backgroundColor: props.backgroundColor || color.white,
    borderRadius: 40,
    elevation: props.hasShadow ? 4 : 0,
    justifyContent: 'center',
    height: props.height || btnSize,
    width: props.width || btnSize,
  }

  return (
    <TouchableOpacity style={[btnStyle, props.btnStyle]}>
      <AudioIconComponent
        isPlaying={false}
        audio={props.audio}
        isSpeakerIcon={props.isSpeakerIcon}
        iconStyle={{}}
        iconSize={props.iconSize}
        iconPrimaryColor={props.iconPrimaryColor}
        iconSecondaryColor={props.iconSecondaryColor}
      />
    </TouchableOpacity>
  )
}

export default AudioPlayerButtonComponent