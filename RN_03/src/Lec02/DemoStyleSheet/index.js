import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class DemoStyleSheet extends Component {
  render() {
    return (
      <View>
        <View style={styles.boxStyle}>
          <Text style={styles.textStyle}>Purple: #C9C9Ff </Text>
        </View>
        <View style={styles.boxStyle}>
          <Text style={styles.textStyle}>Blue: #3D85C6 </Text>
        </View>
        <View style={styles.boxStyle}>
          <Text style={styles.textStyle}>Green: #96CC96 </Text>
        </View>
        <View style={styles.boxStyle}>
          <Text style={styles.textStyle}>Yellow: #F4B940 </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxStyle: {
    borderRadius: 10,
    backgroundColor: '#C9C9Ff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textStyle: {
    fontWeight: '900',
  },
});

export default DemoStyleSheet;
