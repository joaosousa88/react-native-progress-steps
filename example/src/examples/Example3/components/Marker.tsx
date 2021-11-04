import { Animated, StyleSheet, Text, View } from 'react-native';
import React, { FC, memo, useState } from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from './constants';
import type { IstepState } from '@joaosousa/react-native-progress-steps';
import Loading from './Loading';

interface IMarker {
  stepState?: IstepState;
  isFetching: boolean;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Marker: FC<IMarker> = ({
  stepState: { stepIndex = 0, isCompleted, isActive } = {},
  isFetching,
}) => {
  const isLoading = isFetching && isActive;
  const pathAnimation = new Animated.Value(0);
  const [allDone, setAllDone] = useState(false);

  React.useEffect(() => {
    if (!isCompleted) {
      if (allDone) {
        setAllDone(false);
      }

      return;
    }

    Animated.timing(pathAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setAllDone(true);
    });
  }, [isCompleted]); // eslint-disable-line react-hooks/exhaustive-deps

  const path = allDone
    ? '0'
    : pathAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['30', '0'],
      });

  const borderWidth = isLoading ? 0 : 4;

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loading}>
          <Loading color={COLORS.blue} />
        </View>
      )}
      <Animated.View style={[styles.marker, { borderWidth: borderWidth }]}>
        {isCompleted ? (
          <Svg
            fill="transparent"
            width="20"
            height="20"
            viewBox="0 0 14.914 11.835"
          >
            <AnimatedPath
              stroke={COLORS.green}
              strokeWidth="2"
              strokeDasharray="30, 60"
              strokeDashoffset={path}
              transform="translate(-0.623 -0.072)"
              d="M1.33,6.7l3.787,3.787L14.83.779"
            />
          </Svg>
        ) : (
          <Text style={styles.markerText}>{stepIndex + 1}</Text>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    position: 'absolute',
  },
  marker: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderWidth: 4,
    borderColor: COLORS.blue,
    borderRadius: 20,
  },
  markerText: {
    color: COLORS.blue,
    fontWeight: 'bold',
  },
});

export default memo(
  Marker,
  (prevProps, nextProps) =>
    prevProps.isFetching === nextProps.isFetching &&
    prevProps.stepState?.stepIndex === nextProps.stepState?.stepIndex &&
    prevProps.stepState?.isActive === nextProps.stepState?.isActive &&
    prevProps.stepState?.isCompleted === nextProps.stepState?.isCompleted
);
