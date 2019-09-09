import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

export default class App extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: -300,
        duration: 1500,
      }).start(() => {
        Animated.timing(this.state.animation, {
          toValue: 0,
          duration: 350,
        }).start();
      });
    });
  };
  render() {
    const animatedPosition = {
      transform: [{translateY: this.state.animation}],
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedPosition]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: '20%',
    width: '20%',
    backgroundColor: 'red',
  },
});
