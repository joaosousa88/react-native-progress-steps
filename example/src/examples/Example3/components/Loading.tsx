import { Animated, StyleSheet, View } from 'react-native';
import React, { FC, useEffect, useRef } from 'react';

const hexToRgba = (hex: string, alpha: number = 1) => {
  const match = hex.match(/\w\w/g);

  if (match === null) return;

  const [r, g, b] = match.map((x) => parseInt(x, 16));

  return `rgba(${r},${g},${b},${alpha})`;
};

interface ILoading {
  color: string;
  size?: number;
}

const Loading: FC<ILoading> = ({ color, size = 40 }) => {
  const rotationAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotationAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      })
    ).start();
  }, [rotationAnimation]);

  const rotation = rotationAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.wrapper, { width: size, height: size }]}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ rotate: rotation }],
            borderRadius: size,
            borderColor: hexToRgba(color, 0.2),
            borderTopColor: color,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderWidth: 4,
  },
});

export default Loading;
