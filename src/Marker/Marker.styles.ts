import { StyleSheet } from 'react-native';

const circleSize = 40;
const circleBorderWidth = 4;
const barWidth = circleBorderWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: circleBorderWidth,
    borderRadius: circleSize / 2,
    borderColor: 'gray',
    width: circleSize,
    height: circleSize,
    fontSize: 1,
  },
  circleInner: {
    position: 'absolute',
    borderRadius: circleSize / 2,
    backgroundColor: 'black',
    width: circleSize,
    height: circleSize,
  },
  circleText: {
    position: 'relative',
    zIndex: 1,
    fontWeight: 'bold',
  },
  bar: {
    position: 'relative',
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'gray',
    width: barWidth,
  },
  barInner: {
    backgroundColor: 'black',
    width: barWidth,
    height: '100%',
  },
});

export default styles;
