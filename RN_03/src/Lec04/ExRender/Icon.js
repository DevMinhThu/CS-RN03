import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

// export class Icon extends Component {
//   render() {
//     const {icon, onPress, selectedEmoji} = this.props;
//     return (
//       <TouchableOpacity onPress={onPress}>
//         <Image
//           source={icon}
//           style={[styles.emoji, selectedEmoji && styles.selectedIcon]}
//         />
//       </TouchableOpacity>
//     );
//   }
// }

// func component
const Icon = props => {
  const {icon, onPress, selectedEmoji} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={icon}
        style={[styles.emoji, selectedEmoji && styles.selectedIcon]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  emoji: {
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 25,
  },
  selectedIcon: {
    borderColor: 'gray',
    borderWidth: 5,
  },
});

export default Icon;
