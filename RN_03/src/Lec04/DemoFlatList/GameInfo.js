import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export class GameInfo extends Component {
  render() {
    const {game} = this.props;
    return (
      <View
        style={[styles.containerItem, {backgroundColor: game.backgroundColor}]}>
        <Image source={game.icon} resizeMode="contain" style={styles.imgIcon} />
        <View style={styles.content}>
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.subTitle}>{game.subTitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  imgIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  containerItem: {
    width: '90%',
    marginTop: 8,
    borderRadius: 10,
    height: 100,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  subTitle: {
    color: '#fff',
    fontSize: 14,
  },
  content: {
    width: '80%',
  },
});

export default GameInfo;
