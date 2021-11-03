import { Animated, LayoutChangeEvent, StyleSheet } from 'react-native';
import React, { FC, memo, useEffect, useRef, useState } from 'react';

import { CUSHION } from './constants';
import { IstepState } from '@joaosousa/react-native-progress-steps';

export interface IContent {
  children: React.ReactElement | React.ReactElement[];
  stepState?: IstepState;
}

const Content: FC<IContent> = ({
  children,
  stepState: { isActive, isFirstInteraction } = {},
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const heightAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const translateAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel(
      [
        Animated.timing(heightAnimation, {
          toValue: isActive ? 1 : 0,
          duration: 400,
          useNativeDriver: false,
        }),
        Animated.timing(opacityAnimation, {
          toValue: isActive ? 1 : 0,
          duration: isActive ? 400 : 200,
          delay: isActive ? 50 : 0,
          useNativeDriver: false,
        }),
        Animated.timing(translateAnimation, {
          toValue: isActive ? 1 : 0,
          duration: 400,
          delay: isActive ? 50 : 0,
          useNativeDriver: false,
        }),
      ],
      {
        stopTogether: false,
      }
    ).start();
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnLayout = (el: LayoutChangeEvent) => {
    const { height } = el.nativeEvent.layout;

    setContentHeight(height);
  };

  const opacity = isFirstInteraction && isActive ? 1 : opacityAnimation;
  const height =
    isFirstInteraction && isActive
      ? contentHeight
      : heightAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, contentHeight],
        });
  const translateY =
    isFirstInteraction && isActive
      ? '0'
      : translateAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        });

  return (
    <Animated.View
      pointerEvents={isActive ? 'auto' : 'none'}
      style={[styles.container, { opacity, height }]}
    >
      <Animated.View
        style={[
          styles.content,
          {
            transform: [
              {
                translateY,
              },
            ],
          },
        ]}
        onLayout={handleOnLayout}
      >
        {children}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: CUSHION,
    marginBottom: CUSHION * 2,
    paddingLeft: CUSHION,
    width: '100%',
    overflow: 'hidden',
  },
  content: {
    position: 'absolute',
    width: '100%',
  },
});

export default memo(
  Content,
  (prevProps, nextProps) =>
    prevProps.stepState?.isActive === nextProps.stepState?.isActive
);
