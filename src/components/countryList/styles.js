import {StyleSheet} from 'react-native';
import theme from '../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
    marginHorizontal: '4%',
    padding: '4%',
  },

  countryName: {
    flex: 1,
    marginLeft: '5%',
    color: theme.colors.textColor,
  },

  countryFlag: {
		width: 40,
		height: 30,
		borderRadius: 10,
  },

  arrowIcon: {
    color: theme.colors.textColor,
  },
});
