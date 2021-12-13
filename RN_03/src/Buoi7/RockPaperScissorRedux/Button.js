import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Button extends Component {
  render() {
    const {title, colors, isLinear, backgroundColor, onPress} = this.props;
    if (isLinear) {
      return (
        <LinearGradient style={styles.buttonContainer} colors={colors}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        </LinearGradient>
      );
    }
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.buttonContainer, {backgroundColor}]}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  backgroundColor: '#000',
  colors: ['#fff', '#000'],
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
