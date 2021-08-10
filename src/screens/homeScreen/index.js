import styles from './styles';
import * as React from 'react';
import {View, Text, FlatList, Animated, SafeAreaView} from 'react-native';

import PropTypes from 'prop-types';
import {SearchInput, CountryList} from '../../components';
import {fetchCountries} from '../../actions/countries';
import {connect} from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewHeightAnimation: new Animated.Value(0),
      viewColorAnimation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchCountries());
  }

  onChangeSearchQuery = text => {
    this.props.dispatch(fetchCountries(text));
  };

  onFocus() {
    Animated.timing(this.state.viewHeightAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.viewColorAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  onCancel() {
    Animated.timing(this.state.viewHeightAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.viewColorAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  render() {
    const colorAnimation = this.state.viewColorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(3, 102, 255, 1)', 'rgba(248, 248, 248, 1)'],
    });

    const heightAnimation = this.state.viewHeightAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -250],
    });

    const heightAnimation2 = this.state.viewHeightAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0],
    });

    const renderCountryItem = ({item}) => <CountryList country={item} />;
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.viewAnimationHeight,
            {
              transform: [
                {
                  translateY: heightAnimation,
                },
              ],
            },
          ]}>
          <Animated.View
            style={[
              styles.viewAnimationBackgroundColor,
              {
                backgroundColor: colorAnimation,
              },
            ]}>
            <View style={styles.titleView}>
              <Text style={styles.mainTitle}>COUNTRIES</Text>
            </View>
            <View style={styles.inputView}>
              <SearchInput
                onChangeText={text => {
                  this.onChangeSearchQuery(text);
                }}
                onFocus={() => {
                  this.onFocus();
                }}
                onBlur={() => {
                  this.onCancel();
                }}
              />
            </View>
          </Animated.View>
          <Animated.View
            style={[
              styles.viewFlatList,
              {
                transform: [
                  {
                    translateY: heightAnimation2,
                  },
                ],
              },
            ]}>
            <FlatList
              data={this.props.countries}
              renderItem={renderCountryItem}
              keyExtractor={item => item.name}
            />
          </Animated.View>
        </Animated.View>
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  countries: PropTypes.array,
  searchQuery: PropTypes.string,
};

const stateToProps = state => {
  const {countries, searchQuery} = state.countries;
  return {countries, searchQuery};
};
export default connect(stateToProps)(Home);
