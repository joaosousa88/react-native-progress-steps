import { DEFAULT_COLORS, EASING } from '../constants';
import React, { FC, memo, useCallback, useEffect, useRef } from 'react';

import { Animated } from 'react-native';
import type { ITitle } from './Title.types';
import styles from './Title.styles';

const Title: FC<ITitle> = ({
  children,
  stepState: { isActive, isCompleted, isFirstInteraction } = {},
  colors: { text: { normal, active, completed } } = DEFAULT_COLORS.title,
}) => {
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(colorAnimation, {
      toValue: isActive || isCompleted ? 1 : 0,
      duration: 400,
      easing: EASING,
      useNativeDriver: false,
    }).start();
  }, [isActive, isCompleted]); // eslint-disable-line react-hooks/exhaustive-deps

  const getColor = useCallback(() => {
    if (isFirstInteraction) {
      if (isActive) {
        return active;
      }

      if (isCompleted) {
        return completed;
      }

      return normal;
    }

    if (isCompleted) {
      return completed;
    }

    return colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [normal, active],
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
