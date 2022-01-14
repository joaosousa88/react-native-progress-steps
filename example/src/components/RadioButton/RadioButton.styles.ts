import { StyleSheet } from 'react-native';

const DIAMETER_CIRCLE = 20;
const DIAMETER_INNERCIRCLE = DIAMETER_CIRCLE / 2;
const BORDER_WIDTH = 2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: DIAMETER_CIRCLE,
    width: DIAMETER_CIRCLE,
    borderRadius: DIAMETER_CIRCLE / 2,
    borderWidth: BORDER_WIDTH,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: DIAMETER_INNERCIRCLE,
    width: DIAMETER_INNERCIRCLE,
    borderRadius: DIAMETER_INNERCIRCLE / 2,
    backgroundColor: '#000',
  },
});

export default styles;
