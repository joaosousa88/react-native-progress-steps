import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { CUSHION } from './constants';

interface ISpace {
  direction?: 'row' | 'column';
}

const Space: FC<ISpace> = ({ direction = 'row' }) => (
  <View style={styles[direction]} />
);
const styles = StyleSheet.create({
  row: {
    paddingLeft: CUSHION,
  },
  column: {
    paddingBottom: CUSHION,
  },
});

export default Space;
