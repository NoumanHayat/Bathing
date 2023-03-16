import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const styles = StyleSheet.create({
  containerGradient: {flex: 1},
  mainView: {flex: 1},
  itemsCentered: {
    flexDirection: 'row',
    flex: 1,
  },
  imageSize: {
    width: '100%',
    height: '74%',
    resizeMode: 'contain',
    margin: 0,
    marginTop: 0,
    marginRight: 1,
  },
  sliderContainer: {flexDirection: 'row', marginTop: 30},
  title: {color: COLORS.black, fontSize: 24, fontFamily: 'Mulish'},
  text: {
    color: COLORS.white,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  skipText: {
    color: COLORS.gray,
  },
});

export default styles;
