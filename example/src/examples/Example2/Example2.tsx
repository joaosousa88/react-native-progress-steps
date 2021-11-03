import ProgressSteps, {
  Content,
  Title,
} from '@joaosousa/react-native-progress-steps';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default () => {
  const [currrentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currrentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currrentStep - 1);
  };

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
          <View style={styles.touchables}>
            <TouchableOpacity
              style={[styles.touchable, styles.touchableSpacer]}
              onPress={() => handleNextStep()}
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
          <View style={styles.touchables}>
            <TouchableOpacity
              style={[styles.touchable, styles.touchableSpacer]}
              onPress={() => handleNextStep()}
            >
              <Text style={styles.touchableText}>Next step</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => handlePrevStep()}
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
          <View style={styles.touchables}>
            <TouchableOpacity
              style={[styles.touchable, styles.touchableSpacer]}
              onPress={() => handleNextStep()}
            >
              <Text style={styles.touchableText}>Next step</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => handlePrevStep()}
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
          <View style={styles.touchables}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => handlePrevStep()}
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
        <ProgressSteps
          currentStep={currrentStep}
          steps={steps}
          colors={{
            title: {
              text: {
                normal: '#94d2bd',
                active: '#005f73',
                completed: '#005f73',
              },
            },
            marker: {
              text: {
                normal: '#94d2bd',
                active: '#005f73',
                completed: '#f4f3ee',
              },
              line: {
                normal: '#94d2bd',
                active: '#005f73',
                completed: '#005f73',
              },
            },
          }}
        />
      </View>
    </ScrollView>
  );
};

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
  touchables: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  touchable: {
    backgroundColor: '#005f73',
    padding: 10,
  },
  touchableText: {
    color: '#f4f3ee',
  },
  touchableSpacer: {
    marginRight: 10,
  },
});
