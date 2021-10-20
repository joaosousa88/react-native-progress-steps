import React from 'react';
import Title from '../';
import { render } from '@testing-library/react-native';

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
      <Title stepState={stepState}>Hello title</Title>
    );

    expect(queryByText('Hello title')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
