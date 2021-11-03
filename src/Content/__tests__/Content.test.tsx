import Content from '..';
import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';

const stepState = {
  stepIndex: 0,
  isActive: true,
  isCompleted: false,
  isFirst: true,
  isLast: false,
  isFirstInteraction: true,
};

describe('Title', () => {
  it('should render Title', () => {
    const { queryByText, toJSON } = render(
      <Content stepState={stepState}>
        <Text>Hello content</Text>
      </Content>
    );

    expect(queryByText('Hello content')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
