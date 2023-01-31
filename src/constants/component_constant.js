import {isLowPixelDensityDevice} from '../utils/responsive_util'

export const defaultBtnSize = isLowPixelDensityDevice() ? 48 : 56
export const defaultRippleSize = isLowPixelDensityDevice() ? 48 : 56
export const iconSize = 24