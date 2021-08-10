import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  viewAnimationHeight: {
    flex: 1,
  },

  viewAnimationBackgroundColor: {
    height: 280,
  },

  inputView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: -25,
    position: 'relative',
    zIndex: 99999,
  },

  titleView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  mainTitle: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  viewFlatList: {
    flex:1,
    marginTop: '8%',
  },
});
