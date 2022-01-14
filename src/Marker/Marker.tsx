import { Animated, LayoutChangeEvent, View } from 'react-native';
import { DEFAULT_COLORS, EASING } from '../constants';
import React, { FC, memo, useEffect, useRef, useState } from 'react';
import useStyles, { circleSize } from './Marker.styles';

import type { IMarker } from './Marker.types';
import { ORIENTATION_HORIZONTAL } from '../constants';

const Marker: FC<IMarker> = ({
  colors: {
    line = DEFAULT_COLORS.marker.line,
    text = DEFAULT_COLORS.marker.text,
  } = {},
  orientation,
  stepState: {
    isActive,
    isCompleted,
    isFirstInteraction,
    isLast,
    stepIndex = 0,
  } = {},
}) => {
  const [widthContainer, setWidthContainer] = useState(0);

  const barAnimation = useRef(new Animated.Value(0)).current;
  const borderColorAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel(
      [
        Animated.timing(isCompleted ? scaleAnimation : barAnimation, {
          toValue: isCompleted ? 1 : 0,
          duration: 300,
          easing: EASING,
          useNativeDriver: false,
        }),
        Animated.timing(isCompleted ? barAnimation : scaleAnimation, {
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

  const barInterpolate =
    isFirstInteraction && isCompleted
      ? '100%'
      : barAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
        });

  const handleOnLayout = (el: LayoutChangeEvent) => {
    if (orientation !== ORIENTATION_HORIZONTAL) return;

    const { width } = el.nativeEvent.layout;

    setWidthContainer(width);
  };

  const styles = useStyles(orientation);

  return (
    <View onLayout={handleOnLayout} style={styles.container}>
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
        <View
          style={[
            styles.bar,
            { backgroundColor: line.normal },
            orientation === ORIENTATION_HORIZONTAL && {
              transform: [
                {
                  translateX: widthContainer / 2,
                },
              ],
              backgroundColor: line.normal,
              width: widthContainer - circleSize,
            },
          ]}
        >
          <Animated.View
            style={[
              styles.barInner,
              { backgroundColor: line.active },
              orientation === ORIENTATION_HORIZONTAL
                ? { width: barInterpolate }
                : { height: barInterpolate },
            ]}
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
    prevProps.stepState?.isCompleted === nextProps.stepState?.isCompleted &&
    prevProps.stepState?.isLast === nextProps.stepState?.isLast &&
    prevProps.stepState?.stepIndex === nextProps.stepState?.stepIndex
);
