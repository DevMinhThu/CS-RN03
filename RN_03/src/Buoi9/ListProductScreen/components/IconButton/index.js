import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const fontIcon = {
  fontAwesome: 'fontAwesome',
};

export default class IconButton extends Component {
  renderIcon = () => {
    const {name, size, color, font} = this.props;

    switch (font) {
      case fontIcon.fontAwesome:
        return <FontAwesomeIcon name={name} size={size} color={color} />;
      default:
        return <AntIcon name={name} size={size} color={color} />;
    }
  };

  render() {
    return <TouchableOpacity>{this.renderIcon()}</TouchableOpacity>;
  }
}
