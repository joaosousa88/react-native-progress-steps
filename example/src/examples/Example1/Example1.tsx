import { Body, RadioButtons, Row, Spacer, Touchable } from '../../components';
import ProgressSteps, {
  Content,
  Title,
} from '@joaosousa/react-native-progress-steps';
import React, { useState } from 'react';

import { Text } from 'react-native';

export default () => {
  const orientations = ['vertical', 'horizontal'];
  const [currrentStep, setCurrentStep] = useState(0);
  const [orientation, setOrientation] = useState(orientations[0]);

  const handleNextStep = () => () => {
    setCurrentStep(currrentStep + 1);
  };

  const handlePrevStep = () => () => {
    setCurrentStep(currrentStep - 1);
  };

  const handleSelectOrientation = (item) => {
    if (item === orientation) return;
    setOrientation(item);
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
          <Spacer space="10" />
          <Row>
            <Touchable label="Next step" onPress={handleNextStep()} />
          </Row>
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
          <Spacer space="10" />
          <Row>
            <Touchable label="Next step" onPress={handleNextStep()} />
            <Spacer orientation="h" space="10" />
            <Touchable label="Prev step" onPress={handlePrevStep()} />
          </Row>
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
          <Spacer space="10" />
          <Row>
            <Touchable label="Next step" onPress={handleNextStep()} />
            <Spacer orientation="h" space="10" />
            <Touchable label="Prev step" onPress={handlePrevStep()} />
          </Row>
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
          <Spacer space="10" />
          <Row>
            <Touchable label="Prev step" onPress={handlePrevStep()} />
          </Row>
        </Content>
      ),
    },
  ];

  return (
    <Body>
      <Text>Select orientation:</Text>
      <Spacer space="5" />
      <RadioButtons
        data={orientations}
        selected={orientation}
        handleSelect={handleSelectOrientation}
      />
      <Spacer space="30" />
      <ProgressSteps
        orientation={orientation}
        currentStep={currrentStep}
        steps={steps}
      />
    </Body>
  );
};
