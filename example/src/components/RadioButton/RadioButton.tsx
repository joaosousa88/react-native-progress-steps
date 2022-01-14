import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Spacer from '../Spacer';
import styles from './RadioButton.styles';

const RadioButton = ({ isActive, label, handleSelect }) => {
  return (
    <TouchableOpacity onPress={handleSelect}>
      <View style={styles.container}>
        <View style={styles.circle}>
          {isActive && <View style={styles.innerCircle} />}
        </View>
        <Spacer orientation="h" space="5" />
        {label && <Text>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default memo(
  RadioButton,
  (prevProps, nextProps) => prevProps.isActive === nextProps.isActive
);
