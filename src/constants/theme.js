import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#7F5DF0', // Light purple
  secondary: '#5D2DFD', // Dark purple
  textPrimary: '#440F7C',
  lightPrimary: '#d8bbf7',
  textSecondary: '#D72898',
  textColor: '#5E5873',
  border: '#E6E9EC',
  white: '#fff',
  black: '#000000',
  green: '#37E39F',
  red: '#FF3333',
  gray: '#6A6A6A',
  lightGray: '#dbdbdb',
  lightGray1: '#f5f6fa',
  avatar: '#F7D3EA',
  avatartxt: '#D62196',
  redstatus: '#F9E8E8',
  redstatusTxt: '#C63136',
  logout: '#D62196',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  margin: 24,

  // font sizes
  h1: 32,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 26,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  big1: 100,

  // app dimensions
  width,
  height,
};

const appTheme = {COLORS, SIZES};

export default appTheme;
