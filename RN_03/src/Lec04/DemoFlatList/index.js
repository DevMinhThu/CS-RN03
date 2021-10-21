import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Alto_0 from '../../Lec03/RenderList/images/Alto_0.png';
import Alto_icon from '../../Lec03/RenderList/images/Alto_icon.png';
import GameInfo from './GameInfo';

export class DemoFlatList extends Component {
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
    {
      id: 3,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#F4B940',
    },
    {
      id: 4,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#3D85C6',
    },
    {
      id: 5,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#96CC96',
    },
    {
      id: 6,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#F4B940',
    },
    {
      id: 7,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#3D85C6',
    },
    {
      id: 8,
      title: "Alto's Odyssey",
      icon: Alto_icon,
      subTitle:
        'Just beyond the horizon sits a majestic desert, vast and unexplored.',
      preview: Alto_0,
      backgroundColor: '#96CC96',
    },
  ];

  renderListInfo = ({item}) => {
    return <GameInfo game={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.scrollContent}
          data={this.listGameInfo}
          renderItem={this.renderListInfo}
          keyExtractor={item => item.id}
          //   horizontal={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
  },
  scrollContent: {
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DemoFlatList;
