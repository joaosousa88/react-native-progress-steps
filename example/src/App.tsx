import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ProgressSteps, {
  Content,
  Title,
} from '@joaosousa/react-native-progress-steps';

export default function App() {
  const [currrentStep, setCurrentStep] = useState(2);

  const steps = [
    {
      title: <Title>First step</Title>,
      content: (
        <Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            odio vitae turpis fermentum porttitor sit amet at nisi. Donec
            ultricies ligula quis turpis tempor, sed porta odio feugiat. Duis
            vel auctor ante. Donec in velit in urna imperdiet sollicitudin eget
            nec libero. Nulla faucibus maximus justo, at laoreet nulla elementum
            ut. Cras ac massa in est facilisis commodo vitae ac sem. Quisque id
            tellus at libero dignissim suscipit. Donec sollicitudin turpis nibh,
            nec fringilla tellus egestas nec. Duis interdum felis a enim
            consequat porttitor. Integer luctus quam ipsum, at hendrerit enim
            imperdiet vitae. Pellentesque eleifend felis nec eros maximus, et
            efficitur nisi dignissim. Fusce finibus vulputate posuere. Nulla sit
            amet sem nec diam feugiat hendrerit. Etiam egestas risus sed maximus
            ornare. Ut accumsan nulla ac lacinia volutpat. Aliquam a ultrices
            nisl.
          </Text>
          <View style={styles.actionsWrapper}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => setCurrentStep(currrentStep + 1)}
            >
              <Text style={styles.touchableText}>Next step</Text>
            </TouchableOpacity>
          </View>
        </Content>
      ),
    },
    {
      title: <Title>Second step</Title>,
      content: (
        <Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
            purus eget turpis lobortis venenatis. In dapibus, eros a bibendum
            malesuada, arcu sem lacinia metus, vitae tristique velit purus eget
            elit. Integer tristique ligula sit amet malesuada aliquam.
          </Text>
          <View style={styles.actionsWrapper}>
            <TouchableOpacity
              style={[styles.touchable, styles.touchableSpacer]}
              onPress={() => setCurrentStep(currrentStep + 1)}
            >
              <Text style={styles.touchableText}>Next step</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => setCurrentStep(currrentStep - 1)}
            >
              <Text style={styles.touchableText}>Prev step</Text>
            </TouchableOpacity>
          </View>
        </Content>
      ),
    },
    {
      title: <Title>Third step</Title>,
      content: (
        <Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            odio vitae turpis fermentum porttitor sit amet at nisi. Donec
            ultricies ligula quis turpis tempor, sed porta odio feugiat. Duis
            vel auctor ante. Donec in velit in urna imperdiet sollicitudin eget
            nec libero. Nulla faucibus maximus justo, at laoreet nulla elementum
            ut. Cras ac massa in est facilisis commodo vitae ac sem. Quisque id
            tellus at libero dignissim suscipit. Donec sollicitudin turpis nibh,
            nec fringilla tellus egestas nec. Duis interdum felis a enim
            consequat porttitor. Integer luctus quam ipsum, at hendrerit enim
            imperdiet vitae. Pellentesque eleifend felis nec eros maximus, et
            efficitur nisi dignissim. Fusce finibus vulputate posuere. Nulla sit
            amet sem nec diam feugiat hendrerit.
          </Text>
          <View style={styles.actionsWrapper}>
            <TouchableOpacity
              style={[styles.touchable, styles.touchableSpacer]}
              onPress={() => setCurrentStep(currrentStep + 1)}
            >
              <Text style={styles.touchableText}>Next step</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => setCurrentStep(currrentStep - 1)}
            >
              <Text style={styles.touchableText}>Prev step</Text>
            </TouchableOpacity>
          </View>
        </Content>
      ),
    },
    {
      title: <Title>Fourth step</Title>,
      content: (
        <Content>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
            purus eget turpis lobortis venenatis. In dapibus, eros a bibendum
            malesuada, arcu sem lacinia metus, vitae tristique velit purus eget
            elit. Integer tristique ligula sit amet malesuada aliquam. Mauris
            pulvinar sapien semper metus vehicula congue.
          </Text>
          <View style={styles.actionsWrapper}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => setCurrentStep(currrentStep - 1)}
            >
              <Text style={styles.touchableText}>Prev step</Text>
            </TouchableOpacity>
          </View>
        </Content>
      ),
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <ProgressSteps currentStep={currrentStep} steps={steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    paddingTop: 50,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    width: '100%',
    maxWidth: 400,
  },
  actionsWrapper: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  touchable: {
    backgroundColor: 'black',
    padding: 10,
  },
  touchableText: {
    color: 'white',
  },
  touchableSpacer: {
    marginRight: 10,
  },
});
