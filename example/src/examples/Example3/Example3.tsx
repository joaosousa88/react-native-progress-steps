import { Button, ScrollView, StyleSheet, View } from 'react-native';
import {
  Fade,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from 'rn-placeholder';
import React, { useState } from 'react';

import Content from './components/Content';
import Marker from './components/Marker';
import ProgressSteps from '@joaosousa/react-native-progress-steps';
import Space from './components/Space';
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
          <Space direction="column" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={70} />
            <PlaceholderLine />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={30} />
          </Placeholder>
          <Space direction="column" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={40} />
            <PlaceholderLine />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={35} />
          </Placeholder>
          <Space direction="column" />
          <View style={styles.actionsWrapper}>
            <Button title="Next step" onPress={() => handleNextStep(400)} />
          </View>
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
          <Space direction="column" />
          <View style={styles.actionsWrapper}>
            <Button title="Next step" onPress={() => handleNextStep()} />
            <Space />
            <Button title="Prev step" onPress={() => handlePrevStep()} />
          </View>
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
          <Space direction="column" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine />
            <PlaceholderLine width={50} />
            <PlaceholderLine width={20} />
          </Placeholder>
          <Space direction="column" />
          <View style={styles.actionsWrapper}>
            <Button title="Next step" onPress={() => handleNextStep(500)} />
            <Space />
            <Button title="Prev step" onPress={() => handlePrevStep()} />
          </View>
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
          <Space direction="column" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={70} />
            <PlaceholderLine />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={30} />
          </Placeholder>
          <Space direction="column" />
          <Placeholder Left={PlaceholderMedia} Animation={Fade}>
            <PlaceholderLine width={40} />
            <PlaceholderLine />
            <PlaceholderLine width={90} />
            <PlaceholderLine width={35} />
          </Placeholder>
          <Space direction="column" />
          <Space direction="column" />
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={70} />
            <PlaceholderLine />
            <PlaceholderLine width={80} />
            <PlaceholderLine width={30} />
          </Placeholder>
          <Space direction="column" />
          <View style={styles.actionsWrapper}>
            <Button title="Prev step" onPress={() => handlePrevStep()} />
          </View>
        </Content>
      ),
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <ProgressSteps
          marker={<Marker isFetching={isFetching} />}
          currentStep={currrentStep}
          steps={steps}
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
