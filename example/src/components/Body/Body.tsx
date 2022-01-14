import { ScrollView, View } from 'react-native';

import React from 'react';
import styles from './Body.styles';

const Body = ({ children }) => {
  return (
    <ScrollView>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};

export default Body;
