import {PixelRatio } from 'react-native';

const XHDPIRatio = 2;

export const isLowPixelDensityDevice = () => {
  const devicePixelRatio = Math.round(PixelRatio.roundToNearestPixel(PixelRatio.get()));
  return devicePixelRatio <= XHDPIRatio
}