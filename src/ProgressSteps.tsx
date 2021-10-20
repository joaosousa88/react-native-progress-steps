import React, { FC, memo, useEffect, useState, cloneElement } from 'react';
import { View } from 'react-native';
import Marker from './Marker';
import styles from './ProgressSteps.styles';
import type { IProgressSteps, IstepState } from './ProgressSteps.types';

const ProgressSteps: FC<IProgressSteps> = ({
  currentStep = 0,
  steps,
  marker,
}) => {
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);

  useEffect(() => {
    if (isFirstInteraction) setIsFirstInteraction(false);
  }, [currentStep]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={styles.container}>
      {steps.map(({ id, title, content }, index) => {
        const stepState: IstepState = {
          index,
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
                cloneElement(marker, { stepState })
              ) : (
                <Marker stepState={stepState} />
              )}
            </View>
            <View style={styles.right}>
              {title && cloneElement(title, { stepState })}
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
