import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const fontIcon = {
  fontAwesome: 'fontAwesome',
};

export default class ButtonIcon extends Component {
  renderIcon = () => {
    const {name, size, color = '#fff', font} = this.props;

    switch (font) {
      case fontIcon.fontAwesome:
        return <FontAwesomeIcon name={name} size={size} color={color} />;
      default:
        return <AntIcon name={name} size={size} color={color} />;
    }
  };

  render() {
    const {style, onPress} = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[styles.buttonStyles, style]}>
        {this.renderIcon()}
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
    // backgroundColor: '#000',
  },
});
