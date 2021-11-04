import { Button, StyleSheet, Text, View } from 'react-native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import Example1 from './examples/Example1';
import Example2 from './examples/Example2';
import Example3 from './examples/Example3';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

type RootStackParamList = {
  Examples: undefined;
  Example1: undefined;
  Example2: undefined;
  Example3: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Examples'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>List of examples:</Text>
      <View style={styles.margin10} />
      <Button
        title="Go to Example 1"
        onPress={() => navigation.navigate('Example1')}
      />
      <View style={styles.margin10} />
      <Button
        title="Go to Example 2"
        onPress={() => navigation.navigate('Example2')}
      />
      <View style={styles.margin10} />
      <Button
        title="Go to Example 3"
        onPress={() => navigation.navigate('Example3')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Examples"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          contentStyle: {
            backgroundColor: '#ffffff',
          },
        }}
      >
        <Stack.Screen name="Examples" component={HomeScreen} />
        <Stack.Screen
          name="Example1"
          component={Example1}
          options={{ title: 'Example 1' }}
        />
        <Stack.Screen
          name="Example2"
          component={Example2}
          options={{ title: 'Example 2' }}
        />
        <Stack.Screen
          name="Example3"
          component={Example3}
          options={{ title: 'Example 3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  margin10: { marginBottom: 10 },
});
