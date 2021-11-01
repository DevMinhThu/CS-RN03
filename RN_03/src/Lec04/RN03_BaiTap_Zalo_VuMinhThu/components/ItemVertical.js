import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export class ItemVertical extends Component {
  render() {
    const {img, name, numberFriend} = this.props;
    return (
      <View style={styles.viewItemVertical}>
        <View style={styles.ItemVertical}>
          <Image source={img} style={styles.imgCharacter} />
          <View style={styles.infoCharacter}>
            <Text style={styles.nameMainCharacter}>{name}</Text>
            <Text
              style={styles.numberFriend}>{`${numberFriend} bạn chung`}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Kết bạn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgCharacter: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  viewItemVertical: {
    flex: 1,
    backgroundColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  ItemVertical: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoCharacter: {
    marginHorizontal: 10,
  },
  numberFriend: {
    color: 'black',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#bbf',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  textBtn: {
    color: '#060608',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ItemVertical;
