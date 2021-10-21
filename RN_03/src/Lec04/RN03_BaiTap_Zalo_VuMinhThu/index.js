import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  blackwidow,
  captain,
  flash,
  ironman,
  spiderman,
  strange,
  suppergirl,
  wanda,
  wonderwoman,
  yasuo,
} from './images';

export class BTLec04 extends Component {
  dataHorizontal = [
    {
      name: 'Wanda',
      img: wanda,
    },
    {
      name: 'Yasuo',
      img: yasuo,
    },
    {
      name: 'Captain',
      img: captain,
    },
    {
      name: 'Flash',
      img: flash,
    },
  ];

  renderItem = ({item}) => {
    return (
      <View style={styles.viewCharacter}>
        <Image source={item.img} style={styles.imgCharacter} />
        <Text>{item.name}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHorizontal}>
          <View style={styles.viewTitle}>
            <Icon name="history" size={24} color="black" />
            <Text> Danh sách tìm kiếm gần đây </Text>
          </View>
          <FlatList
            data={this.dataHorizontal}
            renderItem={this.renderItem}
            horizontal={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  viewHorizontal: {},
  viewTitle: {
    flexDirection: 'row',
  },
  imgCharacter: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  viewCharacter: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default BTLec04;
