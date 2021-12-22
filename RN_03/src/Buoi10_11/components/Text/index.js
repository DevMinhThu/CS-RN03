import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class AppText extends Component {
  render() {
    const {children, style, header} = this.props;
    return (
      <Text
        style={[styles.defaultTextStyle, header && styles.headerStyle, style]}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: '#fff',
  },
  headerStyle: {
    fontSize: 30,
    fontWeight: '700',
  },
});
