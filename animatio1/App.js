import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {timing, bInterpolate} from 'react-native-redash';
import Logo from './logo';

const {Value, Clock, useCode, set} = Animated;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [expanded, expand] = useState(false);
  const animation = new Value(expanded ? 1 : 0);
  const clock = new Clock();
  useCode(
    set(
      animation,
      timing(clock, animation, {
        toValue: expanded ? 0 : 1,
        duration: 10000,
        easing: Easing.inOut(Easing.ease),
      }),
    ),
    [animation],
  );
  const scale = bInterpolate(animation, 0.4, 1);
  const rotate = bInterpolate(animation, 0, 2 * Math.PI);
  return (
    <TouchableWithoutFeedback onPress={() => expand(!expanded)}>
      <View style={styles.container}>
        <Animated.View style={{transform: [{scale}, {rotate}]}}>
          <Logo />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
