import { Animated, View } from 'react-native';
import { DEFAULT_COLORS, EASING } from '../constants';
import React, { FC, memo, useEffect, useRef } from 'react';

import type { IMarker } from './Marker.types';
import styles from './Marker.styles';

const Marker: FC<IMarker> = ({
  stepState: {
    stepIndex = 0,
    isCompleted,
    isActive,
    isLast,
    isFirstInteraction,
  } = {},
  colors: {
    text = DEFAULT_COLORS.marker.text,
    line = DEFAULT_COLORS.marker.line,
  } = {},
}) => {
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const borderColorAnimation = useRef(new Animated.Value(0)).current;
  const heightAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel(
      [
        Animated.timing(isCompleted ? scaleAnimation : heightAnimation, {
          toValue: isCompleted ? 1 : 0,
          duration: 300,
          easing: EASING,
          useNativeDriver: false,
        }),
        Animated.timing(isCompleted ? heightAnimation : scaleAnimation, {
          toValue: isCompleted ? 1 : 0,
          duration: 300,
          delay: 150,
          easing: EASING,
          useNativeDriver: false,
        }),
      ],
      { stopTogether: false }
    ).start();
  }, [isCompleted]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    Animated.timing(borderColorAnimation, {
      toValue: isActive ? 1 : 0,
      duration: 400,
      easing: EASING,
      useNativeDriver: false,
    }).start();
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  const borderColor =
    isFirstInteraction && isActive
      ? line.completed
      : borderColorAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [line.normal, line.completed],
        });

  const getColor = () => {
    if (isCompleted) {
      return text.completed;
    } else if (isActive) {
      return text.active;
    } else {
      return text.normal;
    }
  };

  const scale = isFirstInteraction && isCompleted ? 1 : scaleAnimation;

  const height =
    isFirstInteraction && isCompleted
      ? '100%'
      : heightAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
        });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { borderColor }]}>
        <Animated.Text style={[styles.circleText, { color: getColor() }]}>
          {stepIndex + 1}
        </Animated.Text>
        <Animated.View
          style={[
            styles.circleInner,
            { backgroundColor: line.active, transform: [{ scale }] },
          ]}
        />
      </Animated.View>
      {!isLast && (
        <View style={[styles.bar, { backgroundColor: line.normal }]}>
          <Animated.View
            style={[styles.barInner, { backgroundColor: line.active, height }]}
          />
        </View>
      )}
    </View>
  );
};

export default memo(
  Marker,
  (prevProps, nextProps) =>
    prevProps.stepState?.isActive === nextProps.stepState?.isActive &&
    prevProps.stepState?.stepIndex === nextProps.stepState?.stepIndex &&
    prevProps.stepState?.isCompleted === nextProps.stepState?.isCompleted &&
    prevProps.stepState?.isLast === nextProps.stepState?.isLast
);
