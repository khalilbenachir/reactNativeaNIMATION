import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

export default class App extends Component {
  state = {animation: new Animated.Value(0), height: new Animated.Value(10)};
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
    }).start(() => {
      Animated.timing(this.state.height, {
        toValue: 300,
        duration: 350,
      }).start();
    });
  };

  render() {
    const animationOpacity = {
      opacity: this.state.animation,
    };
    const animationHeight = {
      height: this.state.height,
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[styles.square, animationOpacity, animationHeight]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: '20%',
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
