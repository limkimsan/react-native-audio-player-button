import { Animated } from 'react-native';
import {rippleScaleSizes} from '../constants/component_constant';

const rippleAnimationHelper = (() => {
  return {
    start,
    reset,
  }

  function start(animations, rippleScaleSize) {
    const scaleTo = !!rippleScaleSize ? rippleScaleSizes[rippleScaleSize] : rippleScaleSizes.medium
    animations.map((animation, index) => {
      Animated.loop(
        Animated.parallel([
          _animatedTiming(animation.scale, scaleTo, index * 400),
          _animatedTiming(animation.opacity, 0, index * 400),
        ], { useNativeDriver: false })
      ).start();
    });
  }

  function reset(animations) {
    Animated.loop(
      Animated.parallel(_allAnimatedTimings(animations))
    ).reset();
  }

  // private methods
  function _animatedTiming(type, toValue, delay) {
    return Animated.timing(type, {
            toValue: toValue,
            duration: 2000,
            delay: delay,
            useNativeDriver: false
          })
  }

  function _allAnimatedTimings(animations) {
    const animated = [];
    animations.map(animation => {
      animated.push(Animated.timing(animation.scale));
      animated.push(Animated.timing(animation.opacity));
    });
    return animated;
  }
})();

export default rippleAnimationHelper;