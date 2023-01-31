import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import color from '../constants/color_constant';
import {defaultRippleSize} from '../constants/component_constant';
import rippleAnimationHelper from '../helpers/ripple_animation_helper';

const RippleAnimationComponent = (props) => {
  const [componentDidMount, setComponentDidMount] = useState(false);
  const [state] = useState({
    opacity1: new Animated.Value(1),
    opacity2: new Animated.Value(1),
    opacity3: new Animated.Value(1),
    scale1: new Animated.Value(0),
    scale2: new Animated.Value(0),
    scale3: new Animated.Value(0),
  });

  const animations = [
    { scale: state.scale1, opacity: state.opacity1 },
    { scale: state.scale2, opacity: state.opacity2 },
    { scale: state.scale3, opacity: state.opacity3 },
  ];

  useEffect(() => {
    if (!componentDidMount) {
      setComponentDidMount(true);
      return;
    }

    props.isPlaying ? rippleAnimationHelper.start(animations) : rippleAnimationHelper.reset(animations);
  }, [props.isPlaying])

  const rippleView = (index) => {
    const rippleStyle = {
      backgroundColor: props.rippleColor || color.black,
      radius: props.radius || defaultRippleSize,
      height: props.height || defaultRippleSize,
      width: props.width || defaultRippleSize
    }

    return <Animated.View key={index} style={[ StyleSheet.absoluteFillObject, { backgroundColor: rippleStyle.backgroundColor }, props.rippleStyle,
              {opacity: animations[index].opacity, transform: [{ scale: animations[index].scale }], height: rippleStyle.height, width: rippleStyle.width, borderRadius: rippleStyle.radius }
            ]} />
  }

  return [...Array(3).keys()].map((index) => rippleView(index))
}

export default RippleAnimationComponent;

// How to use
{/*
<Ripple
  color={}
  height={number}
  width={number}
  radius={number}
  isPlaying={boolean}
  rippleStyle={{}}
/>
*/}