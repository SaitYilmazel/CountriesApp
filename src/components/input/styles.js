import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    borderRadius: Platform.OS === 'ios' ? 12 : 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    paddingLeft: 48,
    position: 'relative',
    zIndex: 88,
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 77,
    left: 0,
    marginLeft: 12,
    marginTop: 13,
  },
  clearButton: {
    position: 'relative',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginLeft: 12,
  },
});
