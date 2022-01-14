import { DEFAULT_ORIENTATION } from '../constants';
import { StyleSheet } from 'react-native';
import type { Tstyles } from './Marker.types';

export const circleSize = 40;
const circleBorderWidth = 4;
const barWidth = circleBorderWidth;

const circle = {
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
  borderWidth: circleBorderWidth,
  borderRadius: circleSize / 2,
  width: circleSize,
  height: circleSize,
  fontSize: 1,
};

const circleInner = {
  position: 'absolute',
  borderRadius: circleSize / 2,
  width: circleSize,
  height: circleSize,
};

const circleText = {
  position: 'relative',
  zIndex: 1,
  fontWeight: 'bold',
};

const bar = {
  flex: 1,
  zIndex: 0,
};

const styles: Tstyles = {
  vertical: {
    container: {
      flex: 1,
    },
    circle,
    circleInner,
    circleText,
    bar: {
      ...bar,
      position: 'relative',
      alignSelf: 'center',
      width: barWidth,
    },
    barInner: {
      width: barWidth,
      height: '100%',
    },
  },
  horizontal: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    circle,
    circleInner,
    circleText,
    bar: {
      ...bar,
      position: 'absolute',
      width: '100%',
      height: barWidth,
    },
    barInner: {
      width: '100%',
      height: barWidth,
    },
  },
};

const useStyles = (orientation = DEFAULT_ORIENTATION) =>
  StyleSheet.create(styles[orientation]);

export default useStyles;
