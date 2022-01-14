import { Body, Row, Spacer } from '../../components';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';
import React, { useState } from 'react';

import { Button } from 'react-native';
import Content from './components/Content';
import Marker from './components/Marker';
import ProgressSteps from '@joaosousa/react-native-progress-steps';
import Title from './components/Title';

export default () => {
  const [currrentStep, setCurrentStep] = useState(0);
  const [isFetching, setFetching] = useState(false);
  const handleNextStep = (time = 1000) => {
    setFetching(true);
    setTimeout(() => {
      setFetching(false);
      setCurrentStep(currrentStep + 1);
    }, time);
  };

  const handlePrevStep = () => {
    setCurrentStep(currrentStep - 1);
  };

  const steps = [
    {
      title: <Title>Items</Title>,
      content: (
        <Content>
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={40} />
            <PlaceholderLine />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={35} />
          </Placeholder>
          <Spacer space="10" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={70} />
            <PlaceholderLine />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={30} />
          </Placeholder>
          <Spacer space="10" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={40} />
            <PlaceholderLine />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={35} />
          </Placeholder>
          <Spacer space="10" />
          <Row>
            <Button title="Next step" onPress={() => handleNextStep(400)} />
          </Row>
        </Content>
      ),
    },
    {
      title: <Title>Shipping & Billing Address</Title>,
      content: (
        <Content>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={70} />
            <PlaceholderLine />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={30} />
          </Placeholder>
          <Spacer space="10" />
          <Row>
            <Button title="Next step" onPress={() => handleNextStep()} />
            <Spacer orientation="h" space="10" />
            <Button title="Prev step" onPress={() => handlePrevStep()} />
          </Row>
        </Content>
      ),
    },
    {
      title: <Title>Payment</Title>,
      content: (
        <Content>
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={30} />
          </Placeholder>
          <Spacer space="10" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine />
            <PlaceholderLine width={50} />
            <PlaceholderLine width={20} />
          </Placeholder>
          <Spacer space="10" />
          <Row>
            <Button title="Next step" onPress={() => handleNextStep(500)} />
            <Spacer orientation="h" space="10" />
            <Button title="Prev step" onPress={() => handlePrevStep()} />
          </Row>
        </Content>
      ),
    },
    {
      title: <Title>Order confirmation</Title>,
      content: (
        <Content>
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={40} />
            <PlaceholderLine />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={35} />
          </Placeholder>
          <Spacer space="10" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={70} />
            <PlaceholderLine />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={30} />
          </Placeholder>
          <Spacer space="10" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={40} />
            <PlaceholderLine />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={35} />
          </Placeholder>
          <Spacer space="20" />
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={70} />
            <PlaceholderLine />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={30} />
          </Placeholder>
          <Spacer space="10" />
          <Row>
            <Button title="Prev step" onPress={() => handlePrevStep()} />
          </Row>
        </Content>
      ),
    },
  ];

  return (
    <Body>
      <ProgressSteps
        marker={<Marker isFetching={isFetching} />}
        currentStep={currrentStep}
        steps={steps}
      />
    </Body>
  );
};
