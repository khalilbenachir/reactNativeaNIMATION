import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import AppNavigator from './navigation';

const App = props => {
  return <AppNavigator />;
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

export default App;
