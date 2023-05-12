import {isLowPixelDensityDevice} from '../utils/responsive_util'
import color from './color_constant';

export const defaultBtnSize = isLowPixelDensityDevice() ? 48 : 56
export const defaultRippleSize = isLowPixelDensityDevice() ? 48 : 56
export const defaultIconSize = isLowPixelDensityDevice() ? 24 : 26
export const primaryIconColor = color.black
export const secondaryIconColor = color.gray
export const rippleScaleSizes = {
  big: 1.67,
  medium: 1.47,
  small: 1.34,
}