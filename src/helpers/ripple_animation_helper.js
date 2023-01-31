import { Animated } from 'react-native';

const rippleAnimationHelper = (() => {
  return {
    start,
    reset,
  }

  function start(animations) {
    animations.map((animation, index) => {
      Animated.loop(
        Animated.parallel([
          _animatedTiming(animation.scale, 1.8, index * 400),
          _animatedTiming(animation.opacity, 0, index * 400),
        ], { useNativeDriver: true })
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
            useNativeDriver: true
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