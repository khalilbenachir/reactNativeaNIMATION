import React, {Fragment} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const ScreenOne = props => {
  return (
    <View style={styles.conatainer}>
      <Text style={styles.screen}>Screen One</Text>
      <Button
        title="Go to screen two"
        onPress={() => props.navigation.navigate('RouteNameTwo')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  screen: {
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default ScreenOne;
