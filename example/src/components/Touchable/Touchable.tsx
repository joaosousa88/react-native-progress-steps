import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import styles from './Touchable.styles';

const Touchable = ({
  label,
  onPress,
  colors = { color: '#ffffff', backgroundColor: '#000000' },
}) => {
  const { color, backgroundColor } = colors;

  return (
    <TouchableOpacity
      style={[styles.touchable, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={{ color }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Touchable;
