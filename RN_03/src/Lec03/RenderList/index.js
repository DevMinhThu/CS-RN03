import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Alto_icon from './images/Alto_icon.png';
import Alto_0 from './images/Alto_0.png';

export class RenderList extends Component {
  listGameInfo = [
    {
      id: 0,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#F4B940',
    },
    {
      id: 1,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#3D85C6',
    },
    {
      id: 2,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#96CC96',
    },
  ];

  renderListInfo = () => {
    return this.listGameInfo.map(item => {
      return (
        <View
          key={item.id}
          style={[
            styles.containerItem,
            {backgroundColor: item.backgroundColor},
          ]}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={styles.imgIcon}
          />
          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
          </View>
        </View>
      );
    });
  };

  render() {
    return <View style={styles.container}>{this.renderListInfo()}</View>;
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

export default RenderList;
