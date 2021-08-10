import styles from './styles';
import * as React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  textClear() {
    this.setState({value: ''});
  }

  render() {
    const {onFocus, onBlur, onChangeText} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.searchIcon}>
            <Ionicons name="search" size={24} />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Aramak Istedigin Ülkeyi Yaz"
            value={this.state.value}
            onChangeText={text => {
              this.setState({value: text});
              onChangeText(text);
            }}
            onFocus={() => {
              onFocus();
            }}
            onBlur={() => {
              onBlur();
            }}
          />
          {this.state.value.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                this.textClear();
                onChangeText("");
              }}
              activeOpacity={1}
              style={styles.clearButton}>
              <Ionicons size={20} name="close-circle-outline" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

SearchInput.propTypes = {
  onFocus: PropTypes.func,
  onPress: PropTypes.func,
  onCancel: PropTypes.func,
  onChangeText: PropTypes.func,
};

export default SearchInput;
