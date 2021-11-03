import type { IProgressSteps, IstepState } from './ProgressSteps.types';
import React, { FC, cloneElement, memo, useEffect, useState } from 'react';

import Marker from './Marker';
import { View } from 'react-native';
import styles from './ProgressSteps.styles';

const ProgressSteps: FC<IProgressSteps> = ({
  currentStep,
  steps,
  marker,
  colors,
}) => {
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);

  useEffect(() => {
    if (isFirstInteraction) {
      setIsFirstInteraction(false);
    }
  }, [currentStep, isFirstInteraction]);

  return (
    <View style={styles.container}>
      {steps.map(({ id, title, content }, index) => {
        const stepState: IstepState = {
          stepIndex: index,
          isActive: index === currentStep,
          isCompleted: index < currentStep,
          isFirst: index === 0,
          isFirstInteraction,
          isLast: index === steps.length - 1,
        };

        return (
          <View key={id ?? index} style={styles.step}>
            <View style={styles.left}>
              {marker ? (
                cloneElement(marker, {
                  stepState,
                  colors: colors?.marker,
                  ...marker.props,
                })
              ) : (
                <Marker stepState={stepState} colors={colors?.marker} />
              )}
            </View>
            <View style={styles.right}>
              {title &&
                cloneElement(title, {
                  stepState,
                  colors: colors?.title,
                  ...title.props,
                })}
              {content && cloneElement(content, { stepState })}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default memo(
  ProgressSteps,
  (prevProps, nextProps) =>
    prevProps.steps === nextProps.steps &&
    prevProps.currentStep === nextProps.currentStep
);
