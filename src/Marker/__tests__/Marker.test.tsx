import Marker from '../';
import React from 'react';
import { render } from '@testing-library/react-native';

const stepState = {
  stepIndex: 0,
  isActive: true,
  isCompleted: false,
  isFirst: true,
  isLast: false,
  isFirstInteraction: true,
};

describe('Marker', () => {
  it('should render Marker', () => {
    const { queryByText, toJSON } = render(<Marker stepState={stepState} />);

    expect(queryByText('1')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it('should render last Marker', () => {
    const { toJSON } = render(
      <Marker stepState={{ ...stepState, isLast: true }} />
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
