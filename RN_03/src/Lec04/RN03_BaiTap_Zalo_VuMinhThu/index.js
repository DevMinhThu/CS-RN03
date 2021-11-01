import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Persons from 'react-native-vector-icons/Ionicons';
import ItemHorizontal from './components/ItemHorizontal';
import ItemVertical from './components/ItemVertical';
import {
  blackWidow,
  captain,
  flash,
  ironMan,
  spiderMan,
  strange,
  supperGirl,
  wanda,
  wonderWoman,
  yaSuo,
} from './images';

export class BTLec04 extends Component {
  dataHorizontal = [
    {
      name: 'Wanda',
      img: wanda,
    },
    {
      name: 'YaSuo',
      img: yaSuo,
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

  dataVertical = [
    {
      name: 'Strange',
      img: strange,
      numberFriend: 15,
    },
    {
      name: 'Kara',
      img: supperGirl,
      numberFriend: 15,
    },
    {
      name: 'Diana',
      img: wonderWoman,
      numberFriend: 15,
    },
    {
      name: 'Natasha',
      img: blackWidow,
      numberFriend: 15,
    },
    {
      name: 'Tom Holland',
      img: spiderMan,
      numberFriend: 15,
    },
    {
      name: 'Robert Jr',
      img: ironMan,
      numberFriend: 15,
    },
  ];

  renderItemHorizontal = ({item}) => {
    const {img, name} = item;
    return <ItemHorizontal img={img} name={name} />;
  };

  renderItemVertical = ({item}) => {
    const {img, name, numberFriend} = item;
    return <ItemVertical img={img} name={name} numberFriend={numberFriend} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHorizontal}>
          <View style={styles.viewTitle}>
            <Icon name="history" size={18} color="black" />
            <Text style={styles.titleHorizontal}>Recent search list</Text>
          </View>
          <FlatList
            data={this.dataHorizontal}
            renderItem={this.renderItemHorizontal}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <View style={styles.viewTitle}>
            <Persons name="ios-people" size={18} color="black" />
            <Text style={styles.titleHorizontal}>
              Suggestions for making friends
            </Text>
          </View>
        </View>
        <FlatList
          data={this.dataVertical}
          renderItem={this.renderItemVertical}
          showsVerticalScrollIndicator={false}
        />
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
  viewHorizontal: {
    marginBottom: 10,
  },
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleHorizontal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
    color: 'black',
  },
});

export default BTLec04;
