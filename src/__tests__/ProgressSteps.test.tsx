import React from 'react';
import { render } from '@testing-library/react-native';
import ProgressSteps from '../';
import { Text } from 'react-native';
// import type { IstepState } from '../ProgressSteps.types';

const Component = ({ children }: { children: React.ReactNode }) => (
  <Text>{children}</Text>
);

const CustomMarker = ({ stepState: { index } = {} }: { stepState?: any }) => (
  <Text>Custom marker {index}</Text>
);

const steps = [
  {
    title: <Component>Title 1</Component>,
    content: <Text>Content 1</Text>,
  },
  {
    title: <Component>Title 2</Component>,
    content: <Text>Content 2</Text>,
  },
];

describe('ProgressSteps', () => {
  it('should render all steps', () => {
    const { queryByText } = render(
      <ProgressSteps currentStep={0} steps={steps} />
    );

    expect(queryByText('Title 1')).toBeTruthy();
    expect(queryByText('Content 1')).toBeTruthy();
    expect(queryByText('Title 2')).toBeTruthy();
    expect(queryByText('Content 2')).toBeTruthy();
  });

  it('should render default Marker', () => {
    const { queryByText } = render(
      <ProgressSteps currentStep={0} steps={steps} />
    );

    expect(queryByText('0')).toBeTruthy();
    expect(queryByText('1')).toBeTruthy();
  });

  it('should render custom Marker', () => {
    const { queryByText } = render(
      <ProgressSteps marker={<CustomMarker />} currentStep={0} steps={steps} />
    );

    expect(queryByText('Custom marker 0')).toBeTruthy();
    expect(queryByText('Custom marker 1')).toBeTruthy();
  });

  it('should render without first content', () => {
    const { queryByText } = render(
      <ProgressSteps
        currentStep={0}
        steps={[
          {
            title: <Component>Title 1</Component>,
          },
          {
            title: <Component>Title 2</Component>,
            content: <Text>Content 2</Text>,
          },
        ]}
      />
    );

    expect(queryByText('Title 1')).toBeTruthy();
    expect(queryByText('Content 1')).toBeFalsy();
    expect(queryByText('Title 2')).toBeTruthy();
    expect(queryByText('Content 2')).toBeTruthy();
  });
});
