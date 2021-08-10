import * as React from 'react';
import {View} from 'react-native';

import HomeScreen from './screens/homeScreen';
import {store} from './utils/store';
import {Provider} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <HomeScreen />
        </View>
      </Provider>
    );
  }
}
export default App;
