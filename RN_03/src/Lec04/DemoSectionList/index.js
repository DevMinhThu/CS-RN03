import React, {Component} from 'react';
import {Text, SectionList, StyleSheet, View} from 'react-native';
import Alto_0 from '../../Lec03/RenderList/images/Alto_0.png';
import Alto_icon from '../../Lec03/RenderList/images/Alto_icon.png';
import GameInfo from '../DemoFlatList/GameInfo';

export class DemoSectionList extends Component {
  listGameInfo = [
    {
      title: 'Background: #F4B940',
      data: [
        {
          id: 0,
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          preview: Alto_0,
          backgroundColor: '#F4B940',
        },
      ],
    },
    {
      title: 'Background: #3D85C6',
      data: [
        {
          id: 1,
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          preview: Alto_0,
          backgroundColor: '#3D85C6',
        },
      ],
    },
    {
      title: 'Background: #96CC96',
      data: [
        {
          id: 2,
          title: "Alto's Odyssey",
          icon: Alto_icon,
          subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
          preview: Alto_0,
          backgroundColor: '#96CC96',
        },
      ],
    },
  ];

  renderItem = ({item}) => {
    return <GameInfo game={item} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.listGameInfo}
          renderItem={this.renderItem}
          renderSectionHeader={({section: {title}}) => (
            <View>
              <Text>{title}</Text>
            </View>
          )}
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
  headerSection: {
    backgroundColor: '#bbb',
    paddingVertical: 10,
  },
});

export default DemoSectionList;
