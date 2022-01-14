import { DEFAULT_ORIENTATION } from '../constants';
import { StyleSheet } from 'react-native';
import type { Tstyles } from './Content.types';

const container = {
  width: '100%',
  overflow: 'hidden',
};

const content = {
  position: 'absolute',
  width: '100%',
};

const styles: Tstyles = {
  vertical: {
    container: {
      ...container,
      marginBottom: 20,
      paddingLeft: 5,
    },
    content,
  },
  horizontal: {
    container,
    content,
  },
};

const useStyles = (orientation = DEFAULT_ORIENTATION) =>
  StyleSheet.create(styles[orientation]);

export default useStyles;
