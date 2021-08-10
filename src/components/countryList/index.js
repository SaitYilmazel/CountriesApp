import styles from './styles';
import * as React from 'react';
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class CountryList extends React.Component {
  render() {
    const TouchableComponent =
      Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;
    const {name, nativeName, alpha2Code} = this.props.country;
    return (
      <TouchableComponent>
        <View style={styles.container}>
          <Image
            style={styles.countryFlag}
            resizeMode="cover"
            source={{
              uri: `https://www.countryflags.io/${alpha2Code}/flat/64.png`,
            }}
          />
          <Text style={styles.countryName}>{`${name}   (${nativeName})`}</Text>
          <MaterialIcon
            style={styles.arrowIcon}
            name="keyboard-arrow-right"
            size={24}
          />
        </View>
      </TouchableComponent>
    );
  }
}

CountryList.propTypes = {
  country: PropTypes.object,
};
export default CountryList;
