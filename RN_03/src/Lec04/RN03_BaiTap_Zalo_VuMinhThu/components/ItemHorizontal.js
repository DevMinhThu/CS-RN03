import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export class ItemHorizontal extends Component {
  render() {
    const {img, name} = this.props;
    return (
      <View style={styles.viewCharacter}>
        <Image source={img} style={styles.imgCharacter} />
        <Text style={styles.nameCharacter}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewCharacter: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imgCharacter: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  nameCharacter: {
    marginVertical: 5,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ItemHorizontal;
