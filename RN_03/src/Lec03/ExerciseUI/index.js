import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import Alto_icon from './images/Alto_icon.png';
import Alto_0 from './images/Alto_0.png';

export class ExerciseUI extends Component {
  gameInfo = {
    id: 0,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    preview: Alto_0,
    backgroundColor: '#824671CC',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.gameInfo.preview} resizeMode="contain" />
        <View
          style={[
            styles.containerItem,
            {backgroundColor: this.gameInfo.backgroundColor},
          ]}>
          <Image
            source={this.gameInfo.icon}
            resizeMode="contain"
            style={styles.imgIcon}
          />
          <View style={styles.content}>
            <Text style={styles.title}>{this.gameInfo.title}</Text>
            <Text style={styles.subTitle}>{this.gameInfo.subTitle}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: 10,
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

export default ExerciseUI;
