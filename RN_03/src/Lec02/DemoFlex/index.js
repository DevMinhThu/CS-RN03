import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export class DemoFlex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentTop}>
          <View style={styles.topItem} />
          <View style={styles.topItem} />
        </View>
        <View style={styles.contentBottom}>
          <View style={styles.bottomItem}>
            <View style={styles.botItemInner} />
            <View style={styles.botItemInner} />
          </View>
          <View style={styles.bottomItem}>
            <View style={styles.botItemInner} />
            <View style={styles.botItemInner} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentTop: {
    flex: 1,
    backgroundColor: '#96CC96',
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  topItem: {
    backgroundColor: '#F4B940',
    borderRadius: 20,
    height: '30%',
  },
  contentBottom: {
    flex: 1,
    backgroundColor: '#C9C9Ff',
    borderRadius: 20,
    padding: 20,
  },
  bottomItem: {
    flexDirection: 'row',
    flex: 1,
  },
  botItemInner: {
    backgroundColor: '#3D85C6',
    marginHorizontal: 20,
    borderRadius: 20,
    flex: 1,
    marginVertical: 10,
  },
});

export default DemoFlex;
