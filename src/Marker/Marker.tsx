import React, { FC, memo, useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import styles from './Marker.styles';
import type { IMarker } from './Marker.types';
import { EASING } from '../constants';

const Marker: FC<IMarker> = ({
  stepState: { index, isCompleted, isActive, isLast, isFirstInteraction } = {},
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
      ? 'black'
      : borderColorAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['gray', 'black'],
        });

  const color =
    isFirstInteraction && isCompleted
      ? 'white'
      : scaleAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['black', 'white'],
        });

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
        <Animated.Text style={[styles.circleText, { color }]}>
          {index}
        </Animated.Text>
        <Animated.View
          style={[styles.circleInner, { transform: [{ scale }] }]}
        />
      </Animated.View>
      {!isLast && (
        <View style={styles.bar}>
          <Animated.View style={[styles.barInner, { height }]} />
        </View>
      )}
    </View>
  );
};

export default memo(
  Marker,
  (prevProps, nextProps) =>
    prevProps.stepState?.isActive === nextProps.stepState?.isActive &&
    prevProps.stepState?.index === nextProps.stepState?.index &&
    prevProps.stepState?.isCompleted === nextProps.stepState?.isCompleted &&
    prevProps.stepState?.isLast === nextProps.stepState?.isLast
);
