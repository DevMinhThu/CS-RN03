import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../Text';

export class Button extends Component {
  render() {
    const {title, onPress, style} = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={[styles.buttonStyles, style]}>
        <Text> {title} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  buttonStyles: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
