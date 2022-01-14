import React from 'react';
import { View } from 'react-native';
import styles from './Row.styles';

const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

export default Row;
