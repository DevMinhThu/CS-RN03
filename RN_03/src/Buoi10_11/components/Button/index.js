import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Text from '../Text';

export default class Button extends Component {
  render() {
    const {title, style, onPress} = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[styles.buttonStyles, style]}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
}

// Button.defaultProps = {
//   style: {
//     backgroundColor: '#bbb',
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// };

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
