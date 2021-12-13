import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

export default class BackgroundView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={StyleSheet.absoluteFill}>
          <View style={styles.header} />
          <View style={styles.content}>
            <View style={styles.insideContent} />
          </View>
        </View>
        <SafeAreaView style={styles.container}>
          {this.props.children}
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: '#000',
    borderBottomLeftRadius: 80,
  },
  content: {
    flex: 2,
    backgroundColor: '#000',
  },
  insideContent: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 80,
  },
});
