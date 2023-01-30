import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

import {mdPressableItemSize, lgPressabelItemSize} from '../constants/component_constant'
import {isLowPixelDensityDevice} from '../utils/responsive_util'

const AudioPlayerButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text>Point</Text>
    </TouchableOpacity>
  )
}

const btnSize = isLowPixelDensityDevice() ? mdPressableItemSize : lgPressabelItemSize
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40,
    justifyContent: 'center',
    height: btnSize,
    width: btnSize,
  }
})

export default AudioPlayerButtonComponent