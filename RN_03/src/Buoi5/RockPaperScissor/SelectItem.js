import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export default class SelectItem extends Component {
  render() {
    const {selectImage, onPress, selected} = this.props;
    return (
      <TouchableOpacity
        style={[styles.selectItemContainer, selected && styles.selectedItem]}
        onPress={onPress}>
        <Image style={styles.selectImage} source={selectImage} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  selectItemContainer: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  selectedItem: {
    borderWidth: 2,
    borderColor: '#ffff00',
  },
  selectImage: {
    width: 50,
    height: 50,
  },
});
