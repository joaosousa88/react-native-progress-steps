import { DEFAULT_ORIENTATION } from '../constants';
import { StyleSheet } from 'react-native';
import type { Tstyles } from './Title.types';

const styles: Tstyles = {
  vertical: {
    text: {
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 5,
      fontWeight: 'bold',
    },
  },
  horizontal: {
    text: {
      padding: 5,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
};

const useStyles = (orientation = DEFAULT_ORIENTATION) =>
  StyleSheet.create(styles[orientation]);

export default useStyles;
