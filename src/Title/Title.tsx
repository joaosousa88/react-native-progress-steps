import { Animated } from 'react-native';
import { EASING } from '../constants';
import React, { FC, memo, useEffect, useRef } from 'react';
import styles from './Title.styles';
import type { ITitle } from './Title.types';

const Title: FC<ITitle> = ({
  children,
  stepState: { isActive, isCompleted, isFirstInteraction } = {},
}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isActive || isCompleted ? 1 : 0,
      duration: 400,
      easing: EASING,
      useNativeDriver: false,
    }).start();
  }, [isActive, isCompleted]); // eslint-disable-line react-hooks/exhaustive-deps

  const getColor = React.useCallback(() => {
    if (isFirstInteraction) {
      if (isCompleted || isActive) {
        return 'black';
      }

      return 'gray';
    }

    if (isCompleted) {
      return 'black';
    }

    return animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['gray', 'black'],
    });
  }, [isFirstInteraction, isCompleted, isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Animated.Text style={[styles.text, { color: getColor() }]}>
      {children}
    </Animated.Text>
  );
};

export default memo(
  Title,
  (prevProps, nextProps) =>
    prevProps.stepState?.isActive === nextProps.stepState?.isActive &&
    prevProps.stepState?.isCompleted === nextProps.stepState?.isCompleted
);
