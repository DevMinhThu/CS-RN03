import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default class PlayItem extends Component {
  render() {
    const {selectImage, playerImage} = this.props;
    return (
      <View>
        <Image style={styles.playerSelect} source={selectImage} />
        <View style={styles.triangle} />
        <Image style={styles.playerImage} source={playerImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerSelect: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ffff00',
    height: 100,
    width: 100,
    marginBottom: 15,
  },
  playerImage: {
    height: 100,
    width: 100,
  },

  // width = 100 ; triangle = 15px
  // position = 50 - 15
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ffff00',
    position: 'absolute',
    top: 100,
    left: 35,
  },
});
