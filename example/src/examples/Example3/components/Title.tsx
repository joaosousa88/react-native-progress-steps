import { Animated, StyleSheet } from 'react-native';
import { COLORS, CUSHION } from './constants';
import React, { FC, memo } from 'react';

interface ITitle {
  children: string;
}

const Title: FC<ITitle> = ({ children }) => (
  <Animated.Text style={styles.text}>{children}</Animated.Text>
);
const styles = StyleSheet.create({
  text: {
    color: COLORS.blue,
    fontSize: 18,
    fontWeight: 'bold',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: CUSHION,
  },
});

export default memo(Title);
