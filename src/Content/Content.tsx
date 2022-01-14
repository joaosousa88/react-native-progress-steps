import { Animated, LayoutChangeEvent, View } from 'react-native';
import React, { FC, memo, useEffect, useRef, useState } from 'react';

import { EASING } from '../constants';
import type { IContent } from './Content.types';
import useStyles from './Content.styles';

const Content: FC<IContent> = ({
  children,
  orientation,
  stepState: { isActive, isFirstInteraction } = {},
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const heightAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel(
      [
        Animated.timing(heightAnimation, {
          toValue: isActive ? 1 : 0,
          duration: 400,
          easing: EASING,
          useNativeDriver: false,
        }),
        Animated.timing(opacityAnimation, {
          toValue: isActive ? 1 : 0,
          duration: isActive ? 400 : 200,
          delay: isActive ? 50 : 0,
          easing: EASING,
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
  const styles = useStyles(orientation);
  return (
    <Animated.View
      pointerEvents={isActive ? 'auto' : 'none'}
      style={[styles.container, { opacity, height }]}
    >
      <View style={styles.content} onLayout={handleOnLayout}>
        {children}
      </View>
    </Animated.View>
  );
};

export default memo(
  Content,
  (prevProps, nextProps) =>
    prevProps.stepState?.isActive === nextProps.stepState?.isActive
);
