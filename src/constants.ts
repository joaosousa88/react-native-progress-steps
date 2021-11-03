import { Easing } from 'react-native';

export const EASING = Easing.bezier(0.76, 0, 0.24, 1);

export const DEFAULT_COLORS = {
  marker: {
    text: {
      normal: '#000000',
      active: '#000000',
      completed: '#ffffff',
    },
    line: {
      normal: '#a4a4a4',
      active: '#000000',
      completed: '#000000',
    },
  },
  title: {
    text: {
      normal: '#a4a4a4',
      active: '#000000',
      completed: '#000000',
    },
  },
};
