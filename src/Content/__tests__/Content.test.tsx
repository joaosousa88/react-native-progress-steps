import React from 'react';
import Content from '..';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

const stepState = {
  index: 0,
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
