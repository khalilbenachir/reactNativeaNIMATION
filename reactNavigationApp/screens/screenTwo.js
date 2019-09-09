import React, {Fragment} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const ScreenTwo = props => {
  return (
    <View style={styles.conatainer}>
      <Text style={styles.screen}>Screen Two</Text>
      <Button
        title="Go to screen one"
        onPress={() => props.navigation.navigate('RouteNameOne')}
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
    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default ScreenTwo;
