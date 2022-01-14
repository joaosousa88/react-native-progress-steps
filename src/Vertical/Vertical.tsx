import React, { FC, cloneElement } from 'react';

import type { IVertical } from './Vertical.types';
import type { IstepState } from '../ProgressSteps.types';
import Marker from '../Marker';
import { ORIENTATION_VERTICAL } from '../constants';
import { View } from 'react-native';
import styles from './Vertical.styles';

const Vertical: FC<IVertical> = ({
  colors,
  currentStep,
  isFirstInteraction,
  marker,
  orientation = ORIENTATION_VERTICAL,
  steps,
}) => (
  <View style={styles.container}>
    {steps.map(({ id, title, content }, index) => {
      const stepState: IstepState = {
        isActive: index === currentStep,
        isCompleted: index < currentStep,
        isFirst: index === 0,
        isFirstInteraction,
        isLast: index === steps.length - 1,
        stepIndex: index,
      };

      return (
        <View key={id ?? index} style={styles.step}>
          <View style={styles.left}>
            {marker ? (
              cloneElement(marker, {
                stepState,
                colors: colors?.marker,
                orientation,
                ...marker.props,
              })
            ) : (
              <Marker
                stepState={stepState}
                colors={colors?.marker}
                orientation={orientation}
              />
            )}
          </View>
          <View style={styles.right}>
            {title &&
              cloneElement(title, {
                stepState,
                colors: colors?.title,
                orientation,
                ...title.props,
              })}
            {content && cloneElement(content, { stepState, orientation })}
          </View>
        </View>
      );
    })}
  </View>
);

export default Vertical;
